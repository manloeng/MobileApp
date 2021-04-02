import React from 'react';
import {StyleSheet, SafeAreaView, StatusBar} from 'react-native';
import Movies from './src/movies';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <Movies />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    height: '100%',
  },
});
