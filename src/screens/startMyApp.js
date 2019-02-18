import { Navigation } from 'react-native-navigation';
import{ Platform } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

const startMyApp = () => {

  Promise.all([
    Icon.getImageSource(Platform.OS === 'android' ? 'md-menu' : 'ios-menu', 30)
  ]).then(sources => {
      Navigation.startSingleScreenApp({
        screen: 
          {
            screen: 'Matematika.WelcomeScreen',
            title: 'Matematika by Mystic Peanut',
            icon: sources[0]
          },
          drawer: {
            left: {
              screen: 'Matematika.SideDrawer'
            }
          }
               
      });
  });
};

export default startMyApp;
