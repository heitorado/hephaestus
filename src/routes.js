import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Screens from 'screens/index';
import { Feather } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

function getHeaderTitle(route) {
  const routeName = route.state
    ? route.state.routes[route.state.index].name
    : route.params?.screen || 'Feed';

  switch (routeName) {
    case 'RECIPES_LIST':
      return 'Receitas';
    case 'PRICE_CALCULATOR':
      return 'Calculadora de Preço';
    case 'INGREDIENTS_LIST':
      return 'Ingredientes';
    case 'LABEL_GENERATOR':
      return 'Gerador de Etiquetas';
    case 'SAVED_ITEMS_LIST':
      return 'Itens Salvos';
    default:
      return 'Lista de Receitas';
  }
}

function MainTabs() {
  return (
    <Tab.Navigator
      initialRouteName="RECIPES_LIST"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'RECIPES_LIST') {
            iconName = 'list';
          } else if (route.name === 'PRICE_CALCULATOR') {
            iconName = 'dollar-sign';
          } else if (route.name === 'INGREDIENTS_LIST') {
            iconName = 'grid';
          } else if (route.name === 'LABEL_GENERATOR') {
            iconName = 'tag';
          } else if (route.name === 'SAVED_ITEMS_LIST') {
            iconName = 'archive';
          }

          return <Feather name={iconName} size={size} color={focused ? 'orange' : color} />;
        },
      })}
    >
      <Tab.Screen
        name="RECIPES_LIST"
        component={Screens.RecipesScreen}
        options={({ route }) => ({
          title: 'Receitas',
          headerTitle: route.name,
        })}
      />
      <Tab.Screen
        name="PRICE_CALCULATOR"
        component={Screens.PriceCalculatorScreen}
        options={{ title: 'Preços' }}
      />
      <Tab.Screen
        name="INGREDIENTS_LIST"
        component={Screens.IngredientsScreen}
        options={{ title: 'Ingredientes' }}
      />
      <Tab.Screen
        name="LABEL_GENERATOR"
        component={Screens.LabelGeneratorScreen}
        options={{ title: 'Etiquetas' }}
      />
      <Tab.Screen
        name="SAVED_ITEMS_LIST"
        component={Screens.SavedItemsScreen}
        options={{ title: 'Itens Salvos' }}
      />
    </Tab.Navigator >
  );
}

const Stack = createStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="HOME"
          component={MainTabs}
          options={({ route }) => ({
            headerTitle: getHeaderTitle(route),
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
