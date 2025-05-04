import React from 'react';
import './CaregiverDashboard.css';

const CaregiverDashboard = () => {
  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <div className="logo">💙 CareCircle</div>
        <button className="logout-button">Logout</button>
      </header>

      <main className="dashboard-content">
        <section className="task-section">
          <h2>Task Checklist</h2>
          <div className="task-grid">
            <div className="task-card">
              Meds Given
              <button className="complete-button">Complete</button>
            </div>
            <div className="task-card">
              Meals Served
              <button className="complete-button">Complete</button>
            </div>
            <div className="task-card">
              Hygiene
              <button className="complete-button">Complete</button>
            </div>
            <div className="task-card">
              Exercise
              <button className="complete-button">Complete</button>
            </div>
          </div>
        </section>

        <section className="note-section">
          <h2>Add Note</h2>
          <textarea className="note-input" placeholder="Add your note here..." />
          <button className="voice-button">Voice-to-Text</button>
        </section>

        <section className="notifications-section">
          <h2>Notifications</h2>
          <div className="notification-card">
            Missed Meds: Blood Pressure Pills - 9:00 AM
          </div>
        </section>

        <div className="submit-button-wrapper">
          <button className="submit-button">Submit Log</button>
        </div>
      </main>

      <footer className="dashboard-footer">
        © 2023 CareCircle. All rights reserved.
      </footer>
    </div>
  );
};

export default CaregiverDashboard;