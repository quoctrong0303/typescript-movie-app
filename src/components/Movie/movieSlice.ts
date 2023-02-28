import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { episode, movie } from "../../interface";

interface MovieState {
    movie: movie,
    episodes: episode[],
    currentUrl: string
}

const initialState: MovieState = {
    movie: {
        modified: {
            time: ''
        },
        _id: '',
        name: '',
        origin_name: '',
        content: '',
        type: '',
        status: '',
        thumb_url: '',
        poster_url: '',
        is_copyright: '',
        sub_docquyen: '',
        chieurap: false,
        trailer_url: '',
        time: '',
        episode_current: '',
        episode_total: '',
        quality: '',
        lang: '',
        notify: '',
        showtimes: '',
        slug: '',
        year: 0,
        actor: [],
        director: [],
        category: [],
        country: [],
    },
    episodes: [],
    currentUrl: ''
}


export const MovieSlice = createSlice({
    name: "movie",
    initialState,
    reducers: {
        setMovie: (state, action: PayloadAction<movie>) => {
            state.movie = action.payload;
        },
        setEpisodes: (state, action: PayloadAction<episode[]>) => {
            state.episodes = action.payload;
        }
        ,setCurrentUrl: (state, action: PayloadAction<string>) => {
            state.currentUrl = action.payload;
        }
    }
})
