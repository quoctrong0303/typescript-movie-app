import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { item, pagination } from "../../interface";

interface MoviesListState {
    movies: item[],
    favouriteMovies: item[],
    recentlyMovies: item[],
    pagination: pagination
}

const initialState:MoviesListState = {
    movies: [],
    favouriteMovies: JSON.parse(localStorage.getItem("favouriteMovies")!) || [],
    recentlyMovies: JSON.parse(localStorage.getItem("recentlyMovies")!) || [],
    pagination: {
        totalItems: 0,
        totalItemsPerPage: 0,
        currentPage: 0,
        totalPages: 0
    }
}


export const MovieListSlice = createSlice({
    name: "moviesList",
    initialState,
    reducers: {
        addMovie: (state, action:PayloadAction<item>) => {
                state.movies.push(action.payload);

        },
        addMovies: (state, action:PayloadAction<item[]>) => {
            //dấu ... là thêm các mảng của payload vào mảng có sẳn
            //Lọc ra các movie mà state.movies chưa có thì mới thêm vào
            const moviesAddYet = action.payload.filter((movie1) => !state.movies.some(movie2 => movie2._id === movie1._id));
            state.movies.push(...moviesAddYet);
        },
        setPagination: (state, action:PayloadAction<pagination>) => {
            state.pagination = action.payload;
        },
        addMovieToRecently: (state, action:PayloadAction<item>) => {
            if(!state.recentlyMovies.some((movie) => movie._id === action.payload._id)) {
                state.recentlyMovies.push(action.payload);
            }
            

        },
        addMovieToFavourite: (state, action:PayloadAction<item>) => {
            if(!state.favouriteMovies.some((movie) => movie._id === action.payload._id)) {
                state.favouriteMovies.push(action.payload);
            }
            
            

        },
        removeMovieFromFavouriteById: (state, action:PayloadAction<string>) => {
          const removedListMovies:item[] = state.favouriteMovies.filter((item) => item._id !== action.payload);
          state.favouriteMovies = removedListMovies;

        }
    }
})
