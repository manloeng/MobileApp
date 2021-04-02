import React, {useState, useEffect, useCallback} from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';

import {getMoviesByPopulatrity, getMoviesViaInput} from '../../client';
import {debounce} from 'lodash';

import {Text, Header, SearchBar, Image} from 'react-native-elements';

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
    <View>
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

// SearchPage Component
function SearchPage({movies = []}) {
  const [name, setName] = useState('');
  const [moviesCopy, setMoviesCopy] = useState([]);

  useEffect(() => {
    setMoviesCopy(movies);
  }, [movies]);

  const fetchMoviesViaInput = useCallback(
    debounce(async textInput => {
      if (!textInput) {
        setMoviesCopy(movies);
      }

      const {data} = await getMoviesViaInput(textInput);
      setMoviesCopy(data.results);
    }, 1000),
    [],
  );

  const handleChange = textValue => {
    setName(textValue);
    fetchMoviesViaInput(textValue);
  };

  return (
    <>
      <SearchBar
        value={name}
        placeholder="Type here to search for movies!"
        onChangeText={handleChange}
      />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        {moviesCopy.map(movie => (
          <View style={searchPageStyles.container}>
            <Image
              source={{
                uri: `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`,
              }}
              alt="movie images"
              style={searchPageStyles.image}
            />
          </View>
        ))}
      </ScrollView>
    </>
  );
}

const searchPageStyles = StyleSheet.create({
  container: {
    height: 100,
    marginTop: 1,
    borderWidth: 1,
    borderColor: '#20232a',
    backgroundColor: '#363636',
  },
  card: {
    width: 100,
    margin: 1,
  },
  image: {
    height: 99,
    width: 150,
    borderRadius: 5,
  },
});

// PopularMoviesList Component
function PopularMoviesList({movies = []}) {
  return (
    <>
      <Text h4>Popular</Text>
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
});

export default Movie;
