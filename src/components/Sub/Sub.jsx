import React, { useState } from 'react'; 
import axios from 'axios';
import './Sub.css'; // Ensure this path is correct

const Sub = () => {
  const [submitted, setSubmitted] = useState(false); // New state to track submission

  const [formData, setFormData] = useState({
    email: '',
    currentCountry: '',
    originalCountry: '',
    ageGroup: '',
    gender: '',
    background: '',
    additionalInfo: '',
    wasDiagnosed: '',
    symptoms: '',
    barriersToTreatment: '',
    helpfulTreatment: '',
    accessibility: '',
    otherIdentities: '',
    otherMentalIllnesses: '',
    personalityTraits: '',
    additionalComments: '',
    consentForPublication: false,
    consentForFollowUp: ''
  });

  const [notification, setNotification] = useState({ message: '', type: '' });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const dataToSend = {
      email: formData.email,
      currentCountry: formData.currentCountry,
      originalCountry: formData.originalCountry,
      ageGroup: formData.ageGroup,
      gender: formData.gender,
      background: formData.background,
      additionalInfo: formData.additionalInfo,
      wasDiagnosed: formData.wasDiagnosed,
      symptoms: formData.symptoms,
      barriersToTreatment: formData.barriersToTreatment,
      helpfulTreatment: formData.helpfulTreatment,
      accessibility: formData.accessibility,
      otherIdentities: formData.otherIdentities,
      otherMentalIllnesses: formData.otherMentalIllnesses,
      personalityTraits: formData.personalityTraits,
      additionalComments: formData.additionalComments,
      consentForPublication: formData.consentForPublication,
      consentForFollowUp: formData.consentForFollowUp,
    };

    try {
      const response = await axios.post('https://api.web3forms.com/submit', {
        ...dataToSend,
        access_key: '2d86032f-13dd-43fb-8fcc-99303dd54e44' // Replace with your access key
      });

      if (response.data.success) {
        setNotification({ message: 'Form submitted successfully!', type: 'success' });
        setSubmitted(true); // Set submitted to true after successful submission

        // Reset form data
        setFormData({
          email: '',
          currentCountry: '',
          originalCountry: '',
          ageGroup: '',
          gender: '',
          background: '',
          additionalInfo: '',
          wasDiagnosed: '',
          symptoms: '',
          barriersToTreatment: '',
          helpfulTreatment: '',
          accessibility: '',
          otherIdentities: '',
          otherMentalIllnesses: '',
          personalityTraits: '',
          additionalComments: '',
          consentForPublication: false,
          consentForFollowUp: ''
        });
      } else {
        throw new Error('Unexpected response code');
      }
    } catch (error) {
      setNotification({
        message: error.response && error.response.data && error.response.data.message
          ? error.response.data.message
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
      {/* Intro Section */}
      <div className="intro">
        <p>
          If you are South Asian and willing to share your experience with an eating disorder and/or disordered eating, please use the following form. 
          Feel free to also reach out directly at <a href="tel:+13605457121">+1 360-545-7121</a> or by emailing <a href="mailto:anoovasattar@gmail.com">anoovasattar@gmail.com</a>.
        </p>
        <p>
          After a substantial number of responses have been collected, we plan on aggregating them into a map depicting the global impact of eating disorders 
          and how they don’t discriminate. If you would like to write about your experience more in-depth as a blog post, please contact us.
        </p>
      </div>

      <a href="#submission-form" className="cta-button">share my experience</a>

      {/* Why Share Section */}
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

      {/* Experience Section */}
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
          {/* Form Fields */}
          <input
            type="email"
            name="email"
            placeholder="What is your email?"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="currentCountry"
            placeholder="What country do you live in?"
            value={formData.currentCountry}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="originalCountry"
            placeholder="What country did you live in when your symptoms first arose? (If it was different from where you are now)"
            value={formData.originalCountry}
            onChange={handleChange}
            required
          />

          <select name="ageGroup" value={formData.ageGroup} onChange={handleChange} required>
            <option value="">What is your age group?</option>
            <option value="Under 18">Under 18</option>
            <option value="18-25">18-25</option>
            <option value="26-35">26-35</option>
            <option value="36-45">36-45</option>
            <option value="46-55">46-55</option>
            <option value="56+">56+</option>
          </select>

          <input
            type="text"
            name="gender"
            placeholder="What is your gender?"
            value={formData.gender}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="background"
            placeholder="What is your background?"
            value={formData.background}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="additionalInfo"
            placeholder="Is there anything about yourself that you would like to include and wasn't included above? For example, sexual orientation, socioeconomic status, political affiliations, etc."
            value={formData.additionalInfo}
            onChange={handleChange}
            required
          />

          <select name="wasDiagnosed" value={formData.wasDiagnosed} onChange={handleChange} required>
            <option value="">Were you officially diagnosed with an eating disorder?</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>

          <textarea
            name="symptoms"
            placeholder="What symptoms of an eating disorder have you experienced?"
            value={formData.symptoms}
            onChange={handleChange}
            required
          />

          <textarea
            name="barriersToTreatment"
            placeholder="Did you face any barriers to getting treatment? If so, please describe."
            value={formData.barriersToTreatment}
            onChange={handleChange}
            required
          />

          <textarea
            name="helpfulTreatment"
            placeholder="What aspects of treatment were helpful for you?"
            value={formData.helpfulTreatment}
            onChange={handleChange}
            required
          />

          <textarea
            name="accessibility"
            placeholder="Was the treatment accessible for you (e.g., financially, culturally, geographically)? Please explain."
            value={formData.accessibility}
            onChange={handleChange}
            required
          />

          <textarea
            name="otherIdentities"
            placeholder="If you identify with other marginalized groups (e.g., LGBTQ+, disabled), how did these identities impact your experience with an eating disorder?"
            value={formData.otherIdentities}
            onChange={handleChange}
            required
          />

          <textarea
            name="otherMentalIllnesses"
            placeholder="Have you struggled with other mental illnesses alongside your eating disorder? Please describe."
            value={formData.otherMentalIllnesses}
            onChange={handleChange}
            required
          />

          <textarea
            name="personalityTraits"
            placeholder="Have certain personality traits impacted your experience with an eating disorder? Please describe."
            value={formData.personalityTraits}
            onChange={handleChange}
            required
          />

          <textarea
            name="additionalComments"
            placeholder="Is there anything else you would like to share regarding your experience?"
            value={formData.additionalComments}
            onChange={handleChange}
            required
          />

          <label>
            <input
              type="checkbox"
              name="consentForPublication"
              checked={formData.consentForPublication}
              onChange={handleChange}
              required
            />
            I consent to having my submission published on the Shuno website (names will be omitted unless explicitly requested otherwise).
          </label>

          <input
            type="text"
            name="consentForFollowUp"
            placeholder="Would you be okay with us contacting you for a follow-up interview? Please specify yes or no."
            value={formData.consentForFollowUp}
            onChange={handleChange}
            required
          />
        </div>

        {/* Show Submit button only if form has not been submitted */}
        {!submitted && <button type="submit" className="submit-button">Submit</button>}

        {/* Thank you message displayed after form submission */}
        {submitted && (
          <div className="thank-you-message">
            <h3>Thank you for submitting your story! We will reach out if we need any further information.</h3>
          </div>
        )}
      </form>
    </div>
  );
};

export default Sub;
