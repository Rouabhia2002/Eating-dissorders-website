import React from "react";
import "./Resources.css";

const Resources = () => {
  const clinicians = [
    {
      name: "Natasha Wahi",
      contact: "info@mysahaaya-healingandwellness.com, +1 (509) 426-3173",
      location: "Seattle, WA, USA",
      website: "N/A",
    },
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
      name: "Runjhun Pandit",
      contact: "runjhun@wellbeingden.com",
      location: "Seattle, WA, USA",
      website: "https://www.wellbeingden.com/",
    },
    {
      name: "Mehar Ahuja",
      contact: "mehar@gayatherapy.com",
      location: "New York, NY, USA",
      website: "https://www.gayatherapy.com/mehar",
    },
    {
      name: "Samina Qureshi",
      contact: "wholesomestartrd@gmail.com",
      location: "Houston, TX, USA",
      website: "https://www.wholesomestart.com/dietitian-samina",
    },
  ];

  const organizations = [
    {
      name: "Islam and Eating Disorders",
      contact: "waedisorder@gmail.com",
      description:
        "Focused on eating disorders in the Islamic community and connects people with affordable treatment options; tries to help those in need and puts out information regarding various other social justice issues.",
      website: "https://waragainsteatingdisorder.com/",
    },
    {
      name: "Elephant in the Room",
      contact: "thriveagain@eitrf.org",
      description:
        "An organization dedicated to showing that the root cause of anorexia is biological and eliminating misinformation about the disorder.",
      website: "https://www.eitrf.org/",
    },
    {
      name: "LEAP (Leading Eating Disorder Awareness Project for AAPI)",
      contact: "contact@leap4asian.com",
      description:
        "Offers resources for AAPI individuals struggling with an eating disorder. A directory for AAPI eating disorder specialists is included on their page.",
      website: "https://www.leap4asian.com/",
    },
    {
      name: "Arise",
      contact: "hello@wearise.com",
      description: "",
      website: "https://www.wearise.com/about",
    },
  ];

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
              {clinician.website !== "N/A" && (
                <a
                  href={clinician.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="resource-card__website"
                >
                  Visit Website
                </a>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="resources__section">
        <h2>Organizations</h2>
        <div className="resources__list">
          {organizations.map((organization, index) => (
            <div className="resource-card" key={index}>
              <h3 className="resource-card__name">{organization.name}</h3>
              <p className="resource-card__contact">{organization.contact}</p>
              <p className="resource-card__description">
                {organization.description}
              </p>
              <a
                href={organization.website}
                target="_blank"
                rel="noopener noreferrer"
                className="resource-card__website"
              >
                Visit Website
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Resources;
