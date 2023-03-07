import { useRef } from "react";
import { NavLink } from "react-router-dom";

const Header: React.FC = () => {
    //in React-Router-Dom V6 supported this function to handle class active
    const navLinkClass = ({ isActive }: { isActive: boolean }) => {
        return isActive
            ? "group flex items-center space-x-2 py-1 dark:text-white  font-semibold   fill-red-600"
            : "flex items-center space-x-2 py-1  group  hover:font-semibold dark:hover:text-white fill-[#6b7280]";
    };
    const refMenuMobile = useRef<HTMLDivElement>(null);
    const handleToggleMenuMobile = () => {
        refMenuMobile.current?.classList.toggle("hidden");
    };

    return (
        <>
            <header className=" font-bold text-lg flex items-center  gap-x-3 md:hidden mb-12">
                <span className="mr-6">
                    <svg
                        onClick={handleToggleMenuMobile}
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-7 w-7 text-gray-700 dark:text-white cursor-pointer"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4 6h16M4 12h16M4 18h7"
                        />
                    </svg>
                </span>
                <svg
                    className="h-8 w-8 fill-red-600 shrink-0"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                >
                    <path d="M10 15.5v-7c0-.41.47-.65.8-.4l4.67 3.5c.27.2.27.6 0 .8l-4.67 3.5c-.33.25-.8.01-.8-.4Zm11.96-4.45c.58 6.26-4.64 11.48-10.9 10.9 -4.43-.41-8.12-3.85-8.9-8.23 -.26-1.42-.19-2.78.12-4.04 .14-.58.76-.9 1.31-.7v0c.47.17.75.67.63 1.16 -.2.82-.27 1.7-.19 2.61 .37 4.04 3.89 7.25 7.95 7.26 4.79.01 8.61-4.21 7.94-9.12 -.51-3.7-3.66-6.62-7.39-6.86 -.83-.06-1.63.02-2.38.2 -.49.11-.99-.16-1.16-.64v0c-.2-.56.12-1.17.69-1.31 1.79-.43 3.75-.41 5.78.37 3.56 1.35 6.15 4.62 6.5 8.4ZM5.5 4C4.67 4 4 4.67 4 5.5 4 6.33 4.67 7 5.5 7 6.33 7 7 6.33 7 5.5 7 4.67 6.33 4 5.5 4Z" />
                </svg>
                <div className="tracking-wide dark:text-white flex-1 select-none">
                    MMovie<span className="text-red-600">.</span>
                </div>
                <div className="relative items-center content-center flex ml-2">
                    <span className="text-gray-400 absolute left-4 cursor-pointer">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                            />
                        </svg>
                    </span>
                    <input
                        type="text"
                        className="text-xs ring-1 bg-transparent ring-gray-200 dark:ring-zinc-600 focus:ring-red-300 pl-10 pr-5 text-gray-600 dark:text-white  py-3 rounded-full w-full outline-none focus:ring-1"
                        placeholder="Search ..."
                    />
                </div>
            </header>
            <div
                ref={refMenuMobile}
                className="bg-white/95 mt-12 z-20 hidden fixed lg:hidden right-0 left-0 bottom-0 top-10 dark:bg-zinc-900/95 z-100 items-center flex  flex-col gap-y-4 text-gray-500 fill-gray-500 text-sm"
            >
                <NavLink to="/" className={navLinkClass}>
                    <svg
                        className="h-5 w-5 "
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                    >
                        <path d="M5 22h14v0c1.1 0 2-.9 2-2v-9 0c0-.27-.11-.53-.29-.71l-8-8v0c-.4-.39-1.02-.39-1.41 0l-8 8h0c-.2.18-.3.44-.3.71v9 0c0 1.1.89 2 2 2Zm5-2v-5h4v5Zm-5-8.59l7-7 7 7V20h-3v-5 0c0-1.11-.9-2-2-2h-4v0c-1.11 0-2 .89-2 2v5H5Z" />
                    </svg>
                    <p>Trang chủ</p>
                </NavLink>
                <NavLink to="/danh-sach-phim" className={navLinkClass}>
                    <svg
                        className="h-5 w-5 "
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                    >
                        <g>
                            <path d="M19 2H9c-1.11 0-2 .89-2 2v5.586l-4.707 4.7v0c-.4.39-.4 1.02 0 1.41 .18.18.44.29.7.29v5 0c0 .55.44 1 1 1h16v0c.55 0 1-.45 1-1v-17c0-1.11-.9-2-2-2Zm-8 18H5v-5.586l3-3 3 3V20Zm8 0h-6v-4 0c.55 0 .99-.45 1-1 0-.27-.11-.53-.3-.72L8.99 9.57V3.984h10v16Z" />
                            <path d="M11 6h2v2h-2Zm4 0h2v2h-2Zm0 4.03h2v1.96h-2Zm0 3.96h2v2h-2Zm-8 1h2v2H7Z" />
                        </g>
                    </svg>
                    <p>Danh sách phim</p>
                </NavLink>
                <NavLink to="/a" className={navLinkClass}>
                    <svg
                        className="h-5 w-5 "
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                    >
                        <g>
                            <path d="M12 2C6.48 2 2 6.48 2 12c0 5.51 4.48 10 10 10 5.51 0 10-4.49 10-10 0-5.52-4.49-10-10-10Zm0 18c-4.42 0-8-3.59-8-8 0-4.42 3.58-8 8-8 4.41 0 8 3.58 8 8 0 4.41-3.59 8-8 8Z" />
                            <path d="M8 16l5.991-2 2-6 -6 2Z" />
                        </g>
                    </svg>
                    <span>Discovery</span>
                </NavLink>
                <NavLink to="/b" className={navLinkClass}>
                    <svg
                        className="h-5 w-5 group-hover:fill-red-600 fill-[#6b7280]"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                    >
                        <g>
                            <path d="M12 2C6.48 2 2 6.48 2 12c0 5.51 4.48 10 10 10 5.51 0 10-4.49 10-10 0-5.52-4.49-10-10-10Zm0 18c-4.42 0-8-3.59-8-8 0-4.42 3.58-8 8-8 4.41 0 8 3.58 8 8 0 4.41-3.59 8-8 8Z" />
                            <path d="M13 7h-2v5.414l3.29 3.29 1.41-1.42 -2.71-2.71Z" />
                        </g>
                    </svg>
                    <span>Coming Soon</span>
                </NavLink>

                <a className=" flex items-center space-x-2 py-1 mt-4">
                    <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
                        <input
                            type="checkbox"
                            id="toggle"
                            className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 border-gray-300 appearance-none cursor-pointer"
                        />
                        <label
                            htmlFor="toggle"
                            className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
                        />
                    </div>
                    <label htmlFor="toggle" className="">
                        Dark Theme
                    </label>
                </a>
            </div>
        </>
    );
};

export default Header;
