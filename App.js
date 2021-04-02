import React from 'react';
import {SafeAreaView, ScrollView, StatusBar} from 'react-native';
import Movies from './src/movies';

const App = () => {
  return (
    <SafeAreaView>
      <StatusBar />
      <ScrollView contentInsetAdjustmentBehavior="automatic" />
      <Movies />
    </SafeAreaView>
  );
};

export default App;
