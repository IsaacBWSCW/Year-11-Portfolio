import React from "react";

import "./App.scss";
import styles from "./App.module.scss";

import HomePage from "./HomePage/HomePage";
import NavBar from "./NavBar/NavBar";

function App() {
    const [currentPage, setCurrentPage] = React.useState(<HomePage />);
    const [changingPage, setChangingPage] = React.useState(false);

    function changePage(page: React.ReactElement) {
        if (changingPage) return;

        setChangingPage(true);
        setCurrentPage(<div className={styles.fadeOut}>{currentPage}</div>);
        setTimeout(() => {
            setCurrentPage(<div className={styles.fadeIn}>{page}</div>);
            setTimeout(() => {
                setCurrentPage(page);
                setChangingPage(false);
            }, 250);
        }, 250);
    }

    return (
        <>
            <NavBar changePage={changePage} />
            {currentPage}
        </>
    );
}

export default App;
