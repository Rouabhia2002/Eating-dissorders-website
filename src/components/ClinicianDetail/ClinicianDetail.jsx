import React from 'react';
import { useLocation } from 'react-router-dom';
import './ClinicianDetail.css';

const ClinicianDetail = () => {
  const location = useLocation();
  const clinician = location.state?.clinician;

  console.log("Clinician data:", clinician);

  if (!clinician) {
    return <div className="clinician-detail__error">No clinician data available. Please check the URL or try again later.</div>;
  }

  return (
    <div className="clinician-detail">
      <h1 className="clinician-detail__name">{clinician.name}</h1>
      <img
        src={clinician.image || '/path/to/default-image.jpg'}
        alt={clinician.name}
        className="clinician-detail__image"
      />
      <p className="clinician-detail__contact"><strong>Contact:</strong> {clinician.contact}</p>
      <p className="clinician-detail__location"><strong>Location:</strong> {clinician.location}</p>
      {clinician.website && clinician.website !== "N/A" && (
        <a
          href={clinician.website}
          target="_blank"
          rel="noopener noreferrer"
          className="clinician-detail__website"
        >
          Visit Website
        </a>
      )}
      <p className="clinician-detail__description"><strong>Description:</strong> {clinician.description || "No data available."}</p>
      <p className="clinician-detail__specialties"><strong>Specialties:</strong> {clinician.specialties || "No data available."}</p>
      <p className="clinician-detail__additional-info"><strong>Additional Info:</strong> {clinician.additionalInfo || "No data available."}</p>
    </div>
  );
};

export default ClinicianDetail;
