import React from 'react';
import Navbarr from '../components/Navbar/Navbar.jsx';
import ClinicianDetail from '../components/ClinicianDetail/ClinicianDetail.jsx';
import Footer from '../components/Footer/Footer.jsx';


const ClinicPage = () => {
  return (
    <>
      <Navbarr />
      <ClinicianDetail />
      <Footer />
    </>
  );
};

export default ClinicPage;