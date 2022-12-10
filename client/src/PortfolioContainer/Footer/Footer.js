import './Footer.css';
import { useEffect } from 'react';
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function Footer () {
    // framer motion
    const boxVariants = {
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
                <div className='footer__row'>
                    <motion.div className='footer__col'
                        ref={ref}
                        animate={controls}
                        initial="hidden"
                        variants={boxVariants}
                        >
                        <h6>Contactame en otras redes sociales</h6>
                        <div className='footer__col__icons'>
                            <a className='footer__icon footer__icon--linkedin' href='https://www.linkedin.com/in/cristian-cuevas-tapia/' target="_blank" rel="noreferrer">
                                <i className="fab fa-linkedin"></i>
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
