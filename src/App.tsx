import React from "react";
import HomePage from "./HomePage/HomePage";
import NavBar from "./NavBar/NavBar";
import "./App.css";

function App() {
    const [currentPage, setCurrentPage] = React.useState(<HomePage />);

    const page = [<NavBar setCurrentPage={setCurrentPage} />];

    page.push(currentPage);

    return page;
}

export default App;
