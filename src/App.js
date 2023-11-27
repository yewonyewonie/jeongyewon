import './App.css';
// import React, { useEffect } from 'react';

import Header from './components/header/Header.js';
import Section1 from './components/pages/section1/Section1.js';
import Section2 from './components/pages/section2/Section2.js';
import Section3 from './components/pages/section3/Section3.js';
import Intro from './components/pages/intro/Intro.js';
import AboutMe from './components/pages/aboutMe/aboutMe.js';
import Footer from './components/footer/Footer.js';

function App() {

  // useEffect(() => {
  //   const handleScroll = (event) => {
  //     if (window.innerWidth > 1024) {
  //       const scrollAmount =
  //         event.deltaY > 0 ? window.innerHeight : -window.innerHeight;

  //       // 현재 스크롤 위치에서 100vh만큼 이동
  //       const newPosition = window.scrollY + scrollAmount;
  //       const targetPosition =
  //         Math.round(newPosition / window.innerHeight) * window.innerHeight;

  //       window.scrollTo({
  //         top: targetPosition,
  //         behavior: 'smooth',
  //       });

  //       event.preventDefault();
  //     }
  //   };

  //   // 스크롤 이벤트 리스너 등록
  //   const homePageElement = document.querySelector('.App');
  //   if (homePageElement) {
  //     homePageElement.addEventListener('wheel', handleScroll);
  //   }

  //   return () => {
  //     if (homePageElement) {
  //       homePageElement.removeEventListener('wheel', handleScroll);
  //     }
  //   };
  // }, []);
  return (
    <div className="App">
      <Header/>
      <Intro/>
      <AboutMe/>
      <Section1/>
      <Section2/>
      <Section3/>
      <Footer/>
    </div>
  );
}

export default App;
