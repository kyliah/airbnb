import React from 'react';

import {
  StyleSheet,
  Text,
  View,
  ListView,
  Image,
  ActivityIndicator,
  Dimensions,
  TouchableOpacity,
  StatusBar
} from 'react-native';


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
    top: 160,
    left: 20,
    fontWeight: "bold"
  },
  textTitle: {
    fontWeight: 'bold', 
    color:'#666', 
    paddingTop:10, 
    paddingBottom:10
  },
  imgAvatar: {
    width: 50, 
    height: 50, 
    borderRadius: 25, 
    position: 'absolute', 
    right:20, bottom: 15
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

/*  constructor(props) {
      super(props);
      const ds = new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2
      });
      this.state = {
        dataSource: ds,
        isLoading: true,
        activePage: 'home',
      };
      this.goToRoom = this.goToRoom.bind(this);
  }
*/

  constructor(props) {
    super(props);
    this.dataSource = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
    });
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

/*  componentDidMount() {
    fetch('http://localhost:3001/api/room?city=paris')
    .then(res => res.json())
    .then(json => {
      console.log('App#componentDidMount json', json.rooms);
       this.setState({
        isLoading: false,
        dataSource: this.state.dataSource.cloneWithRows(json.rooms)
      });
    });
  }
*/

  renderRooms() {
    const {
      activePage,
      roomId
    } = this.state;
    if (activePage !== 'home') {
      return null;
    }
    if (activePage === 'home'){
      return <RoomsScene/>
    }
  }

  render() {
/*    const {
      //isLoading,
      //activePage,
    } = this.state;

    if (this.props.dataSource.length === 0 ){
      return(<Text>loading...</Text>)
    }
*/
console.log("RoomsContainer this props",this.props)
    return (
//renderUser(rowData){return(<Card {...rowDta}/ >)}
//renderRow={this.renderUser}

/*      <ListView
        style={{marginTop:100}}
        dataSource={this.props.dataSource}
        renderRow={(rowData) =>
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
        }/>
*/
<Text style={{marginTop:100}}>salut rooms container</Text>
    );
  }
}

export default RoomsContainer;
