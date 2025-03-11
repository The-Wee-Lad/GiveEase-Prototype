import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './components/About.jsx';
import Carousel from './components/Carousel.jsx';
import Footer from './components/Footer.jsx';
import Navbar from './components/Navbar.jsx';
import NGOLogin from './components/NGOLogin.jsx';
import Review from './components/Review.jsx';
import './index.css';
import DonarLogin from './components/DonarLogin.jsx';
import Login from './pages/Login.jsx';

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

const PrivateRoute = ({ isAuthenticated, ...props }) => {
  return (
    isAuthenticated
      ?
      <>
        <Header />
        <Outlet />
      </>
      :
      <Navigate replace to={'/login'} />
  )
}

const App = () => {

  const [isAuthenticated, setIsAuthenticated] = useState(false)
  return (
    <div className="overflow-x-hidden">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeLayout />} />
          <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
          <Route path="/ngologin" element={<Layout><NGOLogin /></Layout>} />
          <Route path="/donorlogin" element={<Layout><DonarLogin /></Layout>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
