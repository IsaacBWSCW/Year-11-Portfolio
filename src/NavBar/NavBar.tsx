import { ReactElement } from "react";

import styles from "./NavBar.module.scss";

import HomePage from "../HomePage/HomePage";
import Page1 from "../Page1/Page1";

interface NavBarProps {
    changePage: (page: ReactElement) => void;
}

function NavBar({ changePage }: NavBarProps) {
    return (
        <nav className={styles.navBar}>
            <button onClick={() => changePage(<HomePage />)}>Home</button>
            <button onClick={() => changePage(<Page1 />)}>Something1</button>
            <button onClick={() => changePage(<Page1 />)}>Something2</button>
        </nav>
    );
}

export default NavBar;
