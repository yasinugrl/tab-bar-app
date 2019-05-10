import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


export default class Home extends Component {

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center',}}>
        <Text> Anasayfa </Text>
      </View>
    );
  }
}
