import { RootState } from "./store"

export const MoviesSelector = (state: RootState) => state.moviesList.movies
export const PaginationSelector = (state: RootState) => state.moviesList.pagination


export const MovieSelector = (state: RootState) => state.movie.movie
export const EpisodesSelector = (state: RootState) => state.movie.episodes
export const CurrentUrlSelector = (state: RootState) => state.movie.currentUrl
export const FavouriteMoviesSelector = (state: RootState) => state.moviesList.favouriteMovies
export const RecentlyMoviesSelector = (state: RootState) => state.moviesList.recentlyMovies