import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Btn from '../../components/UI/buttons/ButtonWithBackground';

class GradeScreen1 extends Component {
   constructor(props) {
      super(props);
   } 

   metoda = () => {

   }

  render() {
    return (
      <View style={styles.mainContainer}>
        <Btn
            color='blue'
            textColor='#fff'
            onPress={this.metoda}
         >1. Tip Igre
         </Btn>

         <Btn
            color='blue'
            textColor='#fff'
            onPress={this.metoda}
         >2. Tip Igre
         </Btn>

         <Btn
            color='blue'
            textColor='#fff'
            onPress={this.metoda}
         >3. Tip Igre
         </Btn>

         <Btn
            color='blue'
            textColor='#fff'
            onPress={this.metoda}
         >4. Tip Igre
         </Btn>

         <Btn
            color='blue'
            textColor='#fff'
            onPress={this.metoda}
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
})

export default GradeScreen1;
