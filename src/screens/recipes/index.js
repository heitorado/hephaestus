import React, { Component } from 'react';
import { View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import ListItem from 'components/list_item/index';
import FloatingActionButton from 'components/floating_action_button/index';

class RecipesScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [
        { id: 1, name: 'Sabonete Glicerinado', description: 'Soap ipsum dolor sit amet conseqtur adpliscing elit' },
        { id: 2, name: 'Vela Aromática', description: 'Soap ipsum dolor sit amet conseqtur adpliscing elit' },
        { id: 3, name: 'Esfera Efervescente', description: 'Soap ipsum dolor sit amet conseqtur adpliscing elit' },
        { id: 4, name: 'Óleo de Banho', description: 'Soap ipsum dolor sit amet conseqtur adpliscing elit' },
        { id: 5, name: 'Sabonete Água de Arroz', description: 'Soap ipsum dolor sit amet conseqtur adpliscing elit' },
        { id: 6, name: 'Sabonete Cold Process', description: 'Soap ipsum dolor sit amet conseqtur adpliscing elit' },
        { id: 7, name: 'Aromatizador de ambiente', description: 'Soap ipsum dolor sit amet conseqtur adpliscing elit' },
        { id: 8, name: 'Algum outro produto', description: 'Soap ipsum dolor sit amet conseqtur adpliscing elit' },
        { id: 9, name: 'Algum outro produto', description: 'Soap ipsum dolor sit amet conseqtur adpliscing elit' },
        { id: 10, name: 'Algum outro produto', description: 'Soap ipsum dolor sit amet conseqtur adpliscing elit' },
        { id: 11, name: 'Algum outro produto', description: 'Soap ipsum dolor sit amet conseqtur adpliscing elit' },
        { id: 12, name: 'Algum outro produto', description: 'Soap ipsum dolor sit amet conseqtur adpliscing elit' },
        { id: 13, name: 'Algum outro produto', description: 'Soap ipsum dolor sit amet conseqtur adpliscing elit' },
        { id: 14, name: 'Algum outro produto', description: 'Soap ipsum dolor sit amet conseqtur adpliscing elit' },
        { id: 15, name: 'Algum outro produto', description: 'Soap ipsum dolor sit amet conseqtur adpliscing elit' },
        { id: 16, name: 'Algum outro produto', description: 'Soap ipsum dolor sit amet conseqtur adpliscing elit' },
        { id: 17, name: 'Algum outro produto', description: 'Soap ipsum dolor sit amet conseqtur adpliscing elit' },
        { id: 18, name: 'Algum outro produto', description: 'Soap ipsum dolor sit amet conseqtur adpliscing elit' },
        { id: 19, name: 'Algum outro produto', description: 'Soap ipsum dolor sit amet conseqtur adpliscing elit' },
        { id: 20, name: 'Algum outro produto', description: 'Soap ipsum dolor sit amet conseqtur adpliscing elit' },
      ],
    };
  }

  renderRecipeItem = ({ item }) => <ListItem titleText={item.name} subText={item.description} />

  render() {
    const { recipes } = this.state;
    return (
      <View>
        <FlatList
          data={recipes}
          keyExtractor={(item) => String(item.id)}
          renderItem={this.renderRecipeItem}
        />
        <FloatingActionButton />
      </View>
    );
  }
}

export default RecipesScreen;
