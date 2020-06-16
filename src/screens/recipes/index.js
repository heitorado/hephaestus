import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import ListItem from 'components/list_item/index';
import FloatingActionButton from 'components/floating_action_button/index';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

const RECIPES = gql`
  query {
    recipes {
      id
      name
      description
    }
  }
`;

const renderRecipeItem = ({ item }) => <ListItem titleText={item.name} subText={item.description} />;

export default function RecipesScreen() {

  const { loading, error, data } = useQuery(RECIPES);

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error :(</Text>;

  console.log(data.recipes);

  return (
    <View>
      <FlatList
        data={data.recipes}
        keyExtractor={(item) => String(item.id)}
        renderItem={renderRecipeItem}
      />
      <FloatingActionButton />
    </View>
  );
}
