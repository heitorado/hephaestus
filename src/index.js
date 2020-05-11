import { registerRootComponent } from 'expo';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Screens from 'screens/index';
import { Feather } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const App = () => (
  <NavigationContainer>
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
            iconName = 'grid'; // clipboard?
          } else if (route.name === 'LABEL_GENERATOR') {
            iconName = 'tag';
          } else if (route.name === 'SAVED_ITEMS_LIST') {
            iconName = 'archive';
          }
          return <Feather name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen
        name="RECIPES_LIST"
        component={Screens.RecipesScreen}
        options={{ title: 'Receitas' }}
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
    </Tab.Navigator>
  </NavigationContainer>
);

export default registerRootComponent(App);
