import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import ListItem from 'components/list_item';

class RecipesScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [
        { id: 1, name: 'Sabonete Glicerinado' },
        { id: 2, name: 'Vela Aromática' },
        { id: 3, name: 'Esfera Efervescente' },
        { id: 4, name: 'Óleo de Banho' },
        { id: 5, name: 'Sabonete Água de Arroz' },
        { id: 6, name: 'Sabonete Cold Process' },
        { id: 7, name: 'Aromatizador de ambiente' },
        { id: 8, name: 'fiquei sem ideia' },
        { id: 9, name: 'fiquei sem ideia' },
        { id: 10, name: 'fiquei sem ideia' },
        { id: 11, name: 'fiquei sem ideia' },
        { id: 12, name: 'fiquei sem ideia' },
        { id: 13, name: 'fiquei sem ideia' },
        { id: 14, name: 'fiquei sem ideia' },
        { id: 15, name: 'fiquei sem ideia' },
        { id: 16, name: 'fiquei sem ideia' },
        { id: 17, name: 'fiquei sem ideia' },
        { id: 18, name: 'fiquei sem ideia' },
        { id: 19, name: 'fiquei sem ideia' },
        { id: 20, name: 'fiquei sem ideia' },
      ],
    };
  }

  renderRecipeItem = ({ item }) => <ListItem recipe={item} />

  render() {
    const { recipes } = this.state;
    return (
      <View>
        <FlatList
          data={recipes}
          keyExtractor={(item) => String(item.id)}
          renderItem={this.renderRecipeItem}
        />
        <Text>I am the Recipes screen.</Text>
      </View>
    );
  }
}

export default RecipesScreen;
