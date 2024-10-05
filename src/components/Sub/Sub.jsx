import React, { useState } from 'react';
import axios from 'axios';
import './Sub.css'; // Ensure this path is correct

const Sub = () => {


  const [formData, setFormData] = useState({
    email: '',
    currentCountry: '',
    originalCountry: '',
    ageGroup: '',
    gender: '',
    background: '',
    additionalInfo: '',
    diagnosis: {
      wasDiagnosed: false,
      whoDiagnosed: ''
    },
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

    // If dealing with nested diagnosis object
    if (name === 'whoDiagnosed') {
      setFormData((prevFormData) => ({
        ...prevFormData,
        diagnosis: { ...prevFormData.diagnosis, whoDiagnosed: value }
      }));
    } else {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: type === 'checkbox' ? checked : value
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/submissions', formData);
      if (response.status === 201) {
        setNotification({ message: 'Form submitted successfully!', type: 'success' });
        // Reset form data
        setFormData({
          email: '',
          currentCountry: '',
          originalCountry: '',
          ageGroup: '',
          gender: '',
          background: '',
          additionalInfo: '',
          diagnosis: { wasDiagnosed: false, whoDiagnosed: '' },
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

      <div className="submission-container">
      {notification.message && (
        <div className={`notification ${notification.type}`}>
          <p>{notification.message}</p>
          <button onClick={handleCloseNotification}>&times;</button>
        </div>
      )}

      <h1>Submissions</h1>

      <form onSubmit={handleSubmit}>
        <div className="form-grid">
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
            placeholder="What country did you live in when your symptoms first arose?"
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

          <select name="gender" value={formData.gender} onChange={handleChange} required>
            <option value="">What is your gender?</option>
            <option value="Cisgender female">Cisgender female</option>
            <option value="Cisgender male">Cisgender male</option>
            <option value="Transgender female">Transgender female</option>
            <option value="Transgender male">Transgender male</option>
            <option value="Nonbinary">Nonbinary</option>
            <option value="Prefer not to answer">Prefer not to answer</option>
            <option value="Other">Other</option>
          </select>

          <select name="background" value={formData.background} onChange={handleChange} required>
            <option value="">What is your background?</option>
            <option value="Indian">Indian</option>
            <option value="Bangladeshi">Bangladeshi</option>
            <option value="Pakistani">Pakistani</option>
            <option value="Sri Lankan">Sri Lankan</option>
            <option value="Nepalese">Nepalese</option>
            <option value="Bhutanese">Bhutanese</option>
            <option value="Maldivian">Maldivian</option>
            <option value="Other">Other</option>
          </select>

          <textarea
            name="additionalInfo"
            placeholder="Is there anything else you would like to include about yourself (e.g. sexual orientation, socioeconomic status)?"
            value={formData.additionalInfo}
            onChange={handleChange}
          />

          <select
            name="whoDiagnosed"
            value={formData.diagnosis.whoDiagnosed}
            onChange={handleChange}
            required
          >
            <option value="">Who diagnosed you?</option>
            <option value="Primary care physician">Primary care physician</option>
            <option value="Pediatrician">Pediatrician</option>
            <option value="Mental health provider">Mental health provider</option>
            <option value="Psychiatrist">Psychiatrist</option>
            <option value="I wasn't diagnosed">I wasn't diagnosed</option>
            <option value="Other">Other</option>
          </select>

          <textarea
            name="symptoms"
            placeholder="Please describe the symptoms of your experience and when they began."
            value={formData.symptoms}
            onChange={handleChange}
            required
          />

          <textarea
            name="barriersToTreatment"
            placeholder="Were there any factors that prevented you from accessing treatment?"
            value={formData.barriersToTreatment}
            onChange={handleChange}
            required
          />

          <textarea
            name="helpfulTreatment"
            placeholder="If you were able to seek treatment, what helped you?"
            value={formData.helpfulTreatment}
            onChange={handleChange}
            required
          />

          <select
            name="accessibility"
            value={formData.accessibility}
            onChange={handleChange}
            required
          >
            <option value="">Rate accessibility to treatment on a scale of 1-10</option>
            {[...Array(10).keys()].map((num) => (
              <option key={num} value={num + 1}>{num + 1}</option>
            ))}
          </select>

          <textarea
            name="otherIdentities"
            placeholder="Please describe any other identities (e.g. athlete, sexual orientation, religion) and how they impacted your experience."
            value={formData.otherIdentities}
            onChange={handleChange}
            required
          />

          <textarea
            name="otherMentalIllnesses"
            placeholder="Are there other mental illnesses that impacted your experience?"
            value={formData.otherMentalIllnesses}
            onChange={handleChange}
            required
          />

          <textarea
            name="personalityTraits"
            placeholder="Were there any personality traits you identify with that impacted your experience?"
            value={formData.personalityTraits}
            onChange={handleChange}
            required
          />

          <textarea
            name="additionalComments"
            placeholder="Is there anything else you would like to add about your experience?"
            value={formData.additionalComments}
            onChange={handleChange}
          />

          <label>
            <input
              type="checkbox"
              name="consentForPublication"
              checked={formData.consentForPublication}
              onChange={handleChange}
              required
            />
            I consent to having my experience published and demographic information added to a database.
          </label>

          <select
            name="consentForFollowUp"
            value={formData.consentForFollowUp}
            onChange={handleChange}
            required
          >
            <option value="">Do you consent to being contacted for follow-up?</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>

    </div>
  );
};

export default Sub;