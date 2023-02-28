import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { episode, movie } from "../../interface";
import { EpisodesSelector, MovieSelector } from "../../reducers/selectors";
import { useAppSelector } from "../../reducers/store";
import Header from "../Header/Header";
import SearchInput from "../RightSidebar/SearchInput";

interface Props {
    handleLoadMovie: (slug: string) => Promise<void>;
}

const Movie: React.FC<Props> = ({ handleLoadMovie }) => {
    const movie: movie = useAppSelector(MovieSelector);
    const episodes: episode[] = useAppSelector(EpisodesSelector);
    const params = useParams();
    useEffect(() => {
        handleLoadMovie(params.slug!);
    }, []);
    return (
        <main className="flex-1 py-10  px-5 sm:px-10">
            <Header />
            <SearchInput />
            <div className="w-full  mt-5 font-montserrat dark:bg-[#191919] border-t-2 dark:border-[#3a3a3a]">
                <h3 className="text-xl dark:text-white font-semibold text-center p-2 text-gray-600">
                    {movie.name}
                </h3>
                <div className="relative flex items-center gap-5 dark:bg-[#3a3a3a] dark:text-[#a7a7a7] p-1">
                    <img
                        src={movie.thumb_url}
                        className="object-contain border-4 border-gray-400 dark:border-black h-[250px]"
                    />
                    <div className="absolute  bottom-0">
                        {movie.trailer_url && (
                            <button
                                type="button"
                                className="focus:outline-none text-white bg-green-700 hover:bg-green-800 font-medium text-sm px-3 py-1.5 ml-1 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                            >
                                Trailer
                            </button>
                        )}
                    </div>
                    <div className="flex-1">
                        <div className="flex gap-5 p-5 text-md font-semibold border-t-2 dark:border-t-black first:border-none">
                            <h4 className="">Thể loại</h4>
                            <p className="flex-1 text-center justify-center flex flex-wrap gap-1">
                                {movie.category.map((cat, index) => (
                                    <span
                                        key={index}
                                        className="py-1 px-2 dark:bg-[#191919] bg-gray-200 mx-1"
                                    >
                                        {cat.name}
                                    </span>
                                ))}
                            </p>
                        </div>
                        <div className="flex gap-5 p-5 text-md font-semibold border-t-2 dark:border-t-black">
                            <h4 className="">Trạng thái</h4>
                            <p className="flex-1 text-center">{movie.lang}</p>
                        </div>
                        <div className="flex gap-5 p-5 text-md font-semibold border-t-2 dark:border-t-black">
                            <h4 className="">Thời lượng</h4>
                            <p className="flex-1 text-center">
                                {movie.episode_current} / {movie.episode_total}
                            </p>
                        </div>
                        <div className="flex gap-5 p-5 text-md font-semibold border-t-2 dark:border-t-black">
                            <h4 className="">Phát hành</h4>
                            <p className="flex-1 text-center">{movie.year}</p>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-3 gap-2 mt-3 font-montserrat text-lg dark:text-[#a7a7a7] font-semibold text-gray-600">
                    <div className="lg:col-span-1 col-span-3 dark:bg-[#3a3a3a] ">
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
                    <div className="lg:col-span-2 col-span-3 dark:bg-[#3a3a3a] ">
                        <h3 className="p-3 border-b border-dashed">Nội dung</h3>
                        <p
                            className="text-sm p-3 leading-7"
                            dangerouslySetInnerHTML={{ __html: movie.content }}
                        ></p>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Movie;
