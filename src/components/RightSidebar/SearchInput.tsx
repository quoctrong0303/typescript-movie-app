const SearchInput = () => {
    return (
        <div className="relative items-center content-center hidden lg:flex ">
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
                className="text-xs ring-1 bg-transparent ring-gray-200 dark:ring-zinc-600 focus:ring-red-300 dark:focus:ring-red-700 pl-10 pr-5 text-gray-600 dark:text-white  py-3 rounded-full w-full outline-none focus:ring-1"
                placeholder="Tìm kiếm ..."
            />
        </div>
    );
};

export default SearchInput;
