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
  const controls = useAnimation();
  const controlsFade = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
      if (inView) {
          controls.start("visible");
          controlsFade.start("visible");
      } else {
          controls.start("hidden");
          controlsFade.start("hidden");
      }
  }, [controls, controlsFade, inView]);

  return (
    <motion.div className="modalBackground"
      ref={ref}
      animate={controlsFade}
      initial="hidden"
      variants={boxFade}
      >
      <motion.div className="modalContainer"
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={boxIncrease}
      >
        <div className="titleCloseBtn">
          <button onClick={() => closePopup(false)}>X</button>
        </div>
        <div className="title">
        {statusMessage === "Enviado" ?(
          // Menssage Sent
          <h2>{statusMessage}
            <img style={{width: "40px", height: "10%"}} src={sendGif} alt="send"/>
          </h2>
          ) : (
            // Menssage Error
            <h2>{statusMessage}
              <img style={{width: "40px", height: "10%"}} src={errorGif} alt=""/>
            </h2> 
            )}
        </div>
      </motion.div>
    </motion.div>
  );
}