import React, {useState, useEffect} from 'react';
import {StyleSheet, View} from 'react-native';

import {getMoviesByPopulatrity} from '../../client';

import {Text, Header} from 'react-native-elements';
import SearchPage from './searchPage';
import PopularMoviesList from './popularMoviesList';

const Movie = () => {
  const [movies, setMovies] = useState([]);
  const [isSearchOpen, setISearchOpen] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const {data} = await getMoviesByPopulatrity();
      setMovies(data.results);
    }

    fetchData();
  }, []);

  return (
    <View style={pageStyles.container}>
      <Header
        centerComponent={{text: 'TMDB', style: {color: '#fff'}}}
        rightComponent={
          <Text onPress={() => setISearchOpen(!isSearchOpen)}>
            {isSearchOpen ? 'Cancel' : 'Search'}
          </Text>
        }
      />
      {isSearchOpen && <SearchPage movies={movies} />}

      {!isSearchOpen && <PopularMoviesList movies={movies} />}
    </View>
  );
};

const pageStyles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    height: '100%',
  },
});

export default Movie;
