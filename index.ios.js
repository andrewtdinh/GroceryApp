/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
const Firebase = require('firebase');

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

var styles = StyleSheet.create({
  container: {
    backgroundColor: '#f2f2f2',
    flex: 1,
  },
});

AppRegistry.registerComponent('GroceryApp', () => GroceryApp);
