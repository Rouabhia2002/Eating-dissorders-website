import React from 'react';
import './Get.css';

const Get = () => {
  return (
    <div className="get-involved-container">
      <h1 className="get-involved-title">Get involved</h1>
      <p className="get-involved-subtitle">
        Help us change the narrative around eating disorders
      </p>
      <section className="get-involved-section">
        <h2>Volunteers</h2>
        <p>
          Shuno is in need of volunteers to assist with various aspects of Shuno, including the following:
        </p>
        <ul>
          <li>Fundraising</li>
          <li>Social media</li>
          <li>Outreach</li>
        </ul>
        <p>
          A position can be arranged based on what you would like to do and your skillset. If you would like to join the team, feel free to reach out to{' '}
          <a href="mailto:anoovasattar@gmail.com">anoovasattar@gmail.com</a>.
        </p>
      </section>
      
      <section className="get-involved-section">
        <h2>Material Development</h2>
        <p>
          We are looking for people who have expertise working with eating disorders in either a clinical or academic setting to help develop educational materials.
          It is ideal that you have experience working specifically with South Asians, but anyone with experience in this field, either through research or treating individuals, is welcome.
        </p>
      </section>
      
      <section className="get-involved-section">
        <h2>Translators</h2>
        <p>
          Translators are responsible for converting materials related to Shuno into languages spoken among the South Asian diaspora in an easy, accessible way.
          If you are interested in translating our work, please email{' '}
          <a href="mailto:anoovasattar@gmail.com">anoovasattar@gmail.com</a>.
        </p>
      </section>
      
      <section className="get-involved-section">
        <h2>Directory</h2>
        <p>
          If you are a South Asian mental healthcare provider and have experience working with eating disorders, please see our resources page for more information on how to offer your services.
        </p>
      </section>
    </div>
  );
};

export default Get;
