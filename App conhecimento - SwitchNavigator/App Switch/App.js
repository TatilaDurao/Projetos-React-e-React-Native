import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import Constants from 'expo-constants';


// You can import from local files
import HomeScreen from './screens/HomeScreen';
import Funny from './screens/Funny';
import Math from './screens/Math';
import Nature from './screens/Nature';
import Science from './screens/Science'; 

export default class App extends React.Component {
  render() {
    return (
      <View>
        <AppContainer/>
      </View>
    );
  }
}

var AppNavigator = createSwitchNavigator({
  HomeScreen: HomeScreen,
  Science: Science,
  Math: Math,
  Funny: Funny,
  Nature: Nature,
});

const AppContainer = createAppContainer(AppNavigator);
