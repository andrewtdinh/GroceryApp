/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
const Firebase = require('firebase');
const styles = require('./styles.js');
const StatusBar = require('./components/StatusBar');
const ActionButton = require('./components/ActionButton');
const ListItem = require('./components/ListItem');

this.itemsRef = new Firebase("https://react-lua.firebaseio.com/items");

import React, {
  AppRegistry,
  ListView,
  AlertIOS,
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';

// var { AppRegistry, StyleSheet, Text, View, ListView, AlertIOS } = React;

class GroceryApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      })
    };
  }
  componentDidMount() {
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows([{ title: 'Pizza' }])
    })
  }
  _renderItem(item) {
    return (
      <ListItem item={item} onPress={() => {}} />
    );
  }

  render() {
    return (
      <View style={styles.container}>

        <StatusBar title="Grocery List" />

        <ListView
          dataSource={this.state.dataSource}
          renderRow={this._renderItem.bind(this)}
          style={styles.listview}/>

        <ActionButton title="Add" onPress={() => {}} />

      </View>
    );
  }
}


AppRegistry.registerComponent('GroceryApp', () => GroceryApp);
