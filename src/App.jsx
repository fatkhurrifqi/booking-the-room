// import { useState } from 'react';
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
import './App.css';
import Arrifed from './components/Arrifed.jsx';
import AsideMenu from './components/AsideMenu.jsx';
import Browse from './components/Browse.jsx';
import Clients from './components/Clients.jsx';
import Footer from './components/Footer.jsx';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Hero />
      <Browse />
      <Arrifed />
      <Clients />
      <AsideMenu />
      <Footer />
    </>
  );
}

export default App;
