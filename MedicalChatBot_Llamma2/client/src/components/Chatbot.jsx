// src/Chatbot.js
import React from 'react';

const Chatbot = () => {
  return (
    <div style={{ height: '100vh', width: '100%', border: 'none'}}>
      <iframe
        src="http://localhost:8000/" // Adjust the URL as needed

        title="Medical Chatbot"
        style={{ height: '100%', width: '100%', border: 'none' }}
        allow="microphone; camera"
      />
    </div>
  );
};

export default Chatbot;