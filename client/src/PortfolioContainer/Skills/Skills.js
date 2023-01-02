import React from "react";
import { useEffect } from 'react';
import "./Skills.css";
import Frontend from "./Frontend";
import Backend from "./Backend";
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"

const Skills = () => {
    // Framer Motion
    const boxVariants = {
        // move from left to right
        visible: { x: 0, opacity: 1, transition: { duration: 0.8 } },
        hidden: { x: -200, opacity: 0, transition: { duration: 1} }
    };
    const controlsTitle = useAnimation();
    const [ref, inView] = useInView();
    useEffect(() => {
        if (inView) {
            controlsTitle.start("visible");
        } else {
            controlsTitle.start("hidden");
        }
    }, [controlsTitle, inView]);
    return (
        <motion.section className="skills"
                animate={controlsTitle}
                initial="hidden"
                variants={boxVariants}
                ref={ref}
                >
            <div className="skills__title">
                <h1>SKILLS</h1>
            </div>
            <div className="skills__container container grid">
                <Frontend />
                <Backend />
            </div>
        </motion.section>
    );
};

export default Skills;
