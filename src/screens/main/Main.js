import React, { Component } from 'react';
import { View, Text, Button, ImageBackground, StyleSheet } from 'react-native';

import backgroundImage from '../../assets/prviraz.png';

class MainScreen extends Component { 
  render() {
    return (
      <ImageBackground source={backgroundImage} style={styles.backgroundImage} resizeMode='center'>
        <View>
          <Text>Main screen component</Text>
          <Button title='go to Main tabs'  />
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  backgroundImage: {
    width: '100%',
    height: '100%',
    flex: 1,

  }
});

export default MainScreen;
