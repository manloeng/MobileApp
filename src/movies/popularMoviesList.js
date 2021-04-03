import React from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import {Text, Image} from 'react-native-elements';

// PopularMoviesList Component
function PopularMoviesList({movies = []}) {
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
          <Image
            key={movie.id}
            source={{
              uri: `https://image.tmdb.org/t/p/w500/${movie.poster_path}`,
            }}
            alt="movie images"
            style={popularMoviesListStyles.image}
          />
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
