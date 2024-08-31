import React from 'react';
import { useForm } from 'react-hook-form';
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { AiFillYoutube } from "react-icons/ai";
import emailjs from 'emailjs-com';
import './Contact.css';

const Contact = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    const templateParams = {
      from_name: `${data.firstName} ${data.lastName}`,
      user_email: data.email,
      message: data.comment,
      to_email: 'anoovasattar@gmail.com'
    };

    emailjs.send('service_6dmgc4o', 'template_hlpabah', templateParams, 'kTaQ8s5HqwiKSJ34N')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        reset();
        alert('Message sent successfully!');
      })
      .catch((err) => {
        console.log('FAILED...', err);
        alert('Failed to send the message. Please try again later.');
      });
  };

  return (
    <div className='contact'>
      <div className='contact-text'>
        <h1>Get In Touch With Us</h1>
        <p>Share your thoughts or concerns with us. We're here to listen and assist you.</p>
        <div className='contact-info'>
          <h3>Phone</h3>
          <span>360-545-7121</span>

          <h3>Email</h3>
          <span>anoovasattar@gmail.com</span>
        </div>
        <h3>Social Media</h3>
        <div className="social-media">
          <a href="#" className="social-icon"><FaFacebook /></a>
          <a href="#" className="social-icon"><FaLinkedin /></a>
          <a href="#" className="social-icon"><FaInstagram /></a>
          <a href="#" className="social-icon"><AiFillYoutube /></a>
        </div>
      </div>
      <div className='contact-form'>
        <h3>Contact Form</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>First Name</label>
          <input {...register('firstName', { required: true })} />

          <label>Last Name</label>
          <input {...register('lastName', { required: true })} />

          <label>Email</label>
          <input type="email" {...register('email', { required: true })} />

          <label>Comment</label>
          <textarea {...register('comment', { required: true })}></textarea>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
