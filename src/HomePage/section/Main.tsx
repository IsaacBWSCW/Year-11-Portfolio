import React from "react";
import styles from "./Main.module.scss";

interface SectionProperties {
    sectionHeader: React.ReactElement;
    children: React.ReactElement;
}

function Section({ sectionHeader, children }: SectionProperties) {
    const [isHovered, setHovered] = React.useState<boolean>(false);

    return (
        <div
            className={styles.section}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            {sectionHeader}
            <div
                className={
                    isHovered
                        ? styles.sectionContentsOpen
                        : styles.sectionContentsClosed
                }
            >
                {children}
            </div>
        </div>
    );
}

export default Section;
