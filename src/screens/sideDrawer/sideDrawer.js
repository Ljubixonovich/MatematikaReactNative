import React, { Component } from 'react';
import { View, Text, Button, Dimensions, StyleSheet } from 'react-native';

import { colors } from '../../assets/index';

export default class SideDrawer extends Component {
   render() {
      return (
         <View style={[
            styles.container,
            { width: Dimensions.get('window').width * 0.7 }
         ]}>
            <View style={styles.drawerItem}>
               <Button title='Fijoka !' onPress={() => alert('Hey hey hey !!!')} />
            </View>
         </View>
      );
   }
}

const styles = StyleSheet.create({
   container: {
      paddingTop: 50,
      backgroundColor: colors.white,
      flex: 1
   },
   drawerItem: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 10,
      backgroundColor: colors.lightGray
   },
   drawerItemIcon: {
      marginRight: 10
   }
});
