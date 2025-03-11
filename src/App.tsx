import React from "react";
import { createNoise3D } from "simplex-noise";

import "./App.scss";
import styles from "./App.module.scss";

import HomePage from "./HomePage/Main";
import NavBar from "./NavBar/Main";

function App() {
    const [currentPage, setCurrentPage] = React.useState(<HomePage />);
    const [changingPage, setChangingPage] = React.useState(false);

    const changePage = (page: React.ReactElement) => {
        if (changingPage) return;

        setChangingPage(true);
        setCurrentPage(<div className={styles.fadeOut}>{currentPage}</div>);
        setTimeout(() => {
            setCurrentPage(<div className={styles.fadeIn}>{page}</div>);
            setTimeout(() => {
                setCurrentPage(page);
                setChangingPage(false);
            }, 500);
        }, 800);
    };

    const canvasRef = React.useRef<HTMLCanvasElement | null>(null);
    const animationFrameId = React.useRef(0);

    React.useEffect(() => {
        const noiseGen = createNoise3D();
        const noise = (x: number, y: number, z: number) => {
            let value = 0;
            let amplitude = 1;
            let frequency = 1;
            const octaves = 2;
            for (let i = 0; i < octaves; i++) {
                value +=
                    amplitude *
                    noiseGen(x * frequency, y * frequency, z * frequency);
                amplitude *= 0.5;
                frequency *= 2;
            }
            return value;
        };

        const scale = 0.0025;
        const speed = 1 / 16;
        const resolution = 6 / 100;

        const canvas = canvasRef.current;
        const ctx = canvas?.getContext("2d");

        if (!canvas || !ctx) return;

        const fullWidth = window.innerWidth;
        const fullHeight = window.innerHeight;

        const width = Math.floor(fullWidth * resolution);
        const height = Math.floor(fullHeight * resolution);

        canvas.width = fullWidth;
        canvas.height = fullHeight;

        const draw = (timestamp: number) => {
            if (!ctx) return;

            // Clear the canvas before drawing new frame
            ctx.clearRect(0, 0, fullWidth, fullHeight);

            for (let x = 0; x < width; x++) {
                for (let y = 0; y < height; y++) {
                    // Generate Perlin noise for the current pixel
                    const nx = (x * scale) / resolution;
                    const ny = (y * scale) / resolution;
                    const noiseValue =
                        noise(nx, ny, (timestamp / 1000) * speed) - 0.8;

                    // Map the noise value to a grayscale color
                    const color = Math.floor((noiseValue + 1) * 128); // Normalize to [0, 255]
                    ctx.fillStyle = `rgb(${color}, ${color}, ${color})`;
                    ctx.fillRect(x, y, 1, 1);
                }
            }

            ctx.drawImage(
                canvas,
                0,
                0,
                width,
                height,
                0,
                0,
                fullWidth,
                fullHeight
            );

            animationFrameId.current = requestAnimationFrame(draw);
        };

        animationFrameId.current = requestAnimationFrame(draw);

        // Clean up on unmount
        return () => {
            cancelAnimationFrame(animationFrameId.current);
        };
    }, []);

    return (
        <div>
            <canvas ref={canvasRef} />
            <NavBar changePage={changePage} />
            {currentPage}
        </div>
    );
}

export default App;
