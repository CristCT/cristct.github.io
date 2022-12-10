import React, { useEffect } from "react"
import { useInView } from "react-intersection-observer"
import sendGif from "../../assets/ContactMe/sendMessage.gif";
import errorGif from "../../assets/ContactMe/errorMessage.gif";
import { motion, useAnimation } from "framer-motion"
import "./Modal.css";

export default function Modal({closePopup, statusMessage}) {
  // framer motion
  const boxIncrease = {
    // aumentar el tamaño
    visible: { scale: 1, opacity: 1, transition: { duration: 0.6 } },
    hidden: { scale: 0, opacity: 1 }
  };
  const boxFade = {
    // fade
    visible: { opacity: 1, transition: { duration: 0.6 } },
    hidden: { opacity: 0 }
  };
  const controlsIncrease = useAnimation();
  const controlsFade = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
      if (inView) {
          controlsIncrease.start("visible");
          controlsFade.start("visible");
      } else {
          controlsIncrease.start("hidden");
          controlsFade.start("hidden");
      }
  }, [controlsIncrease, controlsFade, inView]);

  return (
    <motion.div className="modal__background"
      ref={ref}
      animate={controlsFade}
      initial="hidden"
      variants={boxFade}
      >
      <motion.div className="modal__container"
        ref={ref}
        animate={controlsIncrease}
        initial="hidden"
        variants={boxIncrease}
        >
        <div className="modal__container__button__close">
          <button onClick={() => closePopup(false)}>X</button>
        </div>
        <div className="modal__container__title">
        {statusMessage === "Enviado" ?(
          // Message Sent
          <h4>Mensaje<br></br>Enviado<br></br>
            <img style={{width: "50px"}} src={sendGif} alt="send"/>
          </h4>
          ) : ( 
            // Message Error
            <h4>Error al<br></br>enviar<br></br>
              <img style={{width: "50px"}} src={errorGif} alt=""/>
            </h4> 
            )}
        </div>
      </motion.div>
    </motion.div>
  );
}