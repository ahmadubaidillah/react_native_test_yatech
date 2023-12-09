import React, {Component} from 'react';
import {View, Text} from 'react-native';

class Lifecycle extends Component {
  componentDidMount() {
    console.log('Component is mounted.');
  }

  render() {
    return (
      <View>
        <Text>Contoh Component Lifecycle</Text>
      </View>
    );
  }
}

export default Lifecycle;
