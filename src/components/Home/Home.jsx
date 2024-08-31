import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Importing the CSS file

const Home = () => {
  return (
    <div className="home-container">
      <div className="headline">
        <h1>Advancing discussion about eating disorders in South Asians through personal experiences</h1>
      </div>
      <p className="description">
        We address the stigma associated with eating disorders in the South Asian community by collecting submissions from those willing to anonymously write about their experience.
      </p>
      <div className="submit-button-container">
        <Link to="/submissions" className="submit-button">Submit Now</Link>
      </div>
      
      <section className="changing-narrative">
        <h2>Changing the Narrative</h2>
        <p>
          Despite the extensive research that has been done on the topic, eating disorders are still framed as being the individual’s fault and only limited to certain demographics.
        </p>
        <p>
          What image pops into your head when you see the words EATING DISORDER?<br />
          How do you think that person developed an eating disorder?<br />
          What does an eating disorder mean?
        </p>
      </section>

      <section className="how-started">
        <h2>How Did We Start?</h2>
        <p>
          Shuno began with Anoova Sattar, a Bangladeshi American who underwent her own struggle with anorexia at a young age and felt encouraged to provide resources for others in a similar situation. Despite having had a stable support system, there were still many cultural barriers that prevented her from accessing treatment immediately and she brings attention to the need for early intervention in reducing mortality and other consequences associated with eating disorders.
        </p>
        <div className="read-more-button-container">
          <Link to="/about" className="read-more-button">Read More</Link>
        </div>
      </section>

      <section className="join-us">
        <h2>Interested in Joining?</h2>
        <p>
          We’re always looking for more people interested in furthering our goals! If you would like to join the team, feel free to reach out to <a href="mailto:anoova.sattar@shunoeatingdisorders.com">anoova.sattar@shunoeatingdisorders.com</a> or <a href="mailto:info@shunoeatingdisorders.com">info@shunoeatingdisorders.com</a>.
        </p>
        <p>We are also in need of translators so the information on this site can be dispersed to non-English speaking individuals.</p>
      </section>

      <section className="help-grow">
        <h2>Help Us Grow</h2>
        <p>
          You can support this project through donations or sponsorships as well. Any contribution helps us move towards achieving our goal and getting resources to the people who need it.
        </p>
      </section>
    </div>
  );
};

export default Home;
