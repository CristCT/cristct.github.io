import { useState, useEffect } from 'react';
import { ProjectsData } from './Data';
import { motion, useAnimation, AnimatePresence } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Tilt from 'react-parallax-tilt';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import PopUp from './PopUp';
import './Projects.css'

export default function Projects() {
    // PopUp
    const [openproject, setOpenPopup] = useState(false);
    const [popupcontent, setPopupcontent] = useState([]);
    const [popuptogle, setPopuptoggle] = useState(false);
    const changecontent = (project) => {
        setPopupcontent([project]);
        setPopuptoggle(!popuptogle);
        disableScroll();
        setOpenPopup(true);
    };
    // ScrollBar
    const disableScroll = () => {  
        var x = window.scrollX;
        var y = window.scrollY;
        window.onscroll = function(){ window.scrollTo(x, y) };
    }
    // Framer Motion
    const boxVariants = {
        // move from right to left
        visible: { x: 0, opacity: 1, transition: { duration: 0.8 } },
        hidden: { x: 200, opacity: 0, transition: { duration: 1} }
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
        <div className="projects-container" id='Proyectos'>
            <motion.div
                className="projects-header"
                animate={controlsTitle}
                initial="hidden"
                variants={boxVariants}
                ref={ref}
                >
                <h1 className='projects-title'>PROYECTOS</h1>
            </motion.div>
            <motion.div className="content-container"
                ref={ref}
                animate={controlsTitle}
                initial="hidden"
                variants={boxVariants}
                >
                {ProjectsData.map((project) => {
                    return (
                        <div className={'content-card ' + project.card} key={project.name}>
                            <Tilt className='tilt-card' options={{ max: 25 }} glareBorderRadius="20px">
                                <div className="project-card">
                                    <Carousel stopOnHover={true} infiniteLoop={true} autoPlay={true} interval={5000} showThumbs={false} showStatus={false}>
                                        {project.images.map((image) => {
                                            return (
                                                <div className='content-card-image' key={project.name}>
                                                    <img className='card-img' src={image} alt={image} />
                                                </div>
                                            );
                                        })}
                                    </Carousel>
                                    <div className={'card-style'}>
                                        <div>
                                            <div className='card-title'><h6>{project.name}</h6></div>
                                            {/* only 120 char description*/}
                                            <p className='card-description'>{project.description[0].substring(0, 120)}...
                                                <motion.span
                                                    whileHover={{ scale: 1.1 }}
                                                    whileTap={{ scale: 0.9 }}
                                                    className='read-more' onClick={() => {
                                                        changecontent(project);
                                                    } }> Leer Más.
                                                </motion.span>
                                            </p>
                                            <div className='card-stats'>
                                                <div className='stat'>
                                                    <i className={project.icons[0]}></i>
                                                    <p className='pStat'>{project.technology[0]}</p>
                                                </div>
                                                <div className='stat'>
                                                    <i className={project.icons[1]}></i>
                                                    <p className='pStat'>{project.technology[1]}</p>
                                                </div>
                                                <div className='stat'>
                                                    {project.icons[2] === "" ? <i className=""></i> : <i className={project.icons[2]}></i>}
                                                    <p className='pStat'>{project.technology[2]}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Tilt>
                        </div>
                    );
                })}
            </motion.div>
            {/* PopUp */}
            <AnimatePresence>
                {openproject && <PopUp closePopup={setOpenPopup} project={popupcontent} />}
            </AnimatePresence>
        </div>
    )
}
