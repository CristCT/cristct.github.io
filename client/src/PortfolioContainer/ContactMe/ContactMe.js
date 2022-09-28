import React, { useState, useEffect } from "react"
import emailjs from '@emailjs/browser'
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import floatingAstronaut from '../../assets/ContactMe/Floating-Astronaut.webp'
import './ContactMe.css'

// popup sending email

export default function ContactMe () {
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
            }, (error) => {
                setStatus('Error');
                setButtonText('Enviar');
            });
    }

    // framer motion
    const boxVariants = {
        // move from left to right
        visible: { x: 0, opacity: 1, transition: { duration: 1 } },
        hidden: { x: -500, opacity: 1 }
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
        <div className='contact-me-container' id='Contactame'>
            <motion.div className='box'
                ref={ref}
                animate={controls2}
                initial="hidden"
                variants={boxVariants}
                >
                <div className="square" style={{'--i':0}}></div>
                <div className="square" style={{'--i':1}}></div>
                <div className="square" style={{'--i':2}}></div>
                <div className="square" style={{'--i':3}}></div>
                {/* <div className="square" style={{'--i':4}}></div> */}
                <div className='contact-me-row'>
                    <div className='contact-me-column'>
                        <img className='contact-me-image'
                            src={floatingAstronaut}
                            alt='Contactame por Correo'
                            lazy='loading' />
                    </div>
                    <div className='contact-me-column'>
                        <form className="contactme-form" onSubmit={sendEmail}>
                            <div className="contactme-text"><h1 className="contactme-title">Contactame</h1></div>
                            <div className="contactme-input-container">
                                <label className="label-Contactme-Form">Nombre</label>
                                <input className="input-Contactme-Form" type="text" name="name" value={formDetails.name} onChange={onFormUpdate} required />
                                <label className="label-Contactme-Form">Email</label>
                                <input className="input-Contactme-Form" type="email" name="email" value={formDetails.email} onChange={onFormUpdate} required />
                                <label className="label-Contactme-Form">Mensaje</label>
                                <textarea className="input-Contactme-Form textarea" name="message" value={formDetails.message} onChange={onFormUpdate} required />
                                <button className="glow-on-hover" type="submit">{buttonText}</button>
                                {status.message && <p className={status.success === true ? "danger" : "success"}>{status.message}</p>}
                            </div>
                        </form>
                    </div>    
                </div>
            </motion.div>
        </div>
    );
}