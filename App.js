import React from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
// import Stack from './src/router';

import Movies from './src/components/movies';
import Movie from './src/components/movies/movie';

const Stack = createStackNavigator();
const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer initialRouteName="home">
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="Home" component={Movies} />
          <Stack.Screen name="Movies" component={Movie} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
});

export default App;
