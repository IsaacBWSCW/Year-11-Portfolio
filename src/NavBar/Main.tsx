import { NavLink } from "react-router-dom";

import styles from "./Main.module.scss";

export default function NavBar() {
    return (
        <nav className={styles.navBar}>
            <NavLink
                to="/"
                end
                className={({ isActive }) =>
                    [styles.button, isActive ? styles.active : styles.notactive]
                        .filter(Boolean)
                        .join(" ")
                }
            >
                Home
            </NavLink>

            <NavLink
                to="/projects"
                className={({ isActive }) =>
                    [styles.button, isActive ? styles.active : styles.notactive]
                        .filter(Boolean)
                        .join(" ")
                }
            >
                Projects
            </NavLink>
        </nav>
    );
}
