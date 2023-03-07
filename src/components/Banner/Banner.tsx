import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { item, movie } from "../../interface";
import {
    FavouriteMoviesSelector,
    MovieSelector,
} from "../../reducers/selectors";
import { useAppDispatch, useAppSelector } from "../../reducers/store";
import { MovieListSlice } from "../MovieList/movieListSlice";

const Banner: React.FC = () => {
    const movie: movie = useAppSelector(MovieSelector);
    const dispatch = useAppDispatch();
    const favouriteMovies = useAppSelector(FavouriteMoviesSelector);

    const handleAddToFavourite = (movie: item) => {
        dispatch(MovieListSlice.actions.addMovieToFavourite(movie));
    };
    const handleRemoveFromFavourite = (id: string) => {
        dispatch(MovieListSlice.actions.removeMovieFromFavouriteById(id));
    };
    useEffect(() => {
        localStorage.setItem(
            "favouriteMovies",
            JSON.stringify(favouriteMovies)
        );
    }, [favouriteMovies]);
    return (
        <section>
            {/* <nav className="flex space-x-6 text-gray-400 font-medium">
                <a className="hover:text-gray-700 dark:hover:text-white">
                    Phim bộ
                </a>
                <a
                    href="#"
                    className="text-gray-700 dark:text-white font-semibold"
                >
                    Phim lẻ
                </a>
                <a
                    href="#"
                    className="hover:text-gray-700 dark:hover:text-white "
                >
                    Hoạt hình
                </a>
            </nav> */}
            <div className="relative flex flex-col justify-between mt-4 bg-black/10 bg-blend-multiply rounded-3xl h-80 overflow-hidden bg-cover bg-center px-7 pt-4 pb-6 text-white">
                <img
                    crossOrigin="anonymous"
                    src={movie.poster_url}
                    className="absolute opacity-30 w-full h-full"
                />
                <div className="bg-gradient-to-r from-black/30 to-transparent -mx-7 -mb-6 px-7 pb-6 pt-2 z-10">
                    <span className="uppercase text-3xl font-semibold">
                        {movie.name}
                    </span>
                    <div className="text-xs text-gray-200 mt-2">
                        {movie.category.map((category, index) => (
                            <a key={index} href="">
                                {category.name},{" "}
                            </a>
                        ))}
                    </div>
                    <div className="mt-4 flex space-x-3 items-center">
                        <Link
                            to={"/xem-phim/" + movie.slug}
                            className="px-5 py-2.5 bg-red-600 hover:bg-red-700 rounded-lg text-xs inline-block"
                        >
                            Xem phim
                        </Link>
                        {favouriteMovies &&
                        !favouriteMovies.some((mv) => mv._id === movie._id) ? (
                            <span
                                onClick={() => handleAddToFavourite(movie)}
                                title="Yêu thích"
                                className="p-2.5 bg-gray-800/80 rounded-lg hover:bg-red-600 cursor-pointer active:scale-95"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </span>
                        ) : (
                            <span
                                onClick={() =>
                                    handleRemoveFromFavourite(movie._id)
                                }
                                title="Bỏ yêu thích"
                                className="p-2.5 bg-red-600 rounded-lg  cursor-pointer active:scale-95"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </span>
                        )}
                    </div>
                    <div
                        className="mt-5"
                        dangerouslySetInnerHTML={{ __html: movie.content }}
                    ></div>
                </div>
            </div>
        </section>
    );
};

export default Banner;
