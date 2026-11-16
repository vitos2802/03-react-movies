import axios from "axios";

import { type Movie } from "../types/movie";

const API_URL = "https://api.themoviedb.org/3/search/movie";
const VITE_TMDB_TOKEN = import.meta.env.VITE_TMDB_TOKEN;

interface MovieResponse {
  page: number;
  total_results: number;
  total_pages: number;
  results: Movie[];
}

const config = {
  baseURL: API_URL,
  headers: {
    Authorization: `Bearer ${VITE_TMDB_TOKEN}`,
  },
};

export const fetchMovies = async (query: string): Promise<MovieResponse> => {
  const response = await axios.get<MovieResponse>("", {
    params: { query },
    ...config,
  });
  return response.data;
};
