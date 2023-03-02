import axios from "axios";

const baseURL = 'https://ophim1.com';



export const movieAPI = {
    fetchMovies: async (page: number) => {
        try {
            const {data} = await axios.get(baseURL + `/danh-sach/phim-moi-cap-nhat?page=${page}`);
            return data;
        } catch (error) {
            console.log(error);
            
        }
    },
    fetchMovieBySlug: async (slug: string) => {
        try {
            const {data} = await axios.get(baseURL + `/phim/${slug}`);
            return data;
        } catch (error) {
            
            
        }
    }
}