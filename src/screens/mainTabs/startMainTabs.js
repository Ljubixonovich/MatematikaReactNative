import { Navigation } from 'react-native-navigation';
import{ Platform } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import icon1 from '../../assets/1.png';
import icon2 from '../../assets/2.png';

const startTabs = () => {

  Promise.all([
    Icon.getImageSource(Platform.OS === 'android' ? 'md-map' : 'ios-map', 30),
    Icon.getImageSource(Platform.OS === 'android' ? 'md-share-alt' : 'ios-share', 30),
    Icon.getImageSource(Platform.OS === 'android' ? 'md-menu' : 'ios-menu', 30)
  ]).then(sources => {
      Navigation.startSingleScreenApp({
        screen: 
          {
            screen: 'Matematika.mainScreen',
            label: 'Matematika',
            title: 'Matematika by Mystic Peanut',
            icon: sources[0]
          }     
      });
  });
};

export default startTabs;
