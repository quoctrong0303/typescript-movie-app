import React from "react";
import Header from "../../components/Header/Header";
import MovieList from "../../components/MovieList/MovieList";
import SearchInput from "../../components/RightSidebar/SearchInput";

interface Props {
    handleLoadMovie: (slug: string) => Promise<void>;
    handleLoadMoreMovies: () => Promise<void>;
}

const Movies: React.FC<Props> = ({ handleLoadMovie, handleLoadMoreMovies }) => {
    return (
        <>
            <main className="flex-1 py-10  px-5 sm:px-10">
                <Header />
                <SearchInput />
                <MovieList handleLoadMovie={handleLoadMovie} />
                <div className="flex justify-center">
                    <button
                        onClick={handleLoadMoreMovies}
                        type="button"
                        className="mt-5 focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                    >
                        Xem thêm
                    </button>
                </div>
            </main>
        </>
    );
};

export default Movies;
