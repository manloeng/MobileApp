import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import Movies from './src/movies';

const App = () => {
  return (
    <SafeAreaView>
      <StatusBar />
      <Movies />
    </SafeAreaView>
  );
};

export default App;
