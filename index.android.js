/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
 const StatusBar = require('./components/StatusBar');
 const ActionButton = require('./components/ActionButton');
 const ListItem = require('./components/ListItem');
 const { AppRegistry, StyleSheet, Text, View, ListView, AlertIOS } = React;

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';

class GroceryApp extends Component {
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('GroceryApp', () => GroceryApp);
