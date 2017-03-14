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

class RoomsScene extends React.Component {

  constructor(props) {
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


  componentDidMount() {
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

  renderRoomsItems() {
    <TouchableOpacity>

    </TouchableOpacity>
  }

  render() {
    const {
      isLoading,
      activePage,
    } = this.state;

    if (this.state.dataSource.length === 0 || isLoading === true ){
      return(<Text>loading...</Text>)
    }
    return (

      <ListView
        style={{marginTop:100}}
        dataSource={this.state.dataSource}
        renderRow={(rowData) =>

        }/>
    );
  }
}

export default RoomsScene;
