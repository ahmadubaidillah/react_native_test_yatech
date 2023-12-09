import React from 'react';
import {View, Text} from 'react-native';

function Detail() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'red',
      }}>
      <Text style={{color: 'white', fontSize: 30}}>Detail Screen</Text>
    </View>
  );
}

export default Detail;
