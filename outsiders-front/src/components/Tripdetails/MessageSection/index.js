// == Package Import
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FaPaperPlane } from "react-icons/fa";
import { IoIosCloseCircle } from "react-icons/io";

// == Local Import
import Message from './Message';
import useAutoScroll from '../../../hooks/useAutoScroll';

const MessageSection = ({ handleChange, handleNewMessage, isParticipant, messages, messageValue, username }) => {
  // toggle message window
  const [ displayMessages, setDisplayMessages] = useState(false);
  const messengerStyle = displayMessages
    ? 'messageSection__messenger active'
    : 'messageSection__messenger inactive'
  const toggleMessages = () => {
    setDisplayMessages(!displayMessages);
  };

  const trackTextArea = (event) => {
    handleChange(event.target.value);
  };

  const onSubmitForm = (event) => {
    event.preventDefault();
    handleNewMessage();
  }

  const bottom = useAutoScroll([messages]);

  return (
    <section className="messageSection">

      {/* case user is participant */}
      {isParticipant && (
        <>
          <button onClick={toggleMessages} className="messageSection__toggle">Messagerie de la sortie</button>
        </>
      )}
      
      <div className={messengerStyle}>
        <div className="messageSection__messenger__container">
          <div className="messageSection__messenger__container__header">
            <h2 className="messageSection__messenger__container__header__title">Messagerie</h2>
            <IoIosCloseCircle onClick={toggleMessages} className="messageSection__messenger__container__header__btn" />
          </div>
          <div className="messageSection__messenger__container__viewer">
            {messages.map((msg) => {
              return <Message key={msg.id} msg={msg} username={username} />
            })}
            <div className="messageSection__messenger__container__viewer__void" ref={bottom} />
          </div>
          <form onSubmit={onSubmitForm} className="messageSection__messenger__container__form">
            <textarea
              value={messageValue}
              onChange={trackTextArea}
              name='messageValue'
              className="messageSection__messenger__container__form__input"
              placeholder="C'est ici que tu peux raconter ta vie..."
            />
            <button className="messageSection__messenger__container__form__btn"><FaPaperPlane /></button>
          </form>
        </div>
      </div>
    </section>
  );
};

MessageSection.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleNewMessage: PropTypes.func.isRequired,
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ),
  messageValue: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
}

export default MessageSection;