import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const MovieDetail = () => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState();
  const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
  const movieDetailBaseUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`;
  // const videoUrl = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}`;
  const baseImageUrl = "https://image.tmdb.org/t/p/w500";
  const defaultImage =
    "https://source.unsplash.com/random/1920x1080/?wallpaper,landscape";

  useEffect(() => {
    axios
      .get(movieDetailBaseUrl)
      .then((res) => setMovieDetails(res.data))
      .catch((err) => toast.error(err.message));
  }, [movieDetailBaseUrl]);

  return (
    <div className="container py-5">
      <h1 className="text-center">{movieDetails?.title}</h1>

      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={
                movieDetails?.poster_path
                  ? baseImageUrl + movieDetails?.poster_path
                  : defaultImage
              }
              alt="..."
              className="img-fluid roundede-start"
            />
          </div>
          <div className="col-md-8 d-flex flex-column">
            <div className="card-body">
              <h5 className="card-title">Overview</h5>
              <p className="card-text">{movieDetails?.overview}</p>
            </div>
            <ul className="list-group">
              <li className="list-group-item">
                {"Release Date : " + movieDetails?.release_date}
              </li>
              <li className="list-group-item">
                {"Rate : " + movieDetails?.vote_average}
              </li>
              <li className="list-group-item">
                {"Total Vote : " + movieDetails?.vote_count}
              </li>
              <li className="list-group-item">
                <Link to={-1} className="card-link">
                  Go back
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
