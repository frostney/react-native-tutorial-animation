/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');

var {
  Component,
  AppRegistry,
  StyleSheet,
  Text,
  View,
} = React;

var Board = require('./Board');

class MemoryGame extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Board />
      </View>
    );
  }
}

var styles = StyleSheet.create({
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

AppRegistry.registerComponent('MemoryGame', () => MemoryGame);
