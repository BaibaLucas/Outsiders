// == Package imports
import React, { useState } from 'react';
import PropTypes from 'prop-types';


// == Local imports
import DashBoardSports from '../../containers/DashboardSports';
import DashboardProfiles from '../../containers/DashboardProfiles';


const BackOffice = ({ firstname, lastname, role }) => {
  // open sport or profile form
  const [ openForm, setOpenForm ] = useState('profile');
  
  const openSport = () => {
    setOpenForm('sport');
  };

  const openProfiles = () => {
    setOpenForm('profile');
  };

  return (
    <div className="backOffice">

      <h1 className="backOffice__title">Tableau de bord</h1>
      <div className="backOffice__headContainer">
        <p className="backOffice__headContainer__username">{firstname} {lastname}</p>
        <nav className="backOffice__headContainer__nav">
          <button className="backOffice__headContainer__nav__btn" onClick={openSport}>Sport</button>
          <button className="backOffice__headContainer__nav__btn" onClick={openProfiles}>Profils</button>
        </nav>
      </div>


      {openForm === 'sport' && (
        <DashBoardSports />
      )}

      {openForm === 'profile' && (
        <DashboardProfiles />
      )}
    </div>
  )
};

BackOffice.propTypes = {
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
  role: PropTypes.number.isRequired,
}

export default BackOffice;

