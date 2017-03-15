import React from 'react';

import {
  StyleSheet,
  Text,
  View,
  ListView,
  Image,
  ActivityIndicator,
  Dimensions,
  TouchableOpacity
} from 'react-native';

import Profile from '../components/Card'; 


class RoomsScene extends React.Component {

  render() {
    const {
      isLoading,
      activePage,
    } = this.state;
    return <Text>salut room scene</Text>
  }
}

export default RoomsScene;
