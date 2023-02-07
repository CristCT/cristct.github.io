import './Footer.css';
import { useEffect } from 'react';
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function Footer () {
    // framer motion
    const boxVariantsL = {
        // move from left to right
        visible: { x: 0, opacity: 1, transition: { duration: 0.8 } },
        hidden: { x: -400, opacity: 0, transition: { duration: 2 } }
    };
    const boxVariantsR = {
        // move from right to left
        visible: { x: 0, opacity: 1, transition: { duration: 0.8 } },
        hidden: { x: 100, opacity: 0 }
    };
    const controls = useAnimation();
    const [ref, inView] = useInView();
    useEffect(() => {
        if (inView) {
            controls.start("visible");
        } else {
            controls.start("hidden");
        }
    }, [controls, inView]);

    return (
        <div className='footer__container'>
            <div className='footer__background'>
                <div className='footer__content'>
                    <motion.div className='footer__content__item'
                        ref={ref}
                        animate={controls}
                        initial="hidden"
                        variants={boxVariantsL}
                        >
                        <div className='footer__content__item__description'>
                            <p>Gracias por visitar mi portfolio. 
                            Si gustas, no dudes en seguirme en otras redes 
                            sociales para descubrir más proyectos y contenido 
                            interesante. ¡Te espero!</p>
                        </div>
                    </motion.div>
                    <motion.div className='footer__content__item'
                        ref={ref}
                        animate={controls}
                        initial="hidden"
                        variants={boxVariantsR}
                        >
                        <div className='footer__col__icons'>
                            <a className='footer__icon footer__icon--github' href='https://github.com/CristCT' target="_blank" rel="noreferrer">
                                <i className="fab fa-github"></i>
                            </a>
                            <a className='footer__icon footer__icon--linkedin' href='https://www.linkedin.com/in/cristian-cuevas-tapia/' target="_blank" rel="noreferrer">
                                <i className="fab fa-linkedin"></i>
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}
