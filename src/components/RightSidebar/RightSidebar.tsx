import React from "react";
import FavoritesMovies from "./FavoritesMovies";
import PopularMovie from "./PopularMovies";

const RightSidebar: React.FC = () => {
    return (
        <aside className=" w-1/5 py-10 px-10  min-w-min  border-l border-gray-300 dark:border-zinc-700 hidden lg:block ">
            {/* <SearchInput /> */}
            <PopularMovie />
            <FavoritesMovies />
        </aside>
    );
};

export default RightSidebar;
