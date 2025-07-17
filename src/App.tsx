import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { createNoise3D } from "simplex-noise";

import "./App.scss";
import styles from "./App.module.scss";

import HomePage from "./HomePage/Main";
import NavBar from "./NavBar/Main";
import ProjectsPage from "./ProjectsPage/Main";

function App() {
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

        const scale = 0.000625;
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

            ctx.clearRect(0, 0, fullWidth, fullHeight);

            for (let x = 0; x < width; x++) {
                for (let y = 0; y < height; y++) {
                    const nx = (x * scale) / resolution;
                    const ny = (y * scale) / resolution;
                    const noiseValue =
                        noise(nx, ny, (timestamp / 1000) * speed) - 1.0;

                    const color = Math.floor((noiseValue + 1) * 128);
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

        return () => {
            cancelAnimationFrame(animationFrameId.current);
        };
    }, []);

    return (
        <Router>
            <div>
                <canvas ref={canvasRef} className={styles.backgroundCanvas} />
                <NavBar />

                <div className={styles.pageContainer}>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/projects" element={<ProjectsPage />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;
