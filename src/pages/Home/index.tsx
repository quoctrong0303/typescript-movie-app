import React from "react";
import Banner from "../../components/Banner/Banner";
import Header from "../../components/Header/Header";
import RightSidebar from "../../components/RightSidebar/RightSidebar";
import SlideMovie from "../../components/SlideMovie/SlideMovie";

interface Props {
    handleLoadMovie: (slug: string) => Promise<void>;
    isLoading: boolean;
}

const Home: React.FC<Props> = ({ handleLoadMovie, isLoading }) => {
    return isLoading ? (
        <p>Loading...</p>
    ) : (
        <>
            <main className="flex-1 py-10  px-5 sm:px-10">
                <Header />
                <Banner />
                <SlideMovie handleLoadMovie={handleLoadMovie} />
            </main>
            <RightSidebar />
        </>
    );
};

export default Home;
