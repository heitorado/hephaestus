import React from 'react';
import {
  Image,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';
import img from '64x64.png';
import Styles from './styles';

const ListItem = (props) => {
  const { titleText, subText } = props;
  return (
    <TouchableOpacity>
      <View style={Styles.listItem}>
        <Image source={img} />
        <View style={Styles.textContainer}>
          <Text style={Styles.titleText}>{titleText}</Text>
          <Text style={Styles.subText} numberOfLines={2}>{subText}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

ListItem.propTypes = {
  titleText: PropTypes.string.isRequired,
  subText: PropTypes.string.isRequired,
};

export default ListItem;
