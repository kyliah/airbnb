import React from 'react';

import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

import { Actions } from 'react-native-router-flux';

import Global from '../Global';

const styles = StyleSheet.create({
  container: {
    backgroundColor: Global.color.border,
    borderRadius: 15,
    padding: 15,
    shadowColor: Global.color.background,
    shadowOpacity: .8,
    shadowOffset: {
      right: 3,
      bottom: 3,
    }
  },
  title: {
    color: Global.color.secondary,
    fontSize: Global.size.header,
    marginBottom: 10,
    textAlign: 'center',
  },
  photoContainer: {
  },
  photo: {
    height: 150,
  }
});

class RoomsCard extends React.Component {
  render() {

    console.log('Card#render this.props', this.props);
    return (
      <TouchableOpacity>
        <View style={{padding:20}}>
          <Image
            source={{ uri: rowData.photos[0]}}
            style={{width: width - 40, height: 200}}/>
          <Text
            style={[styles.textTitle, styles.baseText]}>
            {rowData.title}
          </Text>

          <View style={{flexDirection: 'row'}}>
            <Text style={styles.stars}> 
              {'★'.repeat(rowData.ratingValue)}
              {'☆'.repeat(5 - rowData.ratingValue)}
            </Text>
            <Text style={{marginTop:5, marginLeft:5}}>
              {rowData.reviews} reviews
            </Text>
          </View>
          <Text style={styles.textPrice}>
              {rowData.price} €
          </Text>
          <Image
            source={{ uri: rowData.user.account.photos[0]}}
            style={styles.imgAvatar}/>
        </View>
      </TouchableOpacity>
    );
  }
}

export default RoomsCard;
