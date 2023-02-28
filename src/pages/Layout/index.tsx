import { Outlet } from "react-router-dom";
import LeftSideBar from "../../components/LeftSidebar/LeftSideBar";

interface Props {
    isDarkmode: boolean;
    setIsDarkmode: React.Dispatch<React.SetStateAction<boolean>>;
}

const Layout: React.FC<Props> = ({ isDarkmode, setIsDarkmode }) => {
    return (
        <>
            <LeftSideBar
                isDarkmode={isDarkmode}
                setIsDarkmode={setIsDarkmode}
            />
            <Outlet />
        </>
    );
};

export default Layout;
