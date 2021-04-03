import React, {useState, useEffect, useCallback} from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';

import {getMoviesViaInput} from '../../../client';
import {debounce} from 'lodash';

import {Text, SearchBar, Image} from 'react-native-elements';
import {TouchableOpacity} from 'react-native-gesture-handler';

function SearchPage({movies = [], navigation}) {
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
        {moviesCopy.map(movie => {
          let overview = movie.overview;
          if (movie.overview.length >= 100) {
            overview = movie.overview.slice(0, 100) + '...';
          }

          return (
            <TouchableOpacity
              key={movie.id}
              onPress={() => navigation.navigate('Movies', {movie, movies})}>
              <View style={searchPageStyles.container}>
                <Image
                  source={{
                    uri: `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`,
                  }}
                  alt="movie images"
                  style={searchPageStyles.image}
                />
                <View style={searchPageStyles.card}>
                  <Text style={searchPageStyles.text}>{movie.title}</Text>
                  <Text style={searchPageStyles.overview}>{overview}</Text>
                </View>
              </View>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </>
  );
}

const searchPageStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    height: 100,
    marginTop: 1,
    borderWidth: 1,
    borderColor: '#20232a',
    backgroundColor: '#363636',
  },
  card: {
    width: '60%',
  },
  image: {
    height: 99,
    width: 150,
    borderRadius: 5,
  },
  text: {
    color: 'white',
    padding: 10,
  },
  overview: {
    color: 'white',
    padding: 10,
    fontSize: 10,
  },
});

export default SearchPage;
