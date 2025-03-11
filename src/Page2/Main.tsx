import styles from "./Main.module.scss";

function Page2() {
    return (
        <div className={styles.mainDiv}>
            <h1>Hello from page2</h1>

            <img src={`${import.meta.env.BASE_URL}/forg.png`} />
        </div>
    );
}

export default Page2;
