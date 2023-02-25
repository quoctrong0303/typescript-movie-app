import React, { useEffect, useState } from "react";
import { movieAPI } from "./api/movieAPI";
import "./App.css";
import { MovieSlice } from "./components/Movie/movieSlice";
import { MovieListSlice } from "./components/MovieList/movieListSlice";
import {
  episode,
  item,
  movie,
  movieResponse,
  moviesResponse,
  pagination,
} from "./interface";
import {
  EpisodesSelector,
  MovieSelector,
  MoviesSelector,
  PaginationSelector,
} from "./reducers/selectors";
import { useAppDispatch, useAppSelector } from "./reducers/store";

function App() {
  const dispatch = useAppDispatch();
  const movie: movie = useAppSelector(MovieSelector);
  const movies: item[] = useAppSelector(MoviesSelector);
  const episodes: episode[] = useAppSelector(EpisodesSelector);
  const pagination: pagination = useAppSelector(PaginationSelector);

  const [currentUrl, setCurrentUrl] = useState<string>("");

  useEffect(() => {
    handleLoadMoreMovies();
  }, []);

  const handleLoadMoreMovies = async () => {
    //gọi api load movies từ trang hiện tại + 1
    const moviesRes: moviesResponse = await movieAPI.fetchMovies(
      pagination.currentPage + 1
    );
    //thêm movies, và ttin phân trang vào global state
    if (moviesRes.status === true) {
      dispatch(MovieListSlice.actions.addMovies(moviesRes.items));
      dispatch(MovieListSlice.actions.setPagination(moviesRes.pagination));
    }
  };

  const handleLoadMovie = async (slug: string) => {
    const movieRes: movieResponse = await movieAPI.fetchMovieBySlug(slug);
    if (movieRes.status === true) {
      dispatch(MovieSlice.actions.setMovie(movieRes.movie));
      dispatch(MovieSlice.actions.setEpisodes(movieRes.episodes));
      setCurrentUrl(movieRes.episodes[0].server_data[0].link_embed);
    }
  };

  const handlePlayMovie = (link_embed: string) => {
    setCurrentUrl(link_embed);
  };

  return (
    <div className="grid grid-cols-10">
      <div className="col-span-4">
        {movies.map((movie) => (
          <li key={movie._id} onClick={() => handleLoadMovie(movie.slug)}>
            {movie.name}
          </li>
        ))}
        <div className="flex justify-center">
          <button
            className="p-5 bg-blue-500 text-white text-2xl active:scale-105 active:bg-blue-600"
            onClick={handleLoadMoreMovies}
          >
            Load more
          </button>
        </div>
      </div>
      <div className="col-span-6">
        <div className="">
          {episodes.map((episode) => (
            <div className="flex gap-5">
              <p>{episode.server_name}</p>
              <p>
                {episode.server_data.map((chap) => (
                  <a
                    className="p-5"
                    onClick={() => handlePlayMovie(chap.link_embed)}
                  >
                    {chap.name}
                  </a>
                ))}
              </p>
            </div>
          ))}
        </div>
        <iframe className="w-full h-screen" src={currentUrl}></iframe>
      </div>
    </div>
  );
}

export default App;
