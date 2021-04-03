import React, {useState} from 'react';
import {StyleSheet, ScrollView, View, Image} from 'react-native';

import {Header, Text} from 'react-native-elements';
import SearchPage from './searchPage';

const Movie = ({route}) => {
  const {
    params: {movie, movies},
  } = route;
  const [isSearchOpen, setISearchOpen] = useState(false);

  return (
    <>
      <Header
        centerComponent={{text: 'TMDB', style: {color: '#fff'}}}
        rightComponent={
          <Text onPress={() => setISearchOpen(!isSearchOpen)}>
            {isSearchOpen ? 'Cancel' : 'Search'}
          </Text>
        }
      />

      {isSearchOpen && <SearchPage movies={movies} />}

      {!isSearchOpen && (
        <>
          <Image
            source={{
              uri: `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`,
            }}
            alt="movie images"
            style={pageStyles.image}
          />

          <ScrollView style={pageStyles.container}>
            <Text h3 style={pageStyles.text}>
              {movie.title}
            </Text>
            <View>
              <Text h5 style={pageStyles.text}>
                Vote Average: {movie.vote_average}
              </Text>
              <Text h5 style={pageStyles.text}>
                Total Votes: {movie.vote_count}
              </Text>
            </View>
            <Text h5 style={pageStyles.text}>
              {movie.overview}
            </Text>
            <Text h4 style={pageStyles.text}>
              Recommend Movies
            </Text>
          </ScrollView>
        </>
      )}
    </>
  );
};

const pageStyles = StyleSheet.create({
  container: {
    paddingTop: 25,
    backgroundColor: 'black',
    height: '100%',
    width: '100%',
  },
  image: {
    height: 200,
    width: '100%',
  },
  text: {
    color: 'white',
    padding: 10,
  },
});

export default Movie;
