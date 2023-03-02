import React from "react";
import { NavLink } from "react-router-dom";

interface Props {
    isDarkmode: boolean;
    setIsDarkmode: React.Dispatch<React.SetStateAction<boolean>>;
}

const Menu: React.FC<Props> = ({ isDarkmode, setIsDarkmode }) => {
    const handleToggleDarkMode = (e: React.ChangeEvent<HTMLInputElement>) => {
        localStorage.setItem("darkmode", JSON.stringify(!isDarkmode));
        setIsDarkmode(!isDarkmode);
    };

    //in React-Router-Dom V6 supported this function to handle class active
    const navLinkClass = ({ isActive }: { isActive: boolean }) => {
        return isActive
            ? "group flex items-center space-x-2 py-1 dark:text-white  font-semibold  border-r-4 border-r-red-600 fill-red-600"
            : "flex items-center space-x-2 py-1  group hover:border-r-4 hover:border-r-red-600 hover:font-semibold dark:hover:text-white fill-[#6b7280]";
    };

    return (
        <div className="mt-12 flex flex-col gap-y-4 text-gray-500 fill-gray-500 text-sm">
            <div className="text-gray-400/70  font-medium uppercase">Menu</div>
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

            <a className=" flex items-center space-x-2 py-1 mt-4">
                <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
                    <input
                        checked={isDarkmode}
                        onChange={handleToggleDarkMode}
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
    );
};
export default Menu;
