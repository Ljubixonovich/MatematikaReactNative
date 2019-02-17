import React, { Component } from 'react';
import { View, Text, Button, ImageBackground, StyleSheet } from 'react-native';

import backgroundImage from '../../assets/prviraz.png';

class WelcomeScreen extends Component { 
  constructor(props) {
    super(props);
  }

  goToGrade1 = () => {
    this.props.navigator.push({
      screen: 'Matematika.GradeScreen1',
      title: 'Matematika 1 grade'
    });
  };

  goToGrade2 = () => {
    this.props.navigator.push({
      screen: 'Matematika.GradeScreen2',
      title: 'Matematika 2 grade'
    });
  };

  render() {
    return (
      <ImageBackground source={backgroundImage} style={styles.backgroundImage} resizeMode='center'>
        <View>
          <Text>Welcome screen component</Text>
          <Button title='1. Grade' onPress={this.goToGrade1}/>
          <Button title='2. Grade' onPress={this.goToGrade2}/>
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

export default WelcomeScreen;
