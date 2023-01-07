import React, { useState } from "react";
import "./GoTop.css";
import { Link } from 'react-scroll'
import { AnimatePresence, motion } from "framer-motion";

const GoTop = () => {
    const [hasScrolled, setHasScrolled] = useState(false);
    // Check if the scroll has been done and change the state accordingly
    window.onscroll = function() {
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 20) {
            setHasScrolled(true);
        } else {
            setHasScrolled(false);
        }
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