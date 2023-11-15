"use client"
import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";


const DotParticals = (props) => {
    const particlesInit = useCallback(async (engine) => {
        // console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async (container) => {
        // await console.log(container);
    }, []);

    return (
        <Particles
            className="-z-10 absolute w-full h-full"
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                background: {
                    color: {
                        value: "#09090b",
                    },
                },
                fpsLimit: 120,
                interactivity: {
                    events: {
                        onClick: {
                            enable: false,
                            mode: "push",
                        },
                        onHover: {
                            enable: true,
                            mode: "grab",
                        },
                        resize: true,
                    },
                    modes: {
                        push: {
                            quantity: 4,
                        },
                        repulse: {
                            distance: 200,
                            duration: 0.4,
                        },
                        grab: {
                            distance: 200,
                            line_linked: {
                                opacity: 1
                            }
                        }
                    },
                },
                particles: {
                    color: {
                        value: "#02A2FF",
                    },
                    links: {
                        color: "#02A2FF",
                        distance: 150,
                        enable: true,
                        opacity: 0.5,
                        width: 2,
                    },
                    collisions: {
                        enable: true,
                    },
                    move: {
                        directions: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: false,
                        speed: 0.75,
                        straight: false,
                    },
                    line_linked: {
                        enable: true,
                        distance: 150,
                        color: "#0292F2",
                        opacity: 0.4,
                        width: 1
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 3000,
                        },
                        value: 300,
                    },
                    opacity: {
                        value: 0.5,
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: {
                            min: 0.5,
                            max: 2
                        },
                        random: true,
                    },
                },
                detectRetina: true,
            }}
        />
    );
};

export default DotParticals;
