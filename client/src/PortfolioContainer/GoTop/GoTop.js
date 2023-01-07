import React, { useState } from "react";
import "./GoTop.css";
import { Link } from 'react-scroll'
import { AnimatePresence, motion } from "framer-motion";

const GoTop = ({ closePopup }) => {
    const [hasScrolled, setHasScrolled] = useState(false);
    // 
    // Establece el umbral de desplazamiento en 50px para pantalla ancha
    // y 20px para pantalla estrecha
    let scrollThreshold = 50;

    // Utiliza media queries para ajustar el umbral de desplazamiento
    // dependiendo del ancho de la pantalla
    if (matchMedia) {
        const mq = window.matchMedia("(max-width: 600px)");
        mq.addEventListener("change", WidthChange);
        WidthChange(mq);
    }

    // Esta función se llama cada vez que el ancho de la pantalla cambia
    function WidthChange(mq) {
        if (mq.matches) {
            // Pantalla estrecha: establece el umbral en 20px
            scrollThreshold = 20;
        } else {
            // Pantalla ancha: establece el umbral en 50px
            scrollThreshold = 50;
        }
        if (matchMedia) {
            const mq320 = window.matchMedia("(max-width: 320px)");
            if (mq320.matches) {
                // Pantalla de 320px o menor: establece el umbral en 10px
                scrollThreshold = 70;
            } 
        }
    }

    // Check if the scroll has been done and change the state accordingly
    window.onscroll = function() {
        if (document.body.scrollTop > scrollThreshold || document.documentElement.scrollTop > scrollThreshold) {
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