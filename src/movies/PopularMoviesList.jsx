// Unable Movies was not able to import for some reason

// import React, {useEffect} from 'react';
// import {StyleSheet, ScrollView} from 'react-native';
// import {Text, Image} from 'react-native-elements';

// import {getMoviesByPopulatrity} from '../../client';

// function PopularMoviesList({movies}) {
//   return (
//     <React.Fragment>
//       <Text h4>Popular</Text>
//       <ScrollView
//         contentInsetAdjustmentBehavior="automatic"
//         horizontal={true}
//         showsHorizontalScrollIndicator={false}
//         keyboardShouldPersistTaps="always"
//         contentContainerStyle={styles.scrollViewContainer}>
//         {movies.map(movie => (
//           <Image
//             key={movie.id}
//             source={{
//               uri: `https://image.tmdb.org/t/p/w500/${movie.poster_path}`,
//             }}
//             alt="movie images"
//             style={styles.image}
//           />
//         ))}
//       </ScrollView>
//     </React.Fragment>
//   );
// }

// export default PopularMoviesList;

// const styles = StyleSheet.create({
//   scrollViewContainer: {
//     height: 150,
//     padding: 10,
//   },
//   card: {
//     width: 100,
//     margin: 1,
//   },
//   image: {
//     height: 150,
//     width: 80,
//     margin: 10,
//     borderRadius: 5,
//   },
// });
