import React from 'react';
import { View, Text } from 'react-native';
import { general } from 'styles/index';

const ListItem = (props) => {
  const { name } = props.recipe;
  return (
    <View style={general.box}>
      <Text>{name}</Text>
    </View>
  );
};

export default ListItem;
