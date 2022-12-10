import React, { useState, useEffect } from "react"
import emailjs from '@emailjs/browser'
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import floatingAstronaut from '../../assets/ContactMe/Floating-Astronaut.webp'
import Modal from "./Modal"
import './ContactMe.css'

export default function ContactMe () {
    const [openPopup, setOpenPopup] = useState(false);
    const formInitialDetails = {
        name: '',
        email: '',
        message: ''
    }
    const [formDetails, setFormDetails] = useState(formInitialDetails);
    const [buttonText, setButtonText] = useState('Enviar');
    const [status, setStatus] = useState('');

    const onFormUpdate = (e) => {
        setFormDetails({
            ...formDetails,
            [e.target.name]: e.target.value
        })
    }
    const sendEmail = (e) => {
        e.preventDefault();
        setButtonText('Enviando...');
        setStatus('');

        emailjs.sendForm('service_tur9yz5', 'template_r5r8vue', e.target, 'oYjZZ5Vzt2fpp3WSj')
            .then((result) => {
                setStatus('Enviado');
                setButtonText('Enviar');
                setFormDetails(formInitialDetails);
                setOpenPopup(true)
            }, (error) => {
                setStatus('Error');
                setButtonText('Enviar');
                setOpenPopup(true)
            });
    }

    // framer motion
    const boxVariants = {
        // move from left to right
        hidden: { x: "-50%", opacity: 1 },
        visible: { x: 0, opacity: 1, transition: { duration: 1 } }
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
        <div className='contact-me__container' id='Contactame'>
            <motion.div className='contact-me__box'
                ref={ref}
                variants={boxVariants}
                initial="hidden"
                animate={controls}
                >
                <div className="contact-me__square" style={{'--i':0}}></div>
                <div className="contact-me__square" style={{'--i':1}}></div>
                <div className="contact-me__square" style={{'--i':2}}></div>
                <div className="contact-me__square" style={{'--i':3}}></div>
                <div className="contact-me__grid">
                    <div className="contact-me__image">
                        <img className="contact-me__image__move" src={floatingAstronaut} alt="floating astronaut" />
                    </div>
                    <div className="contact-me__form">
                        <div className="contact-me__text">
                            <h1 className="contact-me__title">Contáctame</h1>
                        </div>
                        <form onSubmit={sendEmail}>
                            <label className="contact-me__label">Nombre</label>
                            <input className="contact-me__input" type="text" name="name" value={formDetails.name} onChange={onFormUpdate} required />
                            <label className="contact-me__label">Email</label>
                            <input className="contact-me__input" type="email" name="email" value={formDetails.email} onChange={onFormUpdate} required />
                            <label className="contact-me__label">Mensaje</label>
                            <textarea className="contact-me__input contact-me__textarea" name="message" value={formDetails.message} onChange={onFormUpdate} required />
                            <button
                                className="glow-on-hover"
                                type="submit"
                                disabled={buttonText === 'Enviando...' ? true : false}
                                onClick={() => {setStatus('');}} // clean status message
                                >{buttonText}
                            </button>
                            {openPopup && <Modal closePopup={setOpenPopup} statusMessage={status} />}
                        </form>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}