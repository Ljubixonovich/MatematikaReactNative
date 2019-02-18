import React, { Component } from 'react';

import { View, Text, Button, ImageBackground, StyleSheet, Dimensions } from 'react-native';

import ButtonWithBackground from '../../components/UI/buttons/ButtonWithBackground';
import backgroundImage from '../../media/images/prviraz.png';

class WelcomeScreen extends Component {
  constructor(props) {
    super(props);
    Dimensions.addEventListener('change', this.updateStyles);
  }

  state = {
    viewMode: 'portrait'
  }

  componentWillUnmount() {
    Dimensions.removeEventListener('change', this.updateStyles);
  }

  updateStyles = dims => {
    this.setState({
      viewMode: dims.window.height > 500 ? 'portrait' : 'landscape'
    });
  }

  goToGrade1 = () => {
    this.props.navigator.push({
      screen: 'Matematika.GradeScreen1',
      title: '1. Razred'
    });
  };

  goToGrade2 = () => {
    this.props.navigator.push({
      screen: 'Matematika.GradeScreen2',
      title: '2. Razred'
    });
  };

  goToGrade3 = () => {
    this.props.navigator.push({
      screen: 'Matematika.GradeScreen3',
      title: '3. Razred'
    });
  };

  goToGrade4 = () => {
    this.props.navigator.push({
      screen: 'Matematika.GradeScreen4',
      title: '4. Razred'
    });
  };

  render() {
    return (
      
        <View style={styles.mainContainer}>
          
          <View style={this.state.viewMode === 'portrait' ? {flex: 1, marginTop: 10, marginBottom: -20 } : {flex: 1, marginTop: 10, marginBottom: -50}}>
            <Text style={styles.headerText}>Naucimo matematiku kroz igru i zabavu</Text>
          </View>

          <View style={this.state.viewMode === 'portrait' ? {flex: 3} : {flex: 1}}>
            <ImageBackground source={backgroundImage} style={styles.backgroundImage} resizeMode='center'>
            </ImageBackground>
          </View>

          <View style={{flex: 1, marginTop: -20}}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <ButtonWithBackground color='blue' textColor='#fff' onPress={this.goToGrade1} >
                1. Razred
              </ButtonWithBackground>

              <ButtonWithBackground color='blue' textColor='#fff' onPress={this.goToGrade4} >
                4. Razred
              </ButtonWithBackground>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
              <ButtonWithBackground color='blue' textColor='#fff' onPress={this.goToGrade2} >
                2. Razred
              </ButtonWithBackground>

              <ButtonWithBackground color='blue' textColor='#fff' onPress={this.goToGrade3} >
                3. Razred
              </ButtonWithBackground>
            </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  backgroundImage: {
    width: '100%',
    height: '100%',
    flex: 1,
  },
  mainContainer: {
    flex: 1,
    alignSelf: "center",
    justifyContent: 'space-between',
  },
  headerText: {
    fontSize: 28,
    textAlign: 'center',
    color: 'red'
  }
});

export default WelcomeScreen;
