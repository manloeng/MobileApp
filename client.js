import axios from 'axios';
import {api_key, baseUrl} from './secret.json';
export async function getMoviesByPopulatrity(pageNumber) {
  if (!pageNumber) {
    return await axios.get(`${baseUrl}/movie/popular?api_key=${api_key}`);
  }
  return await axios.get(
    `${baseUrl}/movie/popular?page=${pageNumber}&api_key=${api_key}`,
  );
}
