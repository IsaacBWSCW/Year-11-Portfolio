import styles from "./Main.module.scss";

function NewPageRedirect({
    href,
    children,
}: {
    href: string;
    children: React.ReactNode;
}) {
    return (
        <a href={href} target="_blank" rel="noopener noreferrer">
            {children}
        </a>
    );
}

function HomePage() {
    return (
        <div className={styles.mainDiv}>
            <h1>Isaac Butler</h1>

            <p>
                {"I'm a software developer with 5 years of experience."}
                <br />
                {"I'm proficient at "}
                <NewPageRedirect href="https://wikipedia.org/wiki/C%2B%2B">
                    C++
                </NewPageRedirect>
                {", "}
                <NewPageRedirect href="https://wikipedia.org/wiki/C_(programming_language)">
                    C
                </NewPageRedirect>
                {", "}
                <NewPageRedirect href="https://wikipedia.org/wiki/OpenGL_Shading_Language">
                    GLSL
                </NewPageRedirect>
                {", "}
                <NewPageRedirect href="https://www.lua.org">
                    Lua
                </NewPageRedirect>
                {", and "}
                <NewPageRedirect href="https://www.python.org">
                    Python
                </NewPageRedirect>
                {"."}
                <br />

                {"Learning "}
                <NewPageRedirect href="https://wikipedia.org/wiki/HTML">
                    HTML
                </NewPageRedirect>
                {", "}
                <NewPageRedirect href="https://wikipedia.org/wiki/CSS">
                    CSS
                </NewPageRedirect>
                {", "}
                <NewPageRedirect href="https://wikipedia.org/wiki/JavaScript">
                    JavaScript
                </NewPageRedirect>
                {"/"}
                <NewPageRedirect href="https://wikipedia.org/wiki/TypeScript">
                    TypeScript
                </NewPageRedirect>
                {", "}
                <NewPageRedirect href="https://react.dev">
                    React
                </NewPageRedirect>
                {", "}
                <NewPageRedirect href="https://www.java.com/">
                    Java
                </NewPageRedirect>
                {", and "}
                <NewPageRedirect href="https://kotlinlang.org">
                    Kotlin
                </NewPageRedirect>
                {"."}
            </p>
        </div>
    );
}

export default HomePage;
