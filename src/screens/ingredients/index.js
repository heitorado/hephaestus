import React, { Component } from 'react';
import { View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import ListItem from 'components/list_item/index';
import FloatingActionButton from 'components/floating_action_button/index';


class IngredientsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredients: [
        {
          id: 1, name: 'Base Glicerinada Branca', price: 19.99, quantity: 1, measure: 'kg', notes: '',
        },
        {
          id: 2, name: 'Mentol', price: 19.99, quantity: 20, measure: 'g', notes: '',
        },
        {
          id: 3, name: 'Álcool de Cereais', price: 19.99, quantity: 1, measure: 'l', notes: '',
        },
        {
          id: 4, name: 'Essência Maçã Madura', price: 19.99, quantity: 1, measure: 'ml', notes: '',
        },
        {
          id: 5, name: 'Fita para Embrulho Vermelha', price: 19.99, quantity: 5, measure: 'm', notes: '',
        },
      ],
    };
  }

  renderIngredientItem = ({ item }) => <ListItem titleText={item.name} subText={`${item.price}`} />

  render() {
    const { ingredients } = this.state;
    return (
      <View>
        <FlatList
          data={ingredients}
          keyExtractor={(item) => String(item.id)}
          renderItem={this.renderIngredientItem}
        />
        <FloatingActionButton />
      </View>
    );
  }
}

export default IngredientsScreen;
