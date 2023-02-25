import { RootState } from "./store"

export const MoviesSelector = (state: RootState) => state.moviesList.movies
export const PaginationSelector = (state: RootState) => state.moviesList.pagination


export const MovieSelector = (state: RootState) => state.movie.movie
export const EpisodesSelector = (state: RootState) => state.movie.episodes