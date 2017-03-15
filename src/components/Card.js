import React from 'react';

import {
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';

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

class Card extends React.Component {
  render() {
    const {
      name,
      group_photo,
    } = this.props;

    const source = group_photo.photo_link;

    // console.log('Card#render source', source);
    return (
      <View
        style={styles.container}>
        <Text
          style={styles.title}>
          {name}
        </Text>
        <View
          style={styles.photoContainer}>
          <Image
            source={{
              uri: source,
            }}
            resizeMode={'contain'}
            style={styles.photo} />
        </View>
      </View>
    );
  }
}

export default Card;





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