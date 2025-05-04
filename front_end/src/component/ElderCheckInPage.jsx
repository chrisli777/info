import React from 'react';
import './ElderCheckInPage.css';

const ElderCheckInPage = () => {
  return (
    <div className="checkin-container">
      <h2 className="checkin-title">How are you feeling today?</h2>

      <div className="mood-buttons">
        <button className="mood-button">😢</button>
        <button className="mood-button">😐</button>
        <button className="mood-button">😊</button>
      </div>

      <div className="primary-checkin-button">
        <button className="primary-button">How are you feeling today?</button>
      </div>

      <div className="support-buttons">
        <button className="secondary-button">Need something?</button>
        <button className="secondary-button">Want to talk?</button>
      </div>

      <div className="final-checkin-button">
        <button className="primary-button">Check In</button>
      </div>
    </div>
  );
};

export default ElderCheckInPage;

