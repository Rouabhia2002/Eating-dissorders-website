import React, { useRef, useState } from 'react';
import { FaInstagram } from "react-icons/fa";
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
  const form = useRef();
  const [messageVisible, setMessageVisible] = useState(false); // State to handle pop-up visibility

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_o6mzfoc', 'template_yodjen1', form.current, {
        publicKey: 'BSyJGk5Ux-d91sL_5',
      })
      .then(
        () => {
          // Show the pop-up message
          setMessageVisible(true);
          // Hide the pop-up after 3 seconds
          setTimeout(() => setMessageVisible(false), 3000);
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };

  return (
    <div className='contact'>
      <div className={`notification-popup ${messageVisible ? 'show' : ''}`}>
        Message sent successfully!
      </div>

      <div className='contact-text'>
        <h1>Get In Touch With Us</h1>
        <p>Share your thoughts or concerns with us. We're here to listen and assist you.</p>
        <div className='contact-info'>
          <h3>Contact Information</h3>
          <h3>Phone</h3>
          <span>+1 360-545-7121</span>

          <h3>Email</h3>
          <span>anoovasattar@gmail.com</span>
        </div>
        <div className='flex'>
          <h3>Follow Us on Social Media</h3>
        <div className="social-media">
          <a href="https://www.instagram.com/shunoeatingdisorders" className="social-icon"><FaInstagram /></a>
        </div>
     
        </div>
      </div>
      <hr className='divider' />

      <div className='contact-form'>
        <h3>Contact Form</h3>
        <form ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input type="text" name="user_name" required />
          <label>Email</label>
          <input type="email" name="user_email" required />
          <label>Message</label>
          <textarea name="message" required />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
