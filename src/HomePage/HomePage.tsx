import "./HomePage.css";

function HomePage() {
    return (
        <div className="mainDiv">
            <h1>Hello</h1>

            <img src={`${import.meta.env.BASE_URL}/forg.png`} />
        </div>
    );
}

export default HomePage;
