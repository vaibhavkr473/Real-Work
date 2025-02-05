import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HeaderNav from './components/HeaderNav';
import Hero from './components/Hero';
import Features from './components/Features';
import Sliders from './components/Sliders';
import Footer from './components/Footer';
import './App.css';
import axios from 'axios';

// Admin Pages
import Navbar_Admin from './pages/Admin/Navbar_Admin';
// import Hero_Admin from './pages/Admin/Hero_Admin';
// import A_Company from './pages/Admin/A_Company';
// import A_Announcement from './pages/Admin/A_Announcement';
// import A_Applications from './pages/Admin/A_Applications';

// Student Pages
import Navbar_Student from './pages/Student/Navbar_Student';
import Hero_Student from './pages/Student/Hero_Student';
import Resume from './pages/Student/Resume';
// import S_Announcements from './pages/Student/S_Announcements';
// import S_Applications from './pages/Student/S_Applications';

// Authentication pages
import Login from './pages/Authentication/Login';
import Registration from './pages/Authentication/Registration';

import About from './components/About';
import Contact from './components/Contact';

const App = () => {
  return (
    <Router>
      <HeaderNav />
      <Navbar_Admin />
      <Navbar_Student />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <Features />
            <Sliders />
            <Footer />
          </>
        }
        />

        {/* Admin */}
        <Route path="/navbar_Admin" element={<Navbar_Admin />} />
        {/* <Route path="/hero_Admin" element={<Hero_Admin />} />
        <Route path="/a_Company" element={<A_Company />} />
        <Route path="/a_Announcement" element={<A_Announcement />} />
        <Route path="/a_Applications" element={<A_Applications />} /> */}

        {/* Student */}
        <Route path="/navbar_Student" element={<Navbar_Student />} />
        <Route path="/hero_Student" element={<Hero_Student />} />
        <Route path="/resume" element={<Resume />} />
        {/* <Route path="/s_Announcements" element={<S_Announcements />} />
        <Route path="/s_Applications" element={<S_Applications />} /> */}


        {/* Reach Us */}
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        {/* Authentication */}
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
      </Routes>
    </Router>
  );
};

export default App;