import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';

import MainScreen from './src/screens/main/Main';
import GradeScreen1 from './src/screens/grade1/grade1';
import GradeScreen2 from './src/screens/grade2/grade2';
import configureStore from './src/store/configureStore';
import startMainTabs from './src/screens/mainTabs/startMainTabs';

const store = configureStore();

Navigation.registerComponent('Matematika.mainScreen', () => MainScreen, store, Provider);
Navigation.registerComponent('Matematika.GradeScreen1', () => GradeScreen1, store, Provider);
Navigation.registerComponent('Matematika.GradeScreen2', () => GradeScreen2, store, Provider);

// Navigation.startSingleScreenApp({
//   screen: {
//     screen: 'Matematika.mainScreen',
//     title: 'Matematika'
//   }
// });

 startMainTabs();
