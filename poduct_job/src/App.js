// App.js
import React from 'react';  // Import React
import './App.css';  // Import CSS file for App
import Header from './Component/header2.0/header';  // Ensure path matches the folder structure
import Inbox from './Component/inbox/Inbox';  // Ensure path matches the folder structure

function App() {
  return (
    <>
      {/* Render the Header component */}
      <Header /> 
      {/* Render the Inbox component */}
      {/* <Inbox /> */}
    </>
  );
}

export default App;
