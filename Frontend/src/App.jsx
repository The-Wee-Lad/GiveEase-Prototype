import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import About from './components/About.jsx';
import Carousel from './components/Carousel.jsx';
import Footer from './components/Footer.jsx';
import Navbar from './components/Navbar.jsx';
import NGOLogin from './components/NGOLogin.jsx';
import Review from './components/Review.jsx';
import './index.css';
import DonarLogin from './components/DonarLogin.jsx';

const HomeLayout = () => {
  return (
    <div>
      <Navbar />
      <Carousel />
      <About />
      <Review />
      <Footer />
    </div>
  );
};

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

const App = () => {
  return (
    <div className="overflow-x-hidden">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeLayout />} />
          <Route path="/ngologin" element={<Layout><NGOLogin /></Layout>} />
          <Route path="/donorlogin" element={<Layout><DonarLogin /></Layout>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
