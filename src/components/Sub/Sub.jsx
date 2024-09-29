import React, { useState } from 'react';
import axios from 'axios';
import './Sub.css'; // Ensure this path is correct
import myImage from '../../assets/annova.jpg'; // Update the path and name accordingly

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
    console.log('Submitting form data:', formData); 
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
    <div className="submission-container">
      {notification.message && (
        <div className={`notification ${notification.type}`}>
          <p>{notification.message}</p>
          <button onClick={handleCloseNotification}>&times;</button>
        </div>
      )}
      <h1>Submissions</h1>
      <div className="intro">
        <p>
          If you are South Asian and willing to share your experience with an eating disorder and/or disordered eating, please use the following form. 
          Feel free to also reach out directly at <a href="tel:+13605457121">+1 360-545-7121</a> or by emailing <a href="mailto:info@shunoeatingdisorders.com">info@shunoeatingdisorders.com</a>.
        </p>
        <p>
          After a substantial number of responses have been collected, we plan on aggregating them into a map depicting the global impact of eating disorders 
          and how they don’t discriminate. If you would like to write about your experience more in-depth as a blog post, please contact us.
        </p>
      </div>

      <a href="#submission-form" className="cta-button">share my experience</a>

      <div className="why-share">
        <h2>Why should you share your experience?</h2>
        <p>
          Shuno aims to gather first-hand accounts from people who have had an eating disorder to give people a platform where they can be heard and shed light on the necessity of promoting discussion on eating disorders given the lack of mental healthcare in the South Asian community.
        </p>
        <p>
          Your experience is powerful. We want to eliminate harmful attitudes that perpetuate eating disorders by listening to the lived experiences of people who have struggled because every individual is different. It’s not a linear disorder with the formula of:
        </p>
        <p className="disorder-formula">
          diagnosis → treatment → cured
        </p>
        <p>
          The absence of culturally competent care is especially clear among South Asians, so any details you provide about your story will go towards ending stigma and building a network for others who want to express what they’ve gone through.
        </p>
      </div>

      <div className="experience">
        <h2>My Experience</h2>
        <p>
          Hi. My name is Anoova, and I began struggling with an eating disorder when I was about 12.
        </p>
        <p>
          Although I never paid attention to my eating habits and stayed active as a regular kid would throughout my early childhood, this type of disorder appears very insidiously, like being knee-deep in quicksand before you’ve even realized you stepped into it. At the time, I was on a swim team, so my initial desire to lose weight was triggered by the realization that I was on the heavier side in comparison to my teammates. I approached losing weight in a very unhealthy manner from the start, especially since it was done as secretly as possible and no one was aware of the real measures I was taking to attain a figure that was never meant for my body. Furthermore, there were these contradictory perceptions I found very difficult to balance, in that my family also recognized eating more as being healthy but at the same time praised those with slimmer physiques in comparison to mine.
        </p>
        <p>
          After the COVID-19 pandemic hit and all my sources of physical activity were cut, reducing food became an addiction because of how good it would make me feel; instead of having less energy, starvation is what fueled me. I was also praised for my healthy eating patterns by people in my community because choosing not to eat carb-filled snacks like singara and dal puri was described as impressive and being disciplined...
        </p>
      </div>

      <h2 id="submission-form">Submission</h2>

      <form onSubmit={handleSubmit}>
        <div className="form-grid">
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
        </div>

        <h2>My Experience</h2>
        <div className="experience-grid">
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
            placeholder="Were there any major obstacles in recovery?"
            value={formData.experience.obstacles}
            onChange={handleChange}
            required
          />
          <textarea
            name="experience.impact"
            placeholder="How did this experience impact your relationship with yourself, others, or how you saw the world?"
            value={formData.experience.impact}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="submit-button">Submit</button>
      </form>

      <img src={myImage} alt="anoova" className="image-style" />
    </div>
  );
};

export default Sub;
