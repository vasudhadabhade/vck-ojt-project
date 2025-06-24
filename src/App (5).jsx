

import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Pages





import NotFoundPage from './pages/NotFoundPage';
import HomePage from './Pages/HomePage (1)';
import AboutPage from './Pages/AboutPage (2)';
import AdmissionsPage from './Pages/AdmissionsPage (1)';
import ContactPage from './Pages/ContactPage (2)';
import CoursesPage from './Pages/CoursesPage (2)';
//import ChatbotComponent from './components/Chatbot/ChatbotComponents';
//import DeveloperInfoPopup from './components/Developerlnfo/DeveloperInfoPopup';

function App() {
  // const [showPopup, setShowPopup] = useState(true);

  // const handleClosePopup = () => {
  //   setShowPopup(false);
  // };
  return (
    <>
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
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    {/* <ChatbotComponent/>  */}
    </Router>
    </>
  );
}

export default App;
