import React, {useState} from 'react';
import {View, Text, Button, StyleSheet, TouchableOpacity} from 'react-native';

const CountApp = () => {
  const [count, setCount] = useState(0);

  const incrementCounter = () => {
    setCount(count + 1);
  };

  const decrementCounter = () => {
    setCount(count - 1);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.counterText}>Counter: {count}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={{
            backgroundColor: 'green',
            width: 30,
            height: 30,
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onPress={incrementCounter}>
          <Text style={{fontSize: 20, color: 'white'}}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: 'green',
            width: 30,
            height: 30,
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onPress={decrementCounter}>
          <Text style={{fontSize: 20, color: 'white', fontWeight: '900'}}>
            -
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  counterText: {
    fontSize: 24,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '50%',
  },
});

export default CountApp;
