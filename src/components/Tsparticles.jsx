import { useCallback, useMemo, useState, useEffect } from "react";
import Particles from "react-tsparticles";
// import { loadSlim } from "tsparticles";
import { loadFull } from "tsparticles"
import '../styles/Tsparticles.css'




function ParticlesComponent() {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    // Update screen width on window resize
    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
        };

        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    // Adjust the number of particles based on screen width
    const particlesNumber = useMemo(() => {
        if (screenWidth < 600) {
            return 30;  // Small screen (mobile)
        } else if (screenWidth < 1200) {
            return 50;  // Medium screen (tablet)
        } else {
            return 90; // Large screen (desktop)
        }
    }, [screenWidth]);

    const options = useMemo(() => {
        return {
            particles: {
                number: {
                    value: particlesNumber,  // Dynamic particle number based on screen width
                },
                size: {
                    value: 3,  // Base size for particles
                    random: {
                        enable: true,  // Enable random size for each particle
                        minimumValue: 2,  // Minimum particle size
                    },
                },
                links: {
                    enable: true,
                    distance: 100, 
                    color: "#73737345",
                },
                move: {
                    enable: true,
                    speed: {
                        min: 0,  // Minimum speed
                        max: 2,  // Maximum speed
                    },
                    random: true,
                },
                color: {
                    value: "#73737345", // Particle color
                },
            },
        };
    }, [particlesNumber]);

    const particlesInit = useCallback((engine) => {
        loadFull(engine);
    }, []);

    return <Particles init={particlesInit} options={options} />;
}

export default ParticlesComponent;