import React from 'react';
import Header from './components/header';
import Footer from './components/footer';
import PortfolioRoutes from './Routes/PortfolioRoutes';
import './App.css';

function App() {

  return (
    <div>
      <Header/>
      <PortfolioRoutes/>
      <Footer/>
    </div>
  );
}

export default App;
