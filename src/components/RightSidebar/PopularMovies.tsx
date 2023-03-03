import { RecentlyMoviesSelector } from "../../reducers/selectors";
import { useAppSelector } from "../../reducers/store";

const PopularMovie: React.FC = () => {
    const recentlyMovies = useAppSelector(RecentlyMoviesSelector);
    const SlicedMovies = recentlyMovies.slice(-3).reverse();
    return (
        <div className="mt-10">
            <span className="font-semibold text-gray-700 dark:text-white">
                Xem gần đây
            </span>
            <ul className="mt-4 text-gray-400 text-xs space-y-3">
                {recentlyMovies &&
                    SlicedMovies.map((mv) => (
                        <li className="flex space-y-3 space-x-3 ">
                            <img
                                src={mv.thumb_url}
                                className="w-1/3 rounded-md"
                            />
                            <div className="flex flex-col justify-between  ">
                                <div className="flex flex-col space-y-1">
                                    <span className="text-gray-700 dark:text-white font-semibold">
                                        {mv.name}
                                    </span>
                                </div>
                                <div className="flex space-x-2 items-center">
                                    <svg
                                        className="w-8 h-5"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={64}
                                        height={32}
                                        viewBox="0 0 64 32"
                                        version="1.1"
                                    >
                                        <g fill="#F5C518">
                                            <rect
                                                x={0}
                                                y={0}
                                                width="100%"
                                                height="100%"
                                                rx={4}
                                            />
                                        </g>
                                        <g
                                            transform="translate(8.000000, 7.000000)"
                                            fill="#000000"
                                            fillRule="nonzero"
                                        >
                                            <polygon points="0 18 5 18 5 0 0 0" />
                                            <path d="M15.6725178,0 L14.5534833,8.40846934 L13.8582008,3.83502426 C13.65661,2.37009263 13.4632474,1.09175121 13.278113,0 L7,0 L7,18 L11.2416347,18 L11.2580911,6.11380679 L13.0436094,18 L16.0633571,18 L17.7583653,5.8517865 L17.7707076,18 L22,18 L22,0 L15.6725178,0 Z" />
                                            <path d="M24,18 L24,0 L31.8045586,0 C33.5693522,0 35,1.41994415 35,3.17660424 L35,14.8233958 C35,16.5777858 33.5716617,18 31.8045586,18 L24,18 Z M29.8322479,3.2395236 C29.6339219,3.13233348 29.2545158,3.08072342 28.7026524,3.08072342 L28.7026524,14.8914865 C29.4312846,14.8914865 29.8796736,14.7604764 30.0478195,14.4865461 C30.2159654,14.2165858 30.3021941,13.486105 30.3021941,12.2871637 L30.3021941,5.3078959 C30.3021941,4.49404499 30.272014,3.97397442 30.2159654,3.74371416 C30.1599168,3.5134539 30.0348852,3.34671372 29.8322479,3.2395236 Z" />
                                            <path d="M44.4299079,4.50685823 L44.749518,4.50685823 C46.5447098,4.50685823 48,5.91267586 48,7.64486762 L48,14.8619906 C48,16.5950653 46.5451816,18 44.749518,18 L44.4299079,18 C43.3314617,18 42.3602746,17.4736618 41.7718697,16.6682739 L41.4838962,17.7687785 L37,17.7687785 L37,0 L41.7843263,0 L41.7843263,5.78053556 C42.4024982,5.01015739 43.3551514,4.50685823 44.4299079,4.50685823 Z M43.4055679,13.2842155 L43.4055679,9.01907814 C43.4055679,8.31433946 43.3603268,7.85185468 43.2660746,7.63896485 C43.1718224,7.42607505 42.7955881,7.2893916 42.5316822,7.2893916 C42.267776,7.2893916 41.8607934,7.40047379 41.7816216,7.58767002 L41.7816216,9.01907814 L41.7816216,13.4207851 L41.7816216,14.8074788 C41.8721037,15.0130276 42.2602358,15.1274059 42.5316822,15.1274059 C42.8031285,15.1274059 43.1982131,15.0166981 43.281155,14.8074788 C43.3640968,14.5982595 43.4055679,14.0880581 43.4055679,13.2842155 Z" />
                                        </g>
                                    </svg>
                                    <span>{mv.year}</span>
                                </div>
                            </div>
                        </li>
                    ))}

                <li className="pt-1">
                    <a
                        href="#"
                        className="px-5 py-2.5 bg-red-600  hover:bg-red-700 rounded-lg text-center font-medium block text-white"
                    >
                        Xem thêm
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default PopularMovie;
