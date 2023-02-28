import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { episode, movie, server_data } from "../../interface";
import {
    CurrentUrlSelector,
    EpisodesSelector,
    MovieSelector,
} from "../../reducers/selectors";
import { useAppDispatch, useAppSelector } from "../../reducers/store";
import Header from "../Header/Header";
import { MovieSlice } from "./movieSlice";

interface Props {
    handleLoadMovie: (slug: string) => Promise<void>;
}

const MoviePlayer: React.FC<Props> = ({ handleLoadMovie }) => {
    const params = useParams();
    const dispatch = useAppDispatch();
    const currentUrl = useAppSelector(CurrentUrlSelector);
    const movie: movie = useAppSelector(MovieSelector);
    const [currentEpisode, setCurrentEpisode] = useState<string>(
        params.episode!
    );
    const episodes: episode[] = useAppSelector(EpisodesSelector);
    useEffect(() => {
        const slug = params.slug;
        //nếu slug ở phim khác với phim trong redux thì set lại phim theo slug
        if (slug && slug !== movie.slug) {
            handleLoadMovie(slug);
        }
    }, []);

    useEffect(() => {
        console.log(movie.slug);
        const strServerName = params.server_name;
        //nếu url hợp lệ (gồm chữ tap-)
        if (currentEpisode?.includes("tap-")) {
            //cắt chuỗi lấy name của tập
            const episode = currentEpisode.replace("tap-", "");
            //lọc video đang xem theo tập
            //find servername theo url tùy vào user muốn coi server nào
            if (strServerName) {
                const server = episodes.find((episode) =>
                    episode.server_name.includes(strServerName)
                );
                //nếu tìm được server thích hợp
                if (server) {
                    //lấy server đó ra lọc server_data theo tập trên url
                    const server_data: server_data | undefined =
                        server &&
                        server.server_data &&
                        server.server_data.find((e) => e.slug === episode);
                    //nếu có thì set video embed
                    //xem interface để hiểu rõ
                    if (server_data?.link_embed) {
                        dispatch(
                            MovieSlice.actions.setCurrentUrl(
                                server_data.link_embed
                            )
                        );
                    }
                }
            }
        }
    }, [movie, currentEpisode]);
    return (
        <main className="flex-1 py-10 px-5 sm:px-10">
            <Header />
            <div className="md:h-[500px] h-[300px] lg:h-[600px] w-full">
                <iframe
                    className="h-full w-full"
                    title="Phim"
                    src={currentUrl}
                ></iframe>
            </div>
            <div className="gap-2 mt-3 font-montserrat text-lg dark:text-[#a7a7a7] font-semibold text-gray-600">
                <div className=" dark:bg-[#3a3a3a] ">
                    <h3 className="p-3 border-b border-dashed">
                        Danh sách tập
                    </h3>
                    <div className="max-h-[300px] text-sm p-3 overflow-auto">
                        {episodes.map((episode, index) => (
                            <div
                                className="flex gap-2 my-2 items-center"
                                key={index}
                            >
                                <p>{episode.server_name}: </p>
                                <div className="flex-1 flex flex-wrap gap-1">
                                    {episode.server_data.map(
                                        (data) =>
                                            data.name && (
                                                <Link
                                                    key={data.name}
                                                    to={
                                                        "/xem-phim/" +
                                                        movie.slug +
                                                        "/" +
                                                        "tap-" +
                                                        data.slug +
                                                        "/" +
                                                        episode.server_name
                                                    }
                                                    onClick={() => {
                                                        setCurrentEpisode(
                                                            "tap-" + data.slug
                                                        );
                                                        console.log(
                                                            currentEpisode
                                                        );
                                                    }}
                                                    className="hover:bg-red-600 dark:hover:bg-red-600 hover:text-white flex items-center w-10 h-10 justify-center bg-gray-200 dark:bg-[#191919]"
                                                >
                                                    <p>{data.name}</p>
                                                </Link>
                                            )
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
};

export default MoviePlayer;
