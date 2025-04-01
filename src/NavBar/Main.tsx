import React, { ReactElement } from "react";

import styles from "./Main.module.scss";

import HomePage from "../HomePage/Main";
import ProjectsPage from "../ProjectsPage/Main";

interface NavBarProps {
    changePage: (page: ReactElement) => void;
    currentChangingPage: React.RefObject<ReactElement>;
}

function NavBar({ changePage, currentChangingPage }: NavBarProps) {
    return (
        <nav className={styles.navBar}>
            <button
                onClick={() => changePage(<HomePage />)}
                className={
                    currentChangingPage.current.type === HomePage ? styles.active : styles.notactive
                }
            >
                Home
            </button>

            <button
                onClick={() => changePage(<ProjectsPage />)}
                className={
                    currentChangingPage.current.type === ProjectsPage ? styles.active : styles.notactive
                }
            > Projects </button>
        </nav>
    );
}

export default NavBar;
