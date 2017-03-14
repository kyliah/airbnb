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

import HomeScene from './src/scenes/HomeScene';
import AboutScene from './src/scenes/AboutScene';
import RoomsContainer from './src/containers/RoomsContainer';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    marginTop: 20
  },
});



export default class App extends React.Component {
  render() {
    return (
      <Router>
        <Scene key={'home'} title={'Accueil'} component={RoomsContainer} initial={true}/>
        <Scene key={'about'} title={'About'} component={AboutScene} />
      </Router>

    );
  }
}