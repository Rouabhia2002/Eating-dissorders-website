import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Resources.css'; // Ensure you have a CSS file for styling

// Sample data for clinicians
const clinicians = [
  {
    name: "Rainbow Obesity and Eating Disorder Centre",
    contact: "rainbowedc125@gmail.com, +92 321 4723172",
    location: "Lahore, Pakistan",
    website: "https://www.facebook.com/Rainbowedcentre/",
  },
  {
    name: "Fatema Jivanjee-Shakir",
    contact: "fjshakirtherapy@gmail.com",
    location: "New York, NY, USA",
    website: "https://fjshakir.com/",
  },
  {
    name: "Alia Azmat",
    contact: "therapywithdr.alia@gmail.com",
    location: "Decatur, GA, USA",
    website: "https://www.therapywithdralia.com/",
  },
  {
    name: "Katya Viswanadhan",
    contact: "dr.katyav@gmail.com, 212-263-5940",
    location: "New York, NY, USA",
    website: "https://nyulangone.org/doctors/1760028377/katya-viswanadhan",
  },
  {
    name: "Mehar Ahuja",
    contact: "mehar@gayatherapy.com",
    location: "New York, NY, USA",
    website: "https://www.meharahuja.com/",
    description: `Growing up in India and later assimilating into American culture, Mehar Ahuja has first-hand experience with the complex and often challenging process of navigating two vastly different worlds. This journey has deeply influenced her understanding and approach to therapy, particularly in recognizing how cultural and environmental factors can impact an individual's relationship with food and body image. She specializes in working with individuals who have eating disorders, focusing on understanding the behaviors and recognizing the cultural and environmental factors that contribute to their experiences.`,
    specialties: `Mehar’s therapeutic approach primarily utilizes Cognitive Behavioral Therapy (CBT), which helps clients identify and challenge negative thought patterns, develop healthier coping strategies, and build a more positive relationship with food and their bodies. By incorporating CBT techniques alongside somatic practices, she strives to help her patients better manage distress, regulate their emotions, and attune with their body to find a sense of calm.`,
    additionalInfo: `Please book a 10 minute free consultation with her here. Accepting new clients.`,
  },
  {
    name: "Natasha Wahi",
    contact: "info@mysahaaya-healingandwellness.com, +1 (509) 426-3173",
    location: "Seattle, WA, USA",
    website: "https://mysahaaya-healingandwellness.com/",
    description: `Natasha Wahi is a licensed mental health counselor (LMHC) and a licensed professional counselor and the founder of MySahaaya Healing and Wellness, PLLC. Natasha is a South Asian mental health therapist who believes in reshaping conversations and creating a space where you can feel heard, understood, and validated.`,
    specialties: `Natasha utilizes an integrative lens, incorporating a variety of approaches some of which are person-centered, attachment and trauma, multicultural, strength-based, somatic, social justice, anti-oppressive, and transparent and directive interventions.`,
    additionalInfo: `Visit her website and connect with her on social media at @therapytalkswithtash`,
  },
  {
    name: "Runjhun Pandit",
    contact: "runjhun@wellbeingden.com",
    location: "Seattle, WA, USA",
    website: "https://www.wellbeingden.com/",
    description: `Runjhun Pandit, LPCC, LMHC, LPC, is a Licensed Mental Health Clinician specializing in Perinatal and Postpartum Support, Eating Disorders, Anxiety, and Depression, career support. Her professional journey has been deeply shaped by her commitment to creating a safe, non-judgmental, and inclusive therapeutic environment.`,
    specialties: `She draws upon a range of evidence-based therapeutic modalities which include Cognitive Behavioral Therapy (CBT), Dialectical Behavior Therapy (DBT), and Acceptance and Commitment Therapy (ACT).`,
    additionalInfo: `She is the owner of Wellbeing Den LLC, which focuses on supporting individuals struggling with eating disorders and other mental health support.`,
  },
  {
    name: "Samina Qureshi",
    contact: "wholesomestartrd@gmail.com",
    location: "Houston, TX, USA",
    website: "https://www.wholesomestart.com/",
    description: `Samina Qureshi is a weight-inclusive GI Dietitian and founder of Wholesome Start, her virtual nutrition and communications practice. She specializes in helping people find balance with food and gain relief from gastrointestinal (GI) disorders without rigid diets, guilt, or shame.`,
    specialties: `Samina works with people who struggle with their relationship with food to gain relief from GI disorders such as GERD, Gastritis, Gastroparesis, Functional Dyspepsia, IBS, and more.`,
    additionalInfo: `Samina has been featured in various publications and finds joy in simple pleasures like sipping chai and connecting with nature.`,
  },
];

const Resources = () => {
  const navigate = useNavigate();

  const handleMoreDetails = (clinician) => {
    navigate('/details', { state: { clinician } });
  };

  return (
    <div className="resources">
      <h1 className="resources__title">Resources</h1>
      <section className="resources__section">
        <h2>Clinicians</h2>
        <div className="resources__list">
          {clinicians.map((clinician, index) => (
            <div className="resource-card" key={index}>
              <h3 className="resource-card__name">{clinician.name}</h3>
              <p className="resource-card__contact">{clinician.contact}</p>
              <p className="resource-card__location">{clinician.location}</p>
              {clinician.website && clinician.website !== "N/A" && (
                <a
                  href={clinician.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="resource-card__website"
                >
                  Visit Website
                </a>
              )}
              <button onClick={() => handleMoreDetails(clinician)}>
                More Details
              </button>
            </div>
          ))}
        </div>
      </section>
      {/* Add more sections for other types of resources if needed */}
    </div>
  );
};

export default Resources;
