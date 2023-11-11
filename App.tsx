import React from 'react';
import {StyleSheet, View} from 'react-native';
import Screen from './Screen';

function App(): JSX.Element {
  return (
    <View style={styles.container}>
      <Screen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
