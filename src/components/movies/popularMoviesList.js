import React from 'react';
import {StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import {Text, Image} from 'react-native-elements';

// PopularMoviesList Component
function PopularMoviesList({movies = [], navigation}) {
  return (
    <>
      <Text h4 style={popularMoviesListStyles.text}>
        Popular
      </Text>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        keyboardShouldPersistTaps="always"
        contentContainerStyle={popularMoviesListStyles.scrollViewContainer}>
        {movies.map(movie => (
          <TouchableOpacity
            key={movie.id}
            onPress={() => navigation.navigate('Movies', {movie, movies})}>
            <Image
              source={{
                uri: `https://image.tmdb.org/t/p/w500/${movie.poster_path}`,
              }}
              alt="movie images"
              style={popularMoviesListStyles.image}
            />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </>
  );
}

const popularMoviesListStyles = StyleSheet.create({
  scrollViewContainer: {
    height: 150,
    padding: 10,
  },
  card: {
    width: 100,
    margin: 1,
  },
  image: {
    height: 150,
    width: 80,
    margin: 10,
    borderRadius: 5,
  },
  text: {
    color: 'white',
  },
});

export default PopularMoviesList;
