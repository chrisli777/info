import React, { useState } from 'react';
import ElderCheckInPage from './component/ElderCheckInPage';
import CaregiverDashboard from './component/CaregiverDashboard';
import FamilyDashboard from './component/FamilyDashboard';
import ChatPage from './component/ChatPage';
import ElderProfilePage from './component/ElderProfilePage';

function App() {
  const [page, setPage] = useState('caregiver'); // default view

  return (
    <div>
      <nav style={navStyle}>
        <button onClick={() => setPage('caregiver')} style={navBtnStyle}>
          Caregiver Dashboard
        </button>
        <button onClick={() => setPage('elder')} style={navBtnStyle}>
          Elder Check-In
        </button>
        <button onClick={() => setPage('family')} style={navBtnStyle}>
          Family Dashboard
        </button>
        <button onClick={() => setPage('chat')} style={navBtnStyle}>
          Chat Page
        </button>
        <button onClick={() => setPage('profile')} style={navBtnStyle}>
          Elder Profile
          </button>
      </nav>

      {page === 'caregiver' && <CaregiverDashboard />}
      {page === 'elder' && <ElderCheckInPage />}
      {page === 'family' && <FamilyDashboard />}
      {page === 'chat' && <ChatPage />}
      {page === 'profile' && <ElderProfilePage />}
    </div>
  );
}

const navStyle = {
  padding: '10px',
  background: '#007bff',
  color: 'white',
  display: 'flex',
  gap: '10px',
};

const navBtnStyle = {
  backgroundColor: 'white',
  color: '#007bff',
  border: 'none',
  padding: '8px 12px',
  borderRadius: '5px',
  cursor: 'pointer',
};

export default App;
