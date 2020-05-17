import { TouchableOpacity } from 'react-native';
import React from 'react';
import { Feather } from '@expo/vector-icons';
import Styles from './styles';

const FloatingActionButton = () => (
  <TouchableOpacity style={Styles.fab}>
    <Feather name="plus" size={30} color="black" />
  </TouchableOpacity>
);

export default FloatingActionButton;
