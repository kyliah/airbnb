import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ListView,
  Image,
  ActivityIndicator,
  Dimensions,
  ScrollView
} from 'react-native';

import Map from 'react-native-maps';

const styles = StyleSheet.create({
  baseText: {
    fontFamily: 'CircularAirPro-Book',
  },
  textPrice: {
    backgroundColor: '#333', 
    color: '#fff', padding: 5, 
    width: 60, 
    textAlign: 'center', 
    position: 'absolute',
    top: 200,
    left: 0,
    fontWeight: "bold"
  },
  textTitle: {
    fontWeight: 'bold',
    fontSize: 18,
    color:'#666', 
    paddingTop:10, 
    paddingBottom:10
  },
  imgAvatar: {
    width: 50, 
    height: 50, 
    borderRadius: 25, 
    position: 'absolute', 
    right:20, top: 235
  },
  stars: {
    color: "#f2d637",
    fontSize: 20
  }
});

const dim = Dimensions.get('window');
const width = dim.width;
const height = dim.height;

class RoomsContainer extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        rooms:[],
        animating: true,
      };
    }



  componentDidMount() {

    fetch('http://localhost:3001/api/room?city=paris')
      .then(res => res.json())
      .then(json => {
        console.log('App#componentDidMount json', json.rooms);
        this.setState({
          rooms: json.rooms,
        });
      });

  }

  render() {



    if (this.state.rooms.length === 0 ){
      return(
         <ActivityIndicator 
          animating={this.state.animating} 
          style={[styles.centering, {height: 80}]} 
          size="large" />
      )
    }
    console.log("#RoomScene render this.state",this.state)

    return (
      <ScrollView style={{flex:1}}>
        <View style={{paddingTop:63}}>
          <Image
          source={{ uri: this.state.rooms[0].photos[0]}}
          style={{width: width, height: 200}}/>

          <View style={{paddingRight:20, paddingLeft:20}}>

            <Text
              style={[styles.textTitle, styles.baseText, ]}>
              {this.state.rooms[0].title}
            </Text>

            <View style={{flexDirection: 'row'}}>
              <Text style={styles.stars}> 
              {'★'.repeat(this.state.rooms[0].ratingValue)}
              {'☆'.repeat(5 - this.state.rooms[0].ratingValue)}
              </Text>
              <Text style={{marginTop:5, marginLeft:5}}>
                {this.state.rooms[0].reviews} reviews
              </Text>
            </View>

            <Text>{this.state.rooms[0].description}</Text>
          </View>

          <Text style={styles.textPrice}>
            {this.state.rooms[0].price} €
          </Text>

          <Image
          source={{ uri: this.state.rooms[0].user.account.photos[0]}}
          style={styles.imgAvatar}/>
          <View style={{justifyContent: 'center', padding:20}}>
            <Map
              initialRegion={{
              latitude: 48.8564449,
              longitude: 2.4002913,
              latitudeDelta: 0.0120,
              longitudeDelta: 0.0120,
              }}
              style={{height:200, width:width - 40}}>
              <Map.Marker
                coordinate={{
                latitude: 48.8564449,
                longitude: 2.4002913,}}
                title={'Le Reacteur'}
                description={'React Native training institute'} />
            </Map>
          </View>
        </View>
      </ScrollView>
    );
  }

}

export default RoomsContainer;

