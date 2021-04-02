import React, {useState, useEffect, useCallback} from 'react';
import {Text, TextInput, View} from 'react-native';
import {getMoviesByPopulatrity, getMoviesViaInput} from '../../client';
import {debounce} from 'lodash';

const Movie = () => {
  const [movies, setMovies] = useState();
  const [name, setName] = useState('');

  useEffect(() => {
    async function fetchData() {
      const {
        data: {results},
      } = await getMoviesByPopulatrity();

      setMovies(results);
    }

    fetchData();
  }, []);

  const fetchMoviesViaInput = useCallback(
    debounce(async name => {
      const {data} = await getMoviesViaInput(name);
      setMovies(data.results);
    }, 1000),
    [],
  );

  const handleChange = textValue => {
    setName(textValue);
    fetchMoviesViaInput(textValue);
  };

  console.log(name, 'name');
  return (
    <View style={{padding: 10}}>
      <TextInput
        style={{height: 40}}
        value={name}
        placeholder="Type here to search for movies!"
        onChangeText={handleChange}
      />
    </View>
  );
};

export default Movie;
