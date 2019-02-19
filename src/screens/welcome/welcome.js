import React, { Component } from 'react';

import { View, Text, ImageBackground, StyleSheet, Dimensions } from 'react-native';

import Btn from '../../components/UI/buttons/ButtonWithBackground';
import HeaderText from '../../components/UI/texts/headerText';
import backgroundImage from '../../media/images/prviraz.png';

export default class WelcomeScreen extends Component {
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
            <View style={this.state.viewMode === 'portrait' ? 
                styles.portraitHeader  : 
                styles.landscapeHeader}
            >
               <HeaderText>
                  Naucimo matematiku kroz igru i zabavu
               </HeaderText>
            </View>

            <View style={this.state.viewMode === 'portrait' ? 
               { flex: 7 } 
               : { flex: 2 }}
            >
               <ImageBackground 
                  source={backgroundImage} 
                  style={styles.backgroundImage} 
                  resizeMode='center'
               >
               </ImageBackground>
            </View>

            <View style={this.state.viewMode === 'portrait' ? 
               { flex: 3 } 
               : { flex: 2 }}
            >
               <View style={{ 
                  flex: 1, 
                  flexDirection: 'row', 
                  justifyContent: 'space-between' }}
               >
                  <Btn
                     color='blue'
                     textColor='#fff'
                     onPress={this.goToGrade1}
                  >1. Razred
                  </Btn>
                  <Btn
                     color='blue'
                     textColor='#fff'
                     onPress={this.goToGrade4}
                  >4. Razred
                  </Btn>
               </View>
               <View style={{ 
                  flex: 1, 
                  flexDirection: 'row', 
                  justifyContent: 'center' }}
               >
                  <Btn
                     color='blue'
                     textColor='#fff'
                     onPress={this.goToGrade2}
                  >2. Razred
                  </Btn>
                  <Btn
                     color='blue'
                     textColor='#fff'
                     onPress={this.goToGrade3}
                  >3. Razred
                  </Btn>
               </View>
            </View>
         </View>
      );
   }
}

const styles = StyleSheet.create({
   mainContainer: {
      flex: 1,
      alignSelf: "center",
      justifyContent: 'space-between',
   },
   backgroundImage: {
      width: '100%',
      height: '100%',
      flex: 1,
   },
   portraitHeader: {
      flex: 2,
      marginTop: 10, 
   },
   landscapeHeader: {
      flex: 1,
      marginTop: 10, 
   },
});

