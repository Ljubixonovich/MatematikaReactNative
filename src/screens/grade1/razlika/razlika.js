import React, { Component } from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';

import Btn from '../../../components/UI/buttons/ButtonWithBackground';
import HeaderText from '../../../components/UI/texts/headerText';

export default class RazlikaScreen1 extends Component {
   constructor(props) {
      super(props);
   }

   toDo = () => {
      
   }

   goToZadatak1 = () => {
      this.props.navigator.push({
         screen: 'Matematika.RazlikaZadatak1Screen1',
         title: '1. Zadatak'
      }); 
   }

   render() {
      return (
         <ScrollView>
            <View style={styles.mainContainer}>
               <View>
                  <HeaderText>Za toliko veci/manji broj</HeaderText>
                  <Text>Nauci da prepoznas za koliko se jedan broj razlikuje od drugog</Text>
               </View>
               <View style={{justifyContent: 'space-evenly'}}>
                  <Btn color='blue' textColor='#fff' onPress={this.goToZadatak1}>
                     1. Zadatak
                  </Btn>
                  <Btn color='orange' textColor='#fff' onPress={this.toDo}>
                     2. Zadatak
                  </Btn>
                  <Btn color='orange' textColor='#fff' onPress={this.toDo}>
                     3. Zadatak
                  </Btn>
                  <Btn color='orange' textColor='#fff' onPress={this.toDo}>
                     4. Zadatak
                  </Btn>
                  <Btn color='orange' textColor='#fff' onPress={this.toDo}>
                     5. Zadatak
                  </Btn>
                  <Btn color='orange' textColor='#fff' onPress={this.toDo}>
                     6. Zadatak
                  </Btn>
                  <Btn color='orange' textColor='#fff' onPress={this.toDo}>
                     7. Zadatak
                  </Btn>
                  <Btn color='orange' textColor='#fff' onPress={this.toDo}>
                     8. Zadatak
                  </Btn>
               </View>
         
            </View>
         </ScrollView>
      )
   }
}

const styles = StyleSheet.create({
   mainContainer: {
     alignItems: 'center',
   }
});
