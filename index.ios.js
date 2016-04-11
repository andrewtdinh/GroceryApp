/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
const Firebase = require('firebase');
const styles = require('./styles.js');
const StatusBar = require('./components/StatusBar');
const ActionButton = require('./components/ActionButton');
const ListItem = require('./components/ListItem');



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
    this.itemsRef = new Firebase("https://react-lua.firebaseio.com/items");
  }
  componentDidMount() {
    this.listenForItems(this.itemsRef);
  }
  _renderItem(item) {
    return (
      <ListItem item={item} onPress={() => {}} />
    );
  }

  _addItem() {
    AlertIOS.alert(
      'Add New Item',
      null,
      [
        {
          text: 'Add',
          onPress: (text) => {
            this.itemsRef.push({ title: text })
          }
        },
      ],
      'plain-text'
    );
  }

  listenForItems(itemsRef) {
    itemsRef.on('value', (snap) => {
      // get children as an array
      var items = [];
      snap.forEach((child) => {
        items.push({
          title: child.val().title,
          _key: child.key()
        });
      });
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(items)
      });
    });
  }

  render() {
    return (
      <View style={styles.container}>

        <StatusBar title="Grocery List" />

        <ListView
          dataSource={this.state.dataSource}
          renderRow={this._renderItem.bind(this)}
          style={styles.listview}/>

        <ActionButton title="Add" onPress={this._addItem.bind(this)} />

      </View>
    );
  }
}


AppRegistry.registerComponent('GroceryApp', () => GroceryApp);
