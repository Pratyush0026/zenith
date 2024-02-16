import React from 'react';
import {
  Navbar,
  Home,
  About,
  Teest,
  Contact,
  Courses,
  Footer,
} from "./components/index";
import Faqs from './components/container/Faqs';

function App() {
  return (
    <div className="font-Poppins bg-Slate">
      <Navbar />
      
      <Home />
      <About />
      <Courses />
      <Teest />
      <Faqs/>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
