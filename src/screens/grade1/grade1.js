import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Btn from '../../components/UI/buttons/ButtonWithBackground';

export default class GradeScreen1 extends Component {
   constructor(props) {
      super(props);
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
    return (
      <View style={styles.mainContainer}>
        <Btn
            color='blue'
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
            color='blue'
            textColor='#fff'
            onPress={this.goToNepoznatBroj}
         >Otkrivamo nepoznat broj
         </Btn>

         <Btn
            color='blue'
            textColor='#fff'
            onPress={this.metoda}
            disabled={true}
         >4. Tip Igre
         </Btn>

         <Btn
            color='blue'
            textColor='#fff'
            onPress={this.metoda}
            disabled={true}
         >5. Tip Igre koju igras
         </Btn>

      </View>
    );
  }
}

const styles = StyleSheet.create({
   mainContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
   },
   trt: {
      
   }
});
