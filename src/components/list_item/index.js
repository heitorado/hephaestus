import React from 'react';
import {
  Image,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import img from '64x64.png';
import Styles from './styles';

const ListItem = (props) => {
  const { name, description } = props.recipe;
  return (
    <TouchableOpacity>
      <View style={Styles.listItem}>
        <Image source={img} />
        <View style={Styles.textContainer}>
          <Text style={Styles.titleText}>{name}</Text>
          <Text style={Styles.subText} numberOfLines={2}>{description}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ListItem;
