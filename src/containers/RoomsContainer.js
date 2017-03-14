import React from 'react';

import {
  StyleSheet,
  Text,
  View,
  ListView,
  ActivityIndicator,
} from 'react-native';



class RoomsContainer extends React.Component {

  constructor(props) {
      super(props);
      const ds = new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2
      });
      this.state = {
        dataSource: ds,
        isLoading: true,
      };
    }


  componentDidMount() {
    fetch('http://localhost:3001/api/room?city=paris')
      .then(res => res.json())
      .then(json => {
        console.log('App#componentDidMount json', json);
        this.setState({
          isLoading: false,
          dataSource: this.state.dataSource.cloneWithRows(json)
        });
      });

  }

  render() {
    const {
      isLoading,
    } = this.state;

    if (isLoading === true){
      return (
        <View style={{marginTop:150}}>
          <Text>salut</Text>
          <ListView
            dataSource={this.state.dataSource}
            renderRow={(rowData) => 
              <View>{rowData.title}</View>} />
        </View>
      );
    }
  }

}

export default RoomsContainer;
