import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const MovieDetail = () => {
  const { id } = useParams();
  const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
  const movieDetailBaseUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`;
  const videoUrl = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}`;
  const baseImageUrl = "https://image.tmdb.org/t/p/w500";
  const defaultImage =
    "https://source.unsplash.com/random/1920x1080/?wallpaper,landscape";

  useEffect(() => {
    axios
      .get(movieDetailBaseUrl)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err.message));
  }, [movieDetailBaseUrl]);

  return <div>MovieDetail</div>;
};

export default MovieDetail;
