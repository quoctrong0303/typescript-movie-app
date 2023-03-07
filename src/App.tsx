import { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { movieAPI } from "./api/movieAPI";
import "./App.css";
import Movie from "./components/Movie/Movie";
import MoviePlayer from "./components/Movie/MoviePlayer";
import { MovieSlice } from "./components/Movie/movieSlice";
import { MovieListSlice } from "./components/MovieList/movieListSlice";

import {
    item,
    movie,
    movieResponse,
    moviesResponse,
    pagination,
} from "./interface";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import Movies from "./pages/Movies";
import {
    MovieSelector,
    MoviesSelector,
    PaginationSelector,
} from "./reducers/selectors";
import { useAppDispatch, useAppSelector } from "./reducers/store";

function App() {
    const dispatch = useAppDispatch();
    const movie: movie = useAppSelector(MovieSelector);
    const movies: item[] = useAppSelector(MoviesSelector);
    const pagination: pagination = useAppSelector(PaginationSelector);
    const navigate = useNavigate();

    const [isDarkmode, setIsDarkmode] = useState<boolean>(
        localStorage.getItem("darkmode")
            ? JSON.parse(localStorage.getItem("darkmode")!)
            : false
    );
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        handleLoadMoreMovies();
    }, []);
    useEffect(() => {
        movies[0] && handleLoadMovie(movies[0].slug);
    }, [movies]);
    const handleLoadMoreMovies = async () => {
        //gọi api load movies từ trang hiện tại + 1
        const moviesRes: moviesResponse = await movieAPI.fetchMovies(
            pagination.currentPage + 1
        );
        setIsLoading(true);
        //thêm movies, và ttin phân trang vào global state
        if (moviesRes.status === true) {
            dispatch(MovieListSlice.actions.addMovies(moviesRes.items));
            dispatch(
                MovieListSlice.actions.setPagination(moviesRes.pagination)
            );
            setIsLoading(false);
        }
    };

    const handleLoadMovie = async (slug: string) => {
        if (movie.slug !== slug) {
            try {
                const movieRes: movieResponse = await movieAPI.fetchMovieBySlug(
                    slug
                );
                setIsLoading(true);

                if (movieRes.status === true) {
                    setIsLoading(false);

                    dispatch(MovieSlice.actions.setMovie(movieRes.movie));
                    dispatch(MovieSlice.actions.setEpisodes(movieRes.episodes));
                }
            } catch (error) {
                setIsLoading(false);
                navigate("/danh-sach-phim");
            }
        }
    };

    return (
        <div className={isDarkmode ? "dark" : ""}>
            <div className="font-montserrat text-sm bg-white dark:bg-zinc-900">
                <div className="flex min-h-screen  2xl:max-w-screen-2xl 2xl:mx-auto 2xl:border-x-2 2xl:border-gray-200 dark:2xl:border-zinc-700 ">
                    <Routes>
                        <Route
                            path="/"
                            element={
                                <Layout
                                    isDarkmode={isDarkmode}
                                    setIsDarkmode={setIsDarkmode}
                                />
                            }
                        >
                            <Route
                                path="/"
                                element={
                                    <Home
                                        handleLoadMovie={handleLoadMovie}
                                        isLoading={isLoading}
                                    />
                                }
                            />
                            <Route
                                path="/danh-sach-phim"
                                element={
                                    <Movies
                                        isLoading={isLoading}
                                        handleLoadMovie={handleLoadMovie}
                                        handleLoadMoreMovies={
                                            handleLoadMoreMovies
                                        }
                                    />
                                }
                            />

                            <Route
                                path="/xem-phim/:slug"
                                element={
                                    <Movie handleLoadMovie={handleLoadMovie} />
                                }
                            />

                            <Route
                                path="/xem-phim/:slug/:episode/:server_name"
                                element={
                                    <MoviePlayer
                                        handleLoadMovie={handleLoadMovie}
                                    />
                                }
                            />
                        </Route>
                    </Routes>
                </div>
            </div>
        </div>
    );
}

export default App;
