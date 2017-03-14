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

class Profile extends React.Component {
  render() {
    const {
      name,
      group_photo,
    } = this.props;

    const source = group_photo.photo_link;

    // console.log('Profile#render source', source);
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

export default Profile;
