import React from 'react';
import {View, Text, Button} from 'react-native';

function Home({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{fontWeight: 'bold', fontSize: 20}}>
        Halo, React Native!
      </Text>
      <View style={{marginTop: 20, width: 300, flexDirection: 'column'}}>
        <View style={{marginBottom: 5}}>
          <Button
            title="Detail"
            onPress={() => navigation.navigate('Detail')}
          />
        </View>
        <View style={{marginBottom: 5}}>
          <Button
            style={{flex: 2}}
            title="CountApp"
            onPress={() => navigation.navigate('CountApp')}
          />
        </View>
        <View style={{marginBottom: 5}}>
          <Button
            style={{flex: 2}}
            title="Lifecycle"
            onPress={() => navigation.navigate('Lifecycle')}
          />
        </View>
        <View style={{marginBottom: 5}}>
          <Button
            style={{flex: 2}}
            title="ApiExample"
            onPress={() => navigation.navigate('ApiExample')}
          />
        </View>
      </View>
    </View>
  );
}

export default Home;
