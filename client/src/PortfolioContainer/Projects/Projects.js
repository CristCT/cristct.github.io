import { useState, useEffect } from 'react';
import { ProjectsData } from './Data';
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Tilt from 'react-parallax-tilt';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './Projects.css'

export default function Projects() {
    const [popupcontent, setPopupcontent] = useState([]);
    const [popuptogle, setPopuptoggle] = useState(false);
    const [styling, setStyling] = useState(null);
    const changecontent = (project) => {
        setPopupcontent([project]);
        setPopuptoggle(!popuptogle);
        if (styling === null) {
            setStyling({
                // position: 'fixed',
                // document.body.style.overflow = 'hidden',
                // document.body.style.overflowY = 'hidden',
            });
        } else{setStyling(null)}
    };
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
            <motion.div className="content-container" style={styling}
                ref={ref}
                animate={controlsTitle}
                initial="hidden"
                variants={boxVariants}
                >
                {ProjectsData.map((project) => {
                    return (
                        <div className={'content-card '+project.card} key={project.name}>
                            <Tilt className='tilt-card' options={{ max: 25 }} glareBorderRadius="20px">
                                <div className="project-card">
                                    <Carousel stopOnHover={true} infiniteLoop={true} autoPlay={true} interval={5000} showThumbs= {false} showStatus= {false}>
                                        {project.images.map((image) => {
                                            return (
                                                <div className='content-card-image' key={project.name}>
                                                    <img className='card-img' src={image} alt={image} />
                                                </div>
                                            )})}
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
                                                        changecontent(project);}}> Leer Más.
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
            {popuptogle && (
            <div className='pop_up_container' onClick={changecontent}>
                <div className='pop_up_body' onClick={(e) => e.stopPropagation()}>
                    <div className='pop_up_content'>
                        {popupcontent.map((proj) => {
                            return (
                                <div className='pop_up_card'>
                                    <div className='pop_up_header'>
                                        <h1 className='pop_up_title'>{proj.name}</h1>
                                        <button className='pop_up_button' onClick={() =>{setPopuptoggle(false);}}>x</button>
                                    </div>
                                    <Carousel showThumbs={false} showStatus={false}>
                                    {/* image [0] with description [0], after image[1] with description[1]... */}
                                        {proj.images.map((image, index) => {
                                            return (
                                                <div className='pop_up_card_image'>
                                                    <img className='img-popup' src={image} alt={image} />
                                                    <p className='pop_up_description'>{proj.description[index]}</p>
                                                </div>
                                            )})}
                                    </Carousel>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
            )}
        </div>
    )
}
