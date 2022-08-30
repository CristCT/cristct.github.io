import { useEffect } from 'react';
import Typewriter from 'typewriter-effect';
import './Profile.css'
import { Link } from 'react-scroll'
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function Profile() {

  const boxVariants = {
    // move from left to right
    visible: { x: 0, opacity: 1, transition: { duration: 0.8 } },
    hidden: { x: -400, opacity: 0, transition: { duration: 2 } }
  };
  const boxVariants2 = {
    // move from right to left
    visible: { x: 0, opacity: 1, transition: { duration: 0.8 } },
    hidden: { x: 200, opacity: 0, transition: { duration: 2 } }
  };
  const controls = useAnimation();
  const controls2 = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
      if (inView) {
          controls.start("visible");
          controls2.start("visible");
      } else {
          controls.start("hidden");
          controls2.start("hidden");
      }
  }, [controls, controls2, inView]);

  return (
    <div className='profile-container'>
      <div className='profile-parent'>
          <div className='stars'>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        <motion.div className='profile-details'
          ref={ref}
          animate={controls}
          initial="hidden"
          variants={boxVariants}
          >
          <div className='colz'>
            <div className='colz-icon'>
              <a href='#'>
                  <i className='fa fa-facebook-square'/>
              </a>
              <a href='#'>
                  <i className='fa fa-google-plus-square'/>
              </a>
              <a href='#'>
                  <i className='fa fa-instagram'/>
              </a>
              <a href='#'>
                  <i className='fa fa-youtube-square'/>
              </a>
              <a href='#'>
                  <i className='fa fa-twitter'/>
              </a>
            </div>
          </div>

          <div className='profile-details-name'>
            <span className='primary-text'>
              {" "}
              Hola, Soy <span className='highlighted-text'>Cristian</span>
            </span>
          </div>
          <div className='profile-details-role'>
            <span className='primary-text'>
              <h1 className='h1-min'>
                <Typewriter
                  options={{
                    strings: ["Web Developer", "Java Developer", "Python Master"],
                    autoStart: true,
                    loop: true,
                    delay: 50,
                  }}
                />
              </h1>
              <span className='profile-role-tagline'>
                con habilidad para crear aplicaciones con operaciones de
                front-end y back-end.
              </span>
            </span>
          </div>
          <div className='profile-options'>
            <button className='btn primary-btn'>
              <Link
                to='Contactame'
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-20}
                duration={500}
                href='#Contactame'
                className='btn primary-btn'
                >Contactame
              </Link> 
            </button>
            <a href='cristiancv.pdf' download='CristianCuevascv.pdf'>
              <button className='btn highlighted-btn'>Obtener Curriculum</button>
            </a>
          </div>
        </motion.div>
        <motion.div className='profile-picture'
          ref={ref}
          animate={controls2}
          initial="hidden"
          variants={boxVariants2}
          >
          <div className='profile-picture-background'></div>
        </motion.div>
        <div className="blur init"></div>
        <div className="blur uno"></div>
        <div className="blur dos"></div>
        <div className="blur tres"></div>
      </div>
    </div>
  )
}
