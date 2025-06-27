

import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Pages






import HomePage from './Pages/HomePage';

import AdmissionsPage from './Pages/AdmissionsPage';
import ContactPage from './Pages/ContactPage';
import CoursesPage from './Pages/CoursesPage';
import ChatbotComponent from './Components/Chatbot/ChatbotComponent';
import AboutPage from './Pages/AboutPage';
import NotFoundPage from './Pages/NotFoundPage';
import DeveloperInfoPopup from './Components/DeveloperInfo/DeveloperInfoPopup';
//import ChatbotComponent from './components/Chatbot/ChatbotComponents';
//import DeveloperInfoPopup from './components/Developerlnfo/DeveloperInfoPopup';

function App() {
  const [showPopup, setShowPopup] = useState(true);
  const handleClosePopup = () => {
    setShowPopup(false);
  };
  // const [showPopup, setShowPopup] = useState(true);

  // const handleClosePopup = () => {
  //   setShowPopup(false);
  // };
  return (
    <>
    <div>
        {/* Your main application content */}
        <DeveloperInfoPopup
          show={showPopup}
          onClose={handleClosePopup}
          studentName="Vasudha Ravindra Dabhade"
          studentPhotoUrl="\Images\c4f86320-7173-4b8d-9033-a6afea41ef13.jpg" // Path to their photo
          uniqueMessage="Learned so much during this OJT! This app showcases my independent coding and deployment skills"
        />
      </div>
    <div>
        {/* Your main application content
        <DeveloperInfoPopup
          show={showPopup}
          onClose={handleClosePopup}
          studentName="Saloni Jitendra Patil"
          studentPhotoUrl="\Images\1000133327-02.jpeg" // Path to their photo
          uniqueMessage="Learned so much during this OJT! This app showcases my independent coding and deployment skills"
        /> */}
      </div>
    <Router>
     
      
      <main style={{ padding: '1rem' }}>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/about" element={<AboutPage/>} />
          <Route path="/apply" element={<AdmissionsPage/>} />
          <Route path="/contact" element={<ContactPage/>} />
           <Route path="/courses" element={<CoursesPage/>} />
          <Route path="*" element={<NotFoundPage/>} />
        </Routes>
        <ChatbotComponent/>
      </main>
    {/* <ChatbotComponent/>  */}
    </Router>
    </>
  );
}

export default App;
