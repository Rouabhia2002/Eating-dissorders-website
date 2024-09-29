import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Importing the CSS file
import myImage from '../../assets/annova.jpg'; 
import phase from '../../assets/phase.png'; 
import treatement from '../../assets/treatement.png'; 
import choice from '../../assets/choice.png'; 

const Home = () => {
  return (
    <div className="home-container">
      <div className="content-wrapper">
        <div className="text-content">
          <div className="hero-section">
            <div className="text-container">
              <div className="headline">
                <h1>Advancing discussion about eating disorders in South Asians through personal experiences</h1>
              </div>
              <p className="description">
                We address the stigma associated with eating disorders in the South Asian community by collecting submissions from those willing to anonymously write about their experience.
              </p>
              <div className="submit-button-container">
                <Link to="/submissions" className="submit-button">Submit Now</Link>
              </div>
            </div>
            <div className="image-container">
              <img src={myImage} alt="Description of the image" className="side-image" />
            </div>
          </div>

          {/* Quote Section */}
          <section className="quote-section">
            <p className="quote-text"><strong>You are not your disorder. Healing starts with self-love.</strong></p>
          </section>

          <section className="eating-disorders-section">
            <h2 className="big-title">Eating disorders...</h2>
          </section>
          <div className="eating-disorders-container">
            <div className="disorder-item">
              <img src={choice} alt="Choice icon" className="disorder-icon" />
              <h3>Are not a choice</h3>
              <p>
                Even if we live in similar environments and are exposed to the same perceptions and factors aggravating progression of an eating disorder, we don’t all have an eating disorder. Extensive research has shown the genetic component involved and, although work is still being done on that, this illness is not your fault.
              </p>
            </div>
            <div className="disorder-item">
              <img src={phase} alt="Phase icon" className="disorder-icon" />
              <h3>Are not a phase</h3>
              <p>
                People’s experiences are often minimized and made out to be self-curable. One can’t just get over an eating disorder and that is clear from the number who have been killed by it.
              </p>
            </div>
            <div className="disorder-item">
              <img src={treatement} alt="Treatment icon" className="disorder-icon" />
              <h3>Deserve treatment</h3>
              <p>
                Treatment for an eating disorder or disordered eating will look different in every individual. We draw focus to the need for culturally-competent care and how taking into account personal background is necessary for it to be effective.
              </p>
            </div>
          </div>

          <section className="changing-narrative">
            <h2>Changing the Narrative</h2>
            <p>
            Despite the extensive research that has been done on the topic, eating disorders are still framed as being the individual’s fault and only exclusive to certain demographics. 

What image pops into your head when you see the words EATING DISORDER? 
How do you think that person developed an eating disorder? 
What does an eating disorder mean?

The answers to these questions are likely limited as they’ve, for the most part, only been asked in a Western context. When it comes to BIPOC communities, the different cultural and environmental factors can greatly impact how an individual experiences an eating disorder. We are not trying to diminish the experiences of those who are most portrayed to have an eating disorder, but instead broaden the perspective and show there are others outside of that who do too. 

Eating disorders and disordered eating somehow get left out in the discussion of mental illnesses. But they shouldn’t be. The vision of Shuno is to create a space where people are able to express their story in their words. We facilitate awareness through uplifting others’ experiences and eliminating attitudes that minimize them. 
            </p>
          </section>

          <section className="how-started">
            <h2>How Did We Start?</h2>
            <p>
            Shuno began with Anoova Sattar, a Bangladeshi American who underwent her own struggle with anorexia at a young age and felt encouraged to provide resources for others in a similar situation. Despite having had a stable support system, there were still many cultural barriers that prevented her from accessing treatment immediately and she brings attention to the need for early intervention in reducing the prevalence of eating disorders worldwide.             </p>
            <div className="read-more-button-container">
              <Link to="/submissions" className="read-more-button">Read More</Link>
            </div>
          </section>

          <section className="join-us">
            <h2>Interested in Joining?</h2>
            <p>
              We’re always looking for more people interested in furthering our goals! If you would like to join the team, feel free to reach out to <a href="mailto:anoova.sattar@shunoeatingdisorders.com">anoova.sattar@shunoeatingdisorders.com</a> or <a href="mailto:info@shunoeatingdisorders.com">info@shunoeatingdisorders.com</a>.
            </p>
            <p>We are also in need of translators so the information on this site can be dispersed to non-English speaking individuals.</p>
            <div className="read-more-button-container">
              <Link to="/getinvolved" className="read-more-button">Get involved</Link>
            </div>
          </section>

          <section className="help-grow">
            <h2>Help Us Grow</h2>
            <p>
              You can support this project through donations or sponsorships as well. Any contribution helps us move towards achieving our goal and getting resources to the people who need it.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Home;
