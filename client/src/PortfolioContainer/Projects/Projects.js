import { useState, useEffect } from 'react';
import { ProjectsData } from './Data';
import { motion, useAnimation, AnimatePresence } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Tilt from 'react-parallax-tilt';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import PopUp from './PopUp';
import './Projects.css'
import GoTop from '../GoTop/GoTop';

export default function Projects() {
    //GoTop Disable
    const [hasScrolled, setHasScrolled] = useState(false);
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
        // time to wait before scroll is hidden
        var time = 800;
        setTimeout(function(){
            document.body.style.overflowY = 'hidden';
        }, time);
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
        <div className="projects" id='Proyectos'>
            <motion.div
                className="projects__header"
                animate={controlsTitle}
                initial="hidden"
                variants={boxVariants}
                ref={ref}
                >
                <div className="projects__title">
                    <h1>PROYECTOS</h1>
                </div>
            </motion.div>
            <motion.div className="projects__content"
                ref={ref}
                animate={controlsTitle}
                initial="hidden"
                variants={boxVariants}
                >
                {ProjectsData.map((project) => {
                    return (
                        <div className={'projects__card ' + project.card} key={project.name}>
                            <Tilt className='projects__card-tilt' options={{ max: 25 }} glareBorderRadius="20px">
                                <div className="projects__card-inner">
                                    <Carousel stopOnHover={true} infiniteLoop={true} autoPlay={true} interval={5000} showThumbs={false} showStatus={false}>
                                        {project.images.map((image) => {
                                            return (
                                                <div className='projects__card-image' key={project.name}>
                                                    <img className='projects__card-img' src={image} alt={image} />
                                                </div>
                                            );
                                        })}
                                    </Carousel>
                                    <div className={'projects__card-style'}>
                                        <div>
                                            <div className='projects__card-title'><h6>{project.name}</h6></div>
                                            {/* the string is cut to keep only 120 char description */}
                                            <p className='projects__card-description'>{project.description[0].substring(0, 120)}...
                                                <motion.span
                                                    whileHover={{ scale: 1.1 }}
                                                    whileTap={{ scale: 0.9 }}
                                                    className='projects__card-read-more' onClick={() => {
                                                        changecontent(project);
                                                        }}> Leer Más.
                                                </motion.span>
                                            </p>
                                            <div className='projects__card-stats'>
                                                <div className='projects__stat'>
                                                    <i className={project.icons[0]}></i>
                                                    <p className='projects__stat'>{project.technology[0]}</p>
                                                </div>
                                                <div className='projects__stat'>
                                                    <i className={project.icons[1]}></i>
                                                    <p className='projects__stat'>{project.technology[1]}</p>
                                                </div>
                                                <div className='projects__stat'>
                                                    {project.icons[2] === "" ? <i className=""></i> : <i className={project.icons[2]}></i>}
                                                    <p className='projects__stat'>{project.technology[2]}</p>
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
            {/* the PopUp is called and the data is passed to it in an array */}
            <AnimatePresence>
                {openproject && <PopUp closePopup={setOpenPopup} project={popupcontent} />}
                {/* We can use the following line when we want to deactivate the GoTop Button*/}
                {/* <GoTop handlePopupOpen={setHasScrolled}/> */}
            </AnimatePresence>
        </div>
    )
}
