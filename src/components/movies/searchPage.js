import React, {useState, useEffect, useCallback} from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';

import {getMoviesViaInput} from '../../../client';
import {debounce} from 'lodash';

import {Text, SearchBar, Image} from 'react-native-elements';

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
          <View style={searchPageStyles.container} key={movie.id}>
            <Image
              source={{
                uri: `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`,
              }}
              alt="movie images"
              style={searchPageStyles.image}
            />
            <Text style={searchPageStyles.text}>{movie.title}</Text>
          </View>
        ))}
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
    width: 100,
    margin: 1,
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
});

export default SearchPage;
