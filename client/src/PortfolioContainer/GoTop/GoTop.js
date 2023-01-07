import React, { useState } from "react";
import "./GoTop.css";
import { Link } from 'react-scroll'
import { AnimatePresence, motion } from "framer-motion";

const GoTop = ({ closePopup }) => {
    const [hasScrolled, setHasScrolled] = useState(false);
    // Sets the scroll threshold for wide and narrow screen
    let scrollThresholdNarrow = 20;
    let scrollThreshold = 50;
    // Use media queries to adjust the scroll threshold
    if (matchMedia) {
        const mq = window.matchMedia("(max-width: 600px)");
        mq.addEventListener("change", WidthChange);
        WidthChange(mq);
    }
    // This function is called every time the screen width changes
    function WidthChange(mq) {
        if (mq.matches) {
            // Narrow screen: set the threshold to scrollThreshold
            scrollThresholdNarrow = 20;
        } else {
            // Widescreen: set the threshold to scrollThreshold
            scrollThreshold = 50;
        }
        if (matchMedia) {
            // 320px or smaller screen: set the threshold to scrollThreshold
            const mq320 = window.matchMedia("(max-width: 320px)");
            if (mq320.matches) {
                scrollThreshold = 70;
            } 
        }
    }
    // Check if the scroll has been done and change the state accordingly
    window.onscroll = function() {
        if (document.body.scrollTop > scrollThreshold || document.documentElement.scrollTop > scrollThresholdNarrow) {
            setHasScrolled(true);
        } else {
            setHasScrolled(false);
        }
    };

    // Receive from project to hide or show the button GoTop
    const handlePopupOpen = () => {
        setHasScrolled(false);
    };

    return (
        <div className="goTop__container">
            {hasScrolled && (
                <AnimatePresence>
                    <motion.div
                        initial={{ opacity: 0, y: 0 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 50 }}
                        transition={{ duration: 0.3 }}
                        className="goTop">
                            <div className="goTop">
                                <Link to="Inicio" smooth={true} duration={500} className="goTop__link">
                                    <i className="bx bx-up-arrow-alt goTop__icon"></i>
                                </Link>
                            </div>
                    </motion.div>
                </AnimatePresence>
            )}
        </div>
    );
}

export default GoTop;