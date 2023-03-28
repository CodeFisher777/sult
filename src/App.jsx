import React from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Cart } from './pages/Cart';
import { FullCard } from './pages/FullCard';
import { BreadCrumbs } from './components/BreadCrumbs';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <div className="wrapper">
        <Header />
        <BreadCrumbs />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/full" element={<FullCard />} />
          <Route path="/Admin" element={<h1>Admin</h1>} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
