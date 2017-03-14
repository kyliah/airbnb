import React from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import {
  Scene,
  Router
} from 'react-native-router-flux';

import RoomsContainer from './src/scenes/RoomsContainer';
import RoomScene from './src/scenes/RoomsScene';
import RoomScene from './src/scenes/RoomScene';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  navBar: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#FF5A5F',
  },
  navTitle: {
    color: '#fff'
  },
  navIcon: {
    tintColor: 'rgb(255,255,255)',
  },
  baseText: {
    fontFamily: 'Cochin',
  },
});


export default class App extends React.Component {
  render() {
    return (
      <Router 
        navigationBarStyle={styles.navBar} 
        titleStyle={styles.navTitle}
        barButtonIconStyle={styles.navIcon}>
        <Scene key={'home'} title={'Home'} component={RoomsScene} initial={true}/>
        <Scene key={'Room'} title={'Room'} component={RoomScene} />
      </Router>

    );
  }
}