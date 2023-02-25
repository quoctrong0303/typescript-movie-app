export interface moviesResponse {
    status: boolean,
    items: item[],
    pathImage: string,
    pagination: pagination

}

export interface pagination {
    totalItems: number,
    totalItemsPerPage: number,
    currentPage: number,
    totalPages: number
}


export interface item {
    modified: {
        time: string
    },
    _id: string,
    name: string,
    origin_name: string,
    thumb_url: string,
    poster_url: string,
    slug: string
    year: number
}


export interface movieResponse {
    status: boolean,
    msg: string,
    movie: movie,
    episodes: episode[],
}


export interface movie {
    modified: {
        time: string
    },
    _id: string,
    name: string,
    origin_name: string,
    content: string,
    type: string,
    status: string,
    thumb_url: string,
    poster_url: string,
    is_copyright: string,
    sub_docquyen: string,
    chieurap: false,
    trailer_url: string,
    time: string,
    episode_current: string,
    episode_total: string,
    quality: string,
    lang: string,
    notify: string,
    showtimes: string,
    slug: string,
    year: number,
    actor: string[],
    director: string[],
    category: category[],
    country: country[],


}

export interface category {
    name: string,
}

export interface country {
    name: string,
}


export interface episode {
    server_name: string,
    server_data: server_data[]
}


export interface server_data {
    name: string,
    slug: string,
    filename: string,
    link_embed: string,
    link_m3u8: string,
}