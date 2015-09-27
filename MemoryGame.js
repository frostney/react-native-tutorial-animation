import React, {Component, StyleSheet, View} from 'react-native';

import Board from './Board';

class MemoryGame extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Board />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default MemoryGame;
