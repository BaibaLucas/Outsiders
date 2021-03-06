// Packages imports
import React from "react";
import { Redirect } from "react-router-dom";
import PropTypes from "prop-types";

// Local imports 
import NotConnectedModal from "./NotConnectedModal";

// My Component
const Admin = ({ closeModal, emailValue, passwordValue, handleChange, handleAdmin, isLogged, loginError }) => {

  const onChange = (event) => {
    handleChange(event.target.value, event.target.name);
  };

  const onSubmitAdmin = (event) => {
    event.preventDefault();
    handleAdmin();
  };

  return (
    <div className="admin-page">
      

      <h1 className="admin-page__title">
        Connexion Admin
      </h1>
      <form className="admin-page__form" onSubmit={onSubmitAdmin}>
        <label className="admin-page__form__label" htmlFor="email">
          Email
        </label>
        <input
          className="admin-page__form__input"
          type="email"
          name="email"
          id="email"
          placeholder="Saisissez votre e-mail"
          value={emailValue}
          onChange={onChange}
        />
        <label className="admin-page__form__label" htmlFor="password">
          Mot de passe
        </label>
        <input
          className="admin-page__form__input"
          type="password"
          name="password"
          id="password"
          placeholder="Saisissez votre mot de passe"
          value={passwordValue}
          onChange={onChange}
        />
        <button 
          className="admin-page__form__button"
          type="submit"
          name="button"
          id="button"
        >
          Valider
        </button>
        
        {/* if email and/or password are wrong */}
        {!isLogged && loginError && (
          <NotConnectedModal closeModal={closeModal} />
        )}
       
        {/* redirect if user is logged */}
      {isLogged && (<Redirect to="/dashboard" />)}
      </form>
    </div>
  );
};

// Default value for Admin (propTypes)
Admin.propTypes = {
  emailValue: PropTypes.string.isRequired,
  passwordValue: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleAdmin: PropTypes.func.isRequired,
  isLogged: PropTypes.bool.isRequired,
};

export default Admin;
