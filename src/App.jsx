import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';
import Arrifed from './components/Arrifed.jsx';
import AsideMenu from './components/AsideMenu.jsx';
import Browse from './components/Browse.jsx';
import Clients from './components/Clients.jsx';
import Footer from './components/Footer.jsx';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Offline from './components/Offline.jsx';
import Details from './pages/Details.jsx';
import Cart from './pages/Cart.jsx';

function HomePage() {
  const [offlineStatus, setOfflineStatus] = React.useState(!navigator.onLine);
  const [mode] = React.useState('light');

  React.useEffect(() => {
    setOfflineStatus(!navigator.onLine);

    function handleStatus() {
      setOfflineStatus(!navigator.onLine);
    }

    window.addEventListener('online', handleStatus);
    window.addEventListener('offline', handleStatus);

    return () => {
      window.removeEventListener('online', handleStatus);
      window.removeEventListener('offline', handleStatus);
    };
  }, []);

  const newItems = [
    { id: 1, name: 'Cangkir Mauttie', price: 25, image: '/images/content/image-arrived-1.png' },
    { id: 2, name: 'Bankyu Minimay', price: 50, image: '/images/content/image-arrived-2.png' },
    { id: 3, name: 'Buku Sidu Edition', price: 75, image: '/images/content/image-arrived-3.png' },
    { id: 4, name: 'Watch Notes X', price: 80, image: '/images/content/image-arrived-4.png' },
    { id: 5, name: 'Racking Plants', price: 10, image: '/images/content/image-arrived-5.png' },
  ];

  return (
    <>
      {offlineStatus && <Offline />}
      <Header mode={mode} />
      <Hero />
      <Browse />
      <Arrifed items={newItems} />
      <Clients />
      <AsideMenu />
      <Footer />
    </>
  );
}

export default function App() {
  const [cart, setCart] = React.useState(() => {
    // Load initial cart from localStorage or empty array
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  React.useEffect(() => {
    // Save cart to localStorage whenever it changes
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  function handleAddToCart(item) {
    const currentIndex = cart.length;
    const newCart = [...cart, { id: currentIndex + 1, item }];
    setCart(newCart);
  }

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/details/:id" element={<Details handleAddToCart={handleAddToCart} cart={cart} />} />
      <Route path="/cart" element={<Cart cart={cart} />} />
    </Routes>
  );
}
