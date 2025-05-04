import React from 'react';
import './FamilyDashboard.css';

const FamilyDashboard = () => {
  return (
    <div className="family-container">
      <header className="family-header">
        <div className="logo">💙 CareCircle</div>
        <button className="message-btn">Send Message to Caregiver</button>
      </header>

      <main className="family-main">
        <section className="mood-section">
          <h3>Elder's Current Mood</h3>
          <div className="mood-box">
            <div>
              <strong>😊 Happy</strong>
              <p>Last updated: 11:30 AM</p>
            </div>
          </div>
        </section>

        <section className="timeline-section">
          <h3>Timeline View</h3>
          <div className="timeline-grid">
            <div className="timeline-card">
              <strong>Check-in</strong>
              <p>10:00 AM</p>
              <p>Elder checked-in successfully.</p>
            </div>
            <div className="timeline-card">
              <strong>Task: Medication</strong>
              <p>11:00 AM</p>
              <p>Medication administered.</p>
            </div>
            <div className="timeline-card">
              <strong>Check-in</strong>
              <p>12:00 PM</p>
              <p>Elder missed check-in.</p>
            </div>
          </div>
        </section>

        <section className="notification-section">
          <h3>Notification Settings</h3>
          <div className="toggle-row">
            Alert for Missed Check-ins
            <div className="toggle-switch on" />
          </div>
          <div className="toggle-row">
            Urgent Flags
            <div className="toggle-switch on" />
          </div>
        </section>
      </main>

      <footer className="family-footer">
        © 2023 CareCircle. All rights reserved. &nbsp;
        <a href="/">Privacy Policy</a> | <a href="/">Terms of Service</a>
      </footer>
    </div>
  );
};

export default FamilyDashboard;
