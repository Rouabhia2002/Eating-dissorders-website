import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Resources.css'; // Ensure you have a CSS file for styling
import pic1 from '../../assets/AliaAzmat.webp'; // Example: Adjust the image paths
import pic2 from '../../assets/FatemaJivanjeeShakir.jpg';
import pic3 from '../../assets/SaminaQureshi.png';
import pic4 from '../../assets/MeharAhuja.jpg';
import pic5 from '../../assets/NatashaWahi.jpg';
import pic6 from '../../assets/RunjhunPandit.jpg';



const clinicians = [
  {
    name: "Natasha Wahi",
    contact: "info@mysahaaya-healingandwellness.com, +1 (509) 426-3173",
    location: "Seattle, WA, USA",
    website: "N/A",
    image: pic5, // Add the image for Natasha Wahi
    description: `

    Natasha Wahi is a licensed mental health counselor (LMHC) and a licensed professional counselor and the founder of MySahaaya Healing and Wellness, PLLC.
Natasha is a South Asian mental health therapist who believes in reshaping
conversations and creating a space where you can feel heard, understood, and
validated.

Natasha believes therapy to be a unique process with its roots directly intertwined by
the multiple identities we internally and externally appear in and experience life through.
The space she creates with you is a non-judgmental one where you can feel safe and
empowered to share your life experiences. Together, she will work with you to move
past the fears of the stigmatization of mental health and help normalize the process of
feeling heard, understood, and validated for all your life’s experiences. Her philosophy is
deeply rooted to help facilitate and encourage a process for you to be the expert in
finding your way while utilizing genuine concern, empathy, and compassion, in hopes of
fulfilling your journey to self-empowerment and self-discovery.

Natasha utilizes an integrative lens, incorporating a variety of approaches some of
which are person-centered, attachment and trauma, multicultural, strength-based,
somatic, social justice, anti-oppressive, and transparent and directive interventions. I
believe in breaking negative cyclical patterns, addressing intergenerational and
generational trauma, and will work with you to understand you for you. She encourages
the process of deconstructing harmful internalized messages, processing experiences
of attachment and trauma, exploring identity, and managing relational and personal
challenges. She welcomes all identities and will bring attention to identities most
marginalized. Above everything, she values the built connection and safety in the
therapeutic relationship between client and therapist.

Visit her at https://mysahaaya-healingandwellness.com/ and connect with her on social
media at @therapytalkswithtash.

    
    `
  },
  {
    name: "Fatema Jivanjee-Shakir",
    contact: "fjshakirtherapy@gmail.com",
    location: "New York, NY, USA",
    website: "https://fjshakir.com/",
    image: pic2,
    description: "" // Add Fatema's description if available
  },
  {
    name: "Alia Azmat",
    contact: "therapywithdr.alia@gmail.com",
    location: "Decatur, GA, USA",
    website: "https://www.therapywithdralia.com/",
    image: pic1,
    description: "" // Add Alia's description if available
  },
  {
    name: "Runjhun Pandit",
    contact: "runjhun@wellbeingden.com",
    location: "Seattle, WA, USA",
    website: "https://www.wellbeingden.com/",
    image: pic6,
    description: `
Runjhun Pandit, LPCC, LMHC, LPC, is a Licensed Mental Health Clinician specializing in Perinatal and Postpartum Support, Eating Disorders, Anxiety, and Depression, career support. Her professional journey has been deeply shaped by her commitment to creating a safe, non-judgmental, and inclusive therapeutic environment where individuals can explore their innermost thoughts and feelings. She draws upon a range of evidence-based therapeutic modalities which include Cognitive Behavioral Therapy (CBT), Dialectical Behavior Therapy (DBT), and Acceptance and Commitment Therapy (ACT). 

As a member of the South Asian community herself, she possess a deep understanding of the cultural nuances and unique stressors faced by individuals of South Asian descent. She creates a culturally affirming and empathetic space where clients can explore their identities, navigate intergenerational dynamics, and address mental health concerns within the context of their cultural background. 

She is the owner of Wellbeing Den LLC, which focuses on supporting individuals struggling with eating disorders and other mental health support. 

See her website at www.wellbeingden.com or email her at contact@wellbeingden.com.
    `
  },
  {
    name: "Mehar Ahuja",
    contact: "mehar@gayatherapy.com",
    location: "New York, NY, USA",
    website: "https://www.gayatherapy.com/mehar",
    image: pic4,
    description: `
    Growing up in India and later assimilating into American culture, Mehar Ahuja has first-hand experience with the complex and often challenging process of navigating two vastly different worlds. This journey has deeply influenced her understanding and approach to therapy, particularly in recognizing how cultural and environmental factors can impact an individual's relationship with food and body image. 

She specializes in working with individuals who have eating disorders, focusing on understanding the behaviors and recognizing the cultural and environmental factors that contribute to their experiences. Mehar’s therapeutic approach primarily utilizes Cognitive Behavioral Therapy (CBT), which helps clients identify and challenge negative thought patterns, develop healthier coping strategies, and build a more positive relationship with food and their bodies. By incorporating CBT techniques alongside somatic practices, she strive to help her patients better manage distress, regulate their emotions, and attune with their body to find a sense of calm. Mehar will unconditionally accept you for who you are and is dedicated to helping you find your path toward a more balanced and fulfilling life.

Please book a 10 minute free consultation with her here. Her website can be accessed at https://www.meharahuja.com/.
Accepting new clients.

    `
  },
  {
    name: "Samina Qureshi",
    contact: "wholesomestartrd@gmail.com",
    location: "Houston, TX, USA",
    website: "https://www.wholesomestart.com/dietitian-samina",
    image: pic3,
    description: `
Samina Qureshi is a weight-inclusive GI Dietitian and founder of Wholesome Start, her virtual nutrition and communications practice. She specializes in helping people find balance with food and gain relief from gastrointestinal (GI) disorders without rigid diets, guilt, or shame. Samina encourages her community to embrace their cultural foods and traditions, recognizing the importance of food as a source of nourishment, connection, and joy. While working with her clients, she noticed an undeniable overlap between eating disorders and GI conditions. She has presented at dietetic conferences to raise awareness about the intersection of eating disorders and GI conditions within diverse communities. Samina has been featured on Great Day Houston, is on the Review Board for VeryWell Fit, and regularly contributes to publications such as Self, Wall Street Journal, Houston Chronicle, Food & Nutrition Magazine, Well + Good, and EveryDay Health. Outside her professional pursuits, Samina finds joy in simple pleasures like sipping chai, connecting with nature, and spending time with her family. Visit her at www.wholesomestart.com and connect with her on social media at @inclusive.IBS.dietitian.
Samina works with people who struggle with their relationship with food to gain relief from the following GI disorders:
GERD
Gastritis
Gastroparesis
Functional Dyspepsia
IBS (Irritable Bowel Syndrome)
Bloating, Constipation, & Diarrhea 

      `
  }
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
             <button className="more-details-button" onClick={() => handleMoreDetails(clinician)}>
  More Details
</button>

            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default Resources;
