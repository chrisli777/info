import React from 'react';
import './ChatPage.css';

const ChatPage = () => {
  return (
    <div className="chat-layout">
      <aside className="chat-sidebar">
        <h3 className="sidebar-title">CareCircle</h3>
        <nav className="sidebar-nav">
          <ul>
            <li>Care Plan</li>
            <li className="active">Appointment Reminders</li>
            <li>Emergency Contacts</li>
            <li>Therapy Sessions</li>
            <li>Medical History</li>
          </ul>
        </nav>
      </aside>

      <main className="chat-main">
        <header className="chat-header">
          <input className="chat-search" placeholder="Search in CareCircle" />
          <button className="chat-members-btn">5 Members</button>
        </header>

        <section className="chat-content">
          <h4>Health Updates <span className="chat-subtitle">| Latest health and wellness updates</span></h4>

          <div className="chat-message">
            <p><strong>John</strong> <span className="chat-time">11:24 AM</span></p>
            <p>Hello everyone! I wanted to share the latest health updates for our loved one...</p>
            <div className="chat-attachment">📎 Health Update Details (10:10 AM – 5 MB)</div>
          </div>

          <div className="chat-message">
            <p><strong>Emily</strong> <span className="chat-time">11:25 AM</span></p>
            <p>Great progress! Keep it up.</p>
          </div>

          <div className="chat-message">
            <p><strong>Alic</strong> <span className="chat-time">11:26 AM</span></p>
            <p>Sending positive vibes!</p>
          </div>
        </section>

        <footer className="chat-footer">
          <textarea placeholder="Add a note..." />
          <div className="chat-footer-icons">
            <span>🎤</span>
            <span>📎</span>
            <span>😊</span>
            <button className="send-btn">➤</button>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default ChatPage;
