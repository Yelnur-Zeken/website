import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Programs from './components/Programs';
import Advantages from './components/Advantages';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 font-inter">
      <Header />
      <Hero />
      <About />
      <Programs />
      <Advantages />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;