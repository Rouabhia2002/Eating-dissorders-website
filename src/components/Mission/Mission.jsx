import React from 'react';
import './Mission.css'; // Importing the CSS file
import pic11 from '../../assets/pic11.jpg'; 
import pic22 from '../../assets/pic22.jpg'; 
import phase from '../../assets/phase.png'; 
import treatement from '../../assets/treatement.png'; 
import choice from '../../assets/choice.png'; 

const Mission = () => {
  return (
    <div className="mission-container">
    <section className="mission-section">
  <div className="text-image-container">
    <div className="mission-text">
      <h1 className="mission-title">Mission</h1>
      <p>
        Shuno raises awareness of eating disorders in the South Asian diaspora through submissions from anyone with South Asian ancestry willing to share their experience with this type of illness. They are then published here to encourage others to seek treatment and provide insight into the sociocultural pressures that prevent South Asians from accessing care.
        <br />
        <br />
        Since many have faced stigma and culturally-incompetent treatment when trying to recover from an eating disorder, we want people to recognize they are not alone in overcoming this by creating a space for first-hand accounts to be heard.
      </p>
    </div>
    <div className="mission-image">
      <img src={pic11} alt="Mission" className="image-style" />
    </div>
  </div>
</section>


      {/* What We Do Section */}
      <section className="what-we-do">
        <h2 className="section-title">Why Shuno</h2>
        <p>
        Shuno is the word for “listen” or “hear” in Bengali. The name was chosen to represent listening to the voices of people who haven’t been listened to before. Through testimonials from people who have struggled with an ED, we strive to show how it is okay to suffer and it is okay to ask for help. 
        </p>
      </section>
      
      <section className="eating-disorders-section">
            <h2 className="big-title">Disordered Eating vs. Eating Disorders</h2>
          </section>

      <div className="eating-disorders-containerr">
            <div className="disorder-item">
              <img src={choice} alt="Choice icon" className="disorder-icon" />
              <h3>Disordered eating</h3>
              <p>
              net term for different types of eating behaviors and is situated between normal eating and an eating disorder.               </p>
            </div>
            <div className="disorder-item">
              <img src={phase} alt="Phase icon" className="disorder-icon" />
              <h3>Eating disorder</h3>
              <p>
              a mental illness which people may receive a medical diagnosis for. Disordered eating is a risk factor for an eating disorder. 

</p>
            </div>
          
          </div>

          <section className="what-we-do">
  <h2 className="section-title">What We Do</h2>
  <div className="what-we-do-container">
    <div className="circle">
      <h3>Submissions</h3>
      <p>
        Shuno collects the submissions from South Asians around the world so that individuals can express what they have gone through without fear of judgment or invalidation.
      </p>
    </div>
    <div className="circle">
      <h3>Resources</h3>
      <p>
        Directories for South Asian clinicians who specialize in eating disorders and useful organizations are available if you are seeking treatment or educational references to learn more.
      </p>
    </div>
    <div className="circle">
      <h3>Education</h3>
      <p>
        We're currently developing educational materials to be distributed so there is greater understanding of risk factors and recovery options for this disorder
      </p>
    </div>
  </div>
          </section>

    </div>
  );
};

export default Mission;
