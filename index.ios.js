/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
const Firebase = require('firebase');
const styles = require('./styles.js')

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';

class GroceryApp extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>
          I am in a container
        </Text>
      </View>
    );
  }
}

AppRegistry.registerComponent('GroceryApp', () => GroceryApp);
