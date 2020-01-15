import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import FetchLocation from './components/FetchLocation';

export default function App() {
  getUserLocation = () => {};
  return (
    <View style={styles.container}>
      <FetchLocation onGetLocation={this.getUserLocation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
