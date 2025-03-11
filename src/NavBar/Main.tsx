import { ReactElement } from "react";

import styles from "./Main.module.scss";

import HomePage from "../HomePage/Main";
import Page1 from "../Page1/Main";
import Page2 from "../Page2/Main";

interface NavBarProps {
    changePage: (page: ReactElement) => void;
}

function NavBar({ changePage }: NavBarProps) {
    return (
        <nav className={styles.navBar}>
            <button onClick={() => changePage(<HomePage />)}>Home</button>
            <button onClick={() => changePage(<Page1 />)}>Page1</button>
            <button onClick={() => changePage(<Page2 />)}>Page2</button>
        </nav>
    );
}

export default NavBar;
