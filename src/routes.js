import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Screens from 'screens/index';
import { Feather } from '@expo/vector-icons';
import colors from './styles/colors';

const Tab = createBottomTabNavigator();

function getHeaderTitle(route) {
  const routeName = route.state
    ? route.state.routes[route.state.index].name
    : route.params?.screen || 'Receitas';

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
      tabBarOptions={{
        showLabel: false,
        activeTintColor: colors.secondaryDarker,
        inactiveTintColor: colors.white,
        tabStyle: { backgroundColor: colors.primary },
      }}
    >
      <Tab.Screen
        name="RECIPES_LIST"
        component={Screens.RecipesScreen}
        options={{
          tabBarLabel: 'Receitas',
          tabBarIcon: ({ color }) => (
            <Feather name="list" color={color} size={28} />
          ),
        }}
      />
      <Tab.Screen
        name="PRICE_CALCULATOR"
        component={Screens.PriceCalculatorScreen}
        options={{
          tabBarLabel: 'Preços',
          tabBarIcon: ({ color }) => (
            <Feather name="dollar-sign" color={color} size={28} />
          ),
        }}
      />
      <Tab.Screen
        name="INGREDIENTS_LIST"
        component={Screens.IngredientsScreen}
        options={{
          tabBarLabel: 'Ingredientes',
          tabBarIcon: ({ color }) => (
            <Feather name="grid" color={color} size={28} />
          ),
        }}
      />
      <Tab.Screen
        name="LABEL_GENERATOR"
        component={Screens.LabelGeneratorScreen}
        options={{
          tabBarLabel: 'Etiquetas',
          tabBarIcon: ({ color }) => (
            <Feather name="tag" color={color} size={28} />
          ),
        }}
      />
      <Tab.Screen
        name="SAVED_ITEMS_LIST"
        component={Screens.SavedItemsScreen}
        options={{
          tabBarLabel: 'Itens Salvos',
          tabBarIcon: ({ color }) => (
            <Feather name="archive" color={color} size={28} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
const Stack = createStackNavigator();

function Routes() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor={colors.primaryLight} />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="HOME"
            component={MainTabs}
            options={({ route }) => ({
              headerTitle: getHeaderTitle(route),
              headerStyle: {
                backgroundColor: colors.primary,
              },
              headerTintColor: colors.white,
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

export default Routes;
