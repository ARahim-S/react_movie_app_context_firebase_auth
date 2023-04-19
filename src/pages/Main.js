import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import MovieCard from "../components/MovieCard";

const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
console.log(API_KEY);
const FEATURED_API = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`;
const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}`;

const Main = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMovies(FEATURED_API);
  }, []);

  const getMovies = (API) => {
    axios
      .get(API)
      .then((res) => setMovies(res.data.results))
      .catch((err) =>
        toast.error(err.message, {
          position: toast.POSITION.TOP_LEFT,
        })
      );
  };

  return (
    <div className="d-flex justify-content-center flex-wrap">
      {movies?.map((movie) => (
        <MovieCard key={movie.id} {...movie} />
      ))}
    </div>
  );
};

export default Main;
