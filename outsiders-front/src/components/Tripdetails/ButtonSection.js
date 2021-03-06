// == Package Import
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

// Local import
import YesNoModal from '../YesNoModal';

const ButtonSection = ({ creatorId, handleDelete, handleJoin, handleLeave, isParticipant, userId }) => {
  // toggle delete modal
  const [ displayModal, setDisplayModal ] = useState(false);
  const modalCSS = displayModal
    ? "delete-modal active"
    : "delete-modal inactive"

  // compare user with trip creator
  const isTripCreator = (idA, idB) => {
    if (idA === idB) {
      return true;
    }
    return false;
  };
  
  // handle delete
  const deleteTrip = () => {
    handleDelete()
  };

  // join trip
  const joinTrip = () => {
    handleJoin();
  };

  // leave trip
  const leaveTrip = () => {
    handleLeave();
  };

  return (
    <section className="buttonSection">

      {/* case user is creator */}
      {isTripCreator(userId, creatorId) && (
        <>
        <button className="buttonSection__btn"><NavLink to="/modifier-sortie">Modifier la sortie</NavLink></button>
        <button onClick={() => {setDisplayModal(!displayModal)}} className="buttonSection__btn buttonSection__btn--del">Annuler la sortie</button>
        </>
      )}

      {/* case user is not participant */}
      {!isParticipant && !isTripCreator(userId, creatorId) && (
        <>
        <button onClick={joinTrip} className="buttonSection__btn">Rejoindre la sortie</button>
        </>
      )}

      {/* case user is participant */}
      {isParticipant && !isTripCreator(userId, creatorId) && (
        <>
        <button onClick={leaveTrip} className="buttonSection__btn">Je ne suis plus disponible</button>
        </>
      )}
      
      <YesNoModal onClick={deleteTrip} modalCSS={modalCSS} displayModal={displayModal} setDisplayModal={setDisplayModal} />
    </section>
  );
};

export default ButtonSection;