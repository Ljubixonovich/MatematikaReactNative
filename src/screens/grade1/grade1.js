import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native';

import Btn from '../../components/UI/buttons/ButtonWithBackground';
import HeaderText from '../../components/UI/texts/headerText';

export default class GradeScreen1 extends Component {
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

   goToNovac = () => {
      this.props.navigator.push({
         screen: 'Matematika.NovacScreen1',
         title: 'Novac'
      });
   }

   goToRazlika = () => {
      this.props.navigator.push({
         screen: 'Matematika.RazlikaScreen1',
         title: 'Razlike i Sabirci'
      });
   }

   goToNepoznatBroj = () => {
      this.props.navigator.push({
         screen: 'Matematika.NepoznatBrojScreen1',
         title: 'Otkrivamo Nepoznat Broj'
      });
   }

   render() {
      let screen = (
         <View style={styles.mainContainer}>
            <View>
               <HeaderText>
                  Prvi razred
               </HeaderText>
            </View>

            <View>
               <Btn
                  color='orange'
                  textColor='#fff'
                  onPress={this.goToNovac}
               >Novac
            </Btn>

               <Btn
                  color='blue'
                  textColor='#fff'
                  onPress={this.goToRazlika}
               >Razlika
            </Btn>

               <Btn
                  color='orange'
                  textColor='#fff'
                  onPress={this.goToNepoznatBroj}
               >Otkrivamo nepoznat broj
            </Btn>

               <Btn
                  color='orange'
                  textColor='#fff'
                  onPress={this.metoda}
                  disabled={true}
               >4. Tip Igre
            </Btn>

               <Btn
                  color='orange'
                  textColor='#fff'
                  onPress={this.metoda}
                  disabled={true}
               >5. Tip Igre koju igras
            </Btn>
            </View>
         </View>
      );

      if (this.state.viewMode === 'landscape') {
         return (
            <ScrollView>
               {screen}
            </ScrollView>
         )
      } else {
         return screen;
      }

      
   }
}

const styles = StyleSheet.create({
   mainContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'space-evenly',
   },
});
