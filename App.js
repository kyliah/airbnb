import React from 'react';

import {
  StyleSheet,
  Text,
  View,
  ListView,
  StatusBar
} from 'react-native';

import {
  Scene,
  Router
} from 'react-native-router-flux';

import RoomsContainer from './src/scenes/RoomsContainer';
//import RoomsScene from './src/scenes/RoomsScene';
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

  constructor(props) {
    super(props);
    this.state = {
      activePage: 'home',
      dataSource: {}
    }
  }

  goToRooms() {
    this.setState({
      activePage: 'home',
    });
  }

  goToRoom(roomId) {
    roomId,
    this.setState({
      activePage: 'room',
    });
  }

  componentDidMount() {
    fetch('http://localhost:3001/api/room?city=paris')
      .then(res => res.json())
      .then(json => {
        console.log('App#componentDidMount json', json.rooms);
        this.setState({
          isLoading: false,
          dataSource: this.state.dataSource.cloneWithRows(json.rooms)
        });
      console.log("#App componentDidMount",dataSource);
      });
  }

/* renderRooms() {
    const {
      activePage,
      roomId
    } = this.state;
    return <RoomsContainer
            dataSource={dataSource}/>
  }
*/

  render() {
    const {
      dataSource,
    } = this.state;
    
    return (
      <View style={{ flex: 1 }}>
        <Router 
          navigationBarStyle={styles.navBar} 
          titleStyle={styles.navTitle}
          barButtonIconStyle={styles.navIcon}>
          <Scene key={'home'} title={'Home'} component={RoomsContainer} initial={true} dataSource={dataSource}/>
          <Scene key={'Room'} title={'Room'} component={RoomScene} />
        </Router>
        <StatusBar barStyle="light-content" />
      </View>
    );
  }
}