import React, { useState, useRef } from 'react';

import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import { client } from '../../client';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Footer.scss';

const Footer = () => {


  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const name = form.current.user_name.value.trim();
    const email = form.current.user_email.value.trim();
    const message = form.current.message.value.trim();

    if (!name || !email || !message) {
      // Display an alert or toast message indicating that fields are required
      toast.error('Please fill out all required fields');
      return;
    }


    emailjs.sendForm(
      "service_x3jjisy",
      "template_vc0974f",
      form.current,
      "lwD4oLkW3klbCHqw8"
    )
      .then((result) => {
        toast.success('Message sent successfully');
      }, (error) => {
        toast.error('Message not sent');
      });
  };



  return (
    <>
      <h2 className="head-text">Take a coffee & chat with me</h2>

      <div className="app__footer-cards">
        <div className="app__footer-card ">
          <img src={images.email} alt="email" />
          <a href="mailto:gauravvermaa07076@gmail.com" className="p-text">gauravvermaa07076@gmail.com</a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="phone" />
          <a href="tel:+917979759471" className="p-text">+917979759471</a>
        </div>
      </div>


      <div className="app__footer-form app__flex">

        <form ref={form} onSubmit={sendEmail}>

          <div className="app__flex">
            <input className="p-text" type="text" placeholder="Your Name" name="user_name" />
          </div>
          <div className="app__flex">
            <input className="p-text" type="email" placeholder="Your Email" name="user_email" />
          </div>
          <div>
            <textarea
              className="p-text"
              placeholder="Your Message"
              name="message"

            />

          </div>
          <input className='button' type="submit" value="Send" ></input>
        </form>
      </div>

      <ToastContainer />

    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__whitebg',
);