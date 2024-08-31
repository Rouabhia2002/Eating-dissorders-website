import React, { useState } from 'react';
import axios from 'axios';
import './Sub.css'; // Ensure this path is correct

const Sub = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    pronouns: '',
    email: '',
    phone: '',
    ancestry: '',
    country: '',
    city: '',
    ageGroup: '',
    gender: '',
    experience: {
      firstEngagement: '',
      realization: '',
      recoveryProcess: '',
      obstacles: '',
      impact: ''
    }
  });

  const [notification, setNotification] = useState({ message: '', type: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.startsWith('experience.')) {
      const experienceField = name.split('.')[1];
      setFormData((prevFormData) => ({
        ...prevFormData,
        experience: {
          ...prevFormData.experience,
          [experienceField]: value
        }
      }));
    } else {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Submitting form data:', formData); // Log form data being submitted
    try {
      const response = await axios.post('http://localhost:5000/api/submissions', formData);
      if (response.status === 201) {
        console.log('Form submitted successfully:', response.data);
        setNotification({ message: 'Form submitted successfully!', type: 'success' });
        setFormData({
          firstName: '',
          lastName: '',
          pronouns: '',
          email: '',
          phone: '',
          ancestry: '',
          country: '',
          city: '',
          ageGroup: '',
          gender: '',
          experience: {
            firstEngagement: '',
            realization: '',
            recoveryProcess: '',
            obstacles: '',
            impact: ''
          }
        });
      } else {
        throw new Error('Unexpected response code');
      }
    } catch (error) {
      console.error('Error submitting form:', error.response ? error.response.data : error.message);
      setNotification({
        message: error.response && error.response.data && error.response.data.error
          ? error.response.data.error
          : 'Error submitting form. Please try again later.',
        type: 'error'
      });
    }
  };
  

  const handleCloseNotification = () => {
    setNotification({ message: '', type: '' });
  };

  return (
    <div className="container">
      {notification.message && (
        <div className={`notification ${notification.type}`}>
          <p>{notification.message}</p>
          <button onClick={handleCloseNotification} style={{ background: 'transparent', border: 'none', color: '#fff', fontSize: '16px', cursor: 'pointer', marginLeft: '10px' }}>×</button>
        </div>
      )}
      <h1>Submissions</h1>
      <p>Disordered Eating in South Asians (DESA) is a project that aims to raise awareness about how the South Asian diaspora experiences eating disorders...</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="pronouns"
          placeholder="Pronouns"
          value={formData.pronouns}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="ancestry"
          placeholder="Ancestry/Race"
          value={formData.ancestry}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="country"
          placeholder="Country"
          value={formData.country}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="city"
          placeholder="City"
          value={formData.city}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="ageGroup"
          placeholder="Age Group"
          value={formData.ageGroup}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="gender"
          placeholder="Gender"
          value={formData.gender}
          onChange={handleChange}
          required
        />
        <h2>My Experience</h2>
        <textarea
          name="experience.firstEngagement"
          placeholder="When do you remember having first started engaging in an eating disorder or related behavior? What led up to it?"
          value={formData.experience.firstEngagement}
          onChange={handleChange}
          required
        />
        <textarea
          name="experience.realization"
          placeholder="When did you realize the ill consequences of this?"
          value={formData.experience.realization}
          onChange={handleChange}
          required
        />
        <textarea
          name="experience.recoveryProcess"
          placeholder="What was the recovery/healing process like?"
          value={formData.experience.recoveryProcess}
          onChange={handleChange}
          required
        />
        <textarea
          name="experience.obstacles"
          placeholder="Were there any factors, such as aspects of your culture or expectations, that were obstacles during the process?"
          value={formData.experience.obstacles}
          onChange={handleChange}
          required
        />
        <textarea
          name="experience.impact"
          placeholder="How much has it had an impact on your life and relationships with others, especially family members and the greater community you're part of?"
          value={formData.experience.impact}
          onChange={handleChange}
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Sub;
