import React, { useEffect, useState } from "react"
import { useInView } from "react-intersection-observer"
import { motion, useAnimation } from "framer-motion"
import './PopUp.css'
import GoTop from '../GoTop/GoTop';

export default function PaginaNueva({project, closePopup}) {

  // ------------------------------
  async function query(data) {
    const response = await fetch(
      "https://api-inference.huggingface.co/models/sshleifer/distilbart-xsum-12-3",
      {
        headers: { Authorization: "Bearer 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" },
        method: "POST",
        body: JSON.stringify(data),
      }
    );
    const result = await response.json();
    return result;
  }
  query({"inputs": "En términos técnicos, Python es un lenguaje de programación de alto nivel, orientado a objetos, con una semántica dinámica y también integrada, principalmente para el desarrollo web y de aplicaciones informáticas. Es muy atractivo en el campo del Desarrollo Rápido de Aplicaciones (RAD) porque ofrece tipificación dinámica y opciones de encuadernación dinámicas. Python es relativamente simple, por lo que es fácil de aprender, ya que requiere una sintaxis única que se centra en la legibilidad. Los desarrolladores pueden leer y traducir el código Python mucho más fácilmente que otros lenguajes."}).then((response) => {
    console.log(JSON.stringify(response));
  });

  const enableScroll = () => {  
    window.onscroll = null;
    document.body.style.overflowY = 'scroll';
  }
  const [hasScrolled, setHasScrolled] = useState(false);

  // framer motion
  const boxSlide = {
    hidden: { x: 0, opacity: 0, transition: { delay: 1 } },
    visible: { x: 0, opacity: 1, transition: { delay: 1 } },
  };
  const boxTelonL = {
    visible: { x: '-0.5%', opacity: 1,
      transition: { duration: 0.8, repeat: 1, repeatDelay: 0.5, repeatType: "reverse"}},
    hidden: { x: '-100%', opacity: 1 }
  };
  const boxTelonR = {
    visible: { x: '0%', opacity: 1,
      transition: { duration: 0.8, repeat: 1, repeatDelay: 0.5, repeatType: "reverse"}},
    hidden: { x: '100%', opacity: 1 }
  };
  const controlsSlide = useAnimation();
  const controlsTelon = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
      if (inView) {
        controlsSlide.start("visible");
        controlsTelon.start("visible");
      } else {
        controlsSlide.start("hidden");
        controlsTelon.start("hidden");
      }
  }, [controlsSlide, controlsTelon, inView]);
  const unMount = () => {
    enableScroll();
    closePopup(false);
    // <GoTop handlePopupOpen={setHasScrolled} />
  };
  return (
    <><motion.div className="telonR"
      animate={controlsTelon}
      initial="hidden"
      variants={boxTelonR}
    > </motion.div>
    <motion.div className="telonL"
      animate={controlsTelon}
      initial="hidden"
      variants={boxTelonL}
    ></motion.div>
    <div className="popup">
        {closePopup && (
          <motion.div className="popup__container"
            ref={ref}
            key="popup__container"
            animate={controlsSlide}
            initial="hidden"
            variants={boxSlide}
            exit={{ opacity: 0, transition: { duration: 0.5 } }}>
            <div className="popup__header">
              <div className="popup__header__bar">
                <button className="popup__header__bar__close" onClick={() => unMount()}>
                  <i className="material-icons">close</i>
                </button>
              </div>
            </div>
            {project.map((project) => {
              return (
                <div className="popup__content" key={project.card}>
                  <div className="popup__content__header">
                    <div className="popup__content__header__img"
                      style={{backgroundImage: `url(${project.images[0]})`}}>
                    </div>
                  </div>
                  <div className="popup__content__info__header">
                    <h1 className="popup__content__info__header__title">{project.name.toUpperCase()}</h1>
                  </div>
                  <div className="popup__content__info">
                    <p className="popup__content__info__text">{project.description}</p>
                    <div className="popup__content__info__img--center">
                      <img className="popup__content__info__img" src={project.images[1]} alt={project.title} />
                    </div>
                  </div>
                  <div className="popup__content__info popup__content__info--left">
                    <div className="popup__content__info__img--center">
                      <img className="popup__content__info__img" src={project.images[2]} alt={project.title} />
                    </div>
                    <p className="popup__content__info__text">{project.description[1]}</p>
                  </div>
                  <div className="popup__content__info popup__content__info--last">
                    <p className="popup__content__info__text popup__content__info__text--last">{project.description[2]}</p>
                    <div className="popup__content__info__img--center">
                      <img className="popup__content__info__img popup__content__info__img--last" src={project.images[3]} alt={project.title} />
                      <img className="popup__content__info__img popup__content__info__img--last" src={project.images[4]} alt={project.title} />
                    </div>
                  </div>
                </div>
              );
            })}
          </motion.div>
        )}
    </div></>
  );
}