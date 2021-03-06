import React, { useRef } from 'react';
import './contact.css';
import { MdEmail } from 'react-icons/md';
import emailjs from 'emailjs-com';


const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_f3726ff', 'template_xs2fn8a', form.current, 'G6RTT_pR4818GBuHE')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        
        e.target.reset();
    };

    return (
        <section id='contact'>
            <h5> Get In Touch</h5>
            <h2> Contact Me</h2>

            <div className="container contact__container">
                <div className="contact__options">
                    <article className="contact__option">
                        <MdEmail className='contact__option-icon' />
                        <h4>Email</h4>
                        <h5>pulkit1207@gmail.com</h5>
                        <a href="mailto:pulkit1207@gmail.com" target="_blank" rel="noreferrer">Send an email</a>
                    </article>
                </div>
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name="name" placeholder="Your Full Name" required />
                    <input type="email" name="email" placeholder='Your Email' required />
                    <textarea name="message" rows="7" placeholder='Your Message' required />
                    <button type='submit' className='btn btn-primary'>Send Message</button>
                </form>
            </div>
        </section>
    )
}

export default Contact