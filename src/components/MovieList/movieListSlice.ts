import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import { item, pagination } from "../../interface";

interface MoviesListState {
    movies: item[],
    pagination: pagination
}

const initialState:MoviesListState = {
    movies: [],
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
        }
    }
})
