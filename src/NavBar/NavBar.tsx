import { ReactElement } from "react";
import HomePage from "../HomePage/HomePage";
import Page1 from "../Page1/Page1";
import "./NavBar.css";

interface NavBarProps {
    setCurrentPage: (setCurrentPage: ReactElement) => void;
}

function NavBar({ setCurrentPage }: NavBarProps) {
    return (
        <nav className="navBar">
            <div className="navBarDiv">
                <button onClick={() => setCurrentPage(<HomePage />)}>
                    Home
                </button>
                <button onClick={() => setCurrentPage(<Page1 />)}>
                    Something1
                </button>
                <button>Something2</button>
            </div>
        </nav>
    );
}

export default NavBar;
