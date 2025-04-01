import styles from "./Main.module.scss";
import Section from "../HomePage/section/Main";

function ProjectsPage() {
    return (
        <div className={styles.mainDiv}>
            <Section
                sectionHeader={
                    <>
                        <h3>Project 1</h3>
                    </>
                }
            >
                <h4>Some text</h4>
            </Section>
        </div>
    );
}

export default ProjectsPage;
