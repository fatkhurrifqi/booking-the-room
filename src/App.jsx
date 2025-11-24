// import React, { useState, useEffect } from 'react';
import './App.css';
import Arrifed from './components/Arrifed.jsx';
import AsideMenu from './components/AsideMenu.jsx';
import Browse from './components/Browse.jsx';
import Clients from './components/Clients.jsx';
import Footer from './components/Footer.jsx';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';

function App() {
  // const [items, setItems] = useState([]);

  const newItems = [
    { id: 1, name: 'Cangkir Mauttie', price: 25, image: '/images/content/image-arrived-1.png' },
    { id: 2, name: 'Bankyu Minimay', price: 50, image: '/images/content/image-arrived-2.png' },
    { id: 3, name: 'Buku Sidu Edition', price: 75, image: '/images/content/image-arrived-3.png' },
    { id: 4, name: 'Watch Notes X', price: 80, image: '/images/content/image-arrived-4.png' },
    { id: 5, name: 'Racking Plants', price: 10, image: '/images/content/image-arrived-5.png' },
  ];

  return (
    <>
      <Header />
      <Hero />
      <Browse />
      <Arrifed items={newItems} />
      <Clients />
      <AsideMenu />
      <Footer />
    </>
  );
}

export default App;
