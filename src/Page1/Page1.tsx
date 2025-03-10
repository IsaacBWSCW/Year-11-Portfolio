import "./Page1.css";

function Page1() {
    return (
        <div className="mainDiv">
            <h1>Hello from page1</h1>

            <img src={`${import.meta.env.BASE_URL}/forg.png`} />
        </div>
    );
}

export default Page1;
