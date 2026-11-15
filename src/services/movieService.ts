import axios from "axios";

import { type Movie } from "../types/movie";

const API_URL = "https://api.themoviedb.org/3/search/movie";
axios.defaults.baseURL = API_URL;
axios.defaults.headers.common["Authorization"] =
  `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`;

interface MovieResponse {
  page: number;
  total_results: number;
  total_pages: number;
  results: Movie[];
}

export const fetchMovies = async (query: string): Promise<MovieResponse> => {
  const response = await axios.get("", { params: { query } });
  return response.data;
};
