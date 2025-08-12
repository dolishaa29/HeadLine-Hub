import React from 'react';
import Navbar from './Components/Navbar';
import Newss from './Components/Newss';
import {   Routes, Route } from "react-router-dom";


const App = () => {
  return (
      <div>
        
        <Navbar />

       
        <Routes>
          <Route path="/" element={<Newss key="general" country="us" category="general" />} />
          <Route path="/business" element={<Newss key="business" country="us" category="business" />} />
          <Route path="/entertainment" element={<Newss key="entertainment" country="us" category="entertainment" />} />
          <Route path="/health" element={<Newss key="health" country="us" category="health" />} />
          <Route path="/science" element={<Newss key="science" country="us" category="science" />} />
          <Route path="/sports" element={<Newss key="sports" country="us" category="sports" />} />
          <Route path="/technology" element={<Newss key="technology" country="us" category="technology" />} />
        </Routes>
      </div>
   
  );
};

export default App;
