import React from 'react'

import './Header.css'

function Header() {
  // 누르면 섹션이동
   //클릭시 각 id 찾아 섹션 이동
   const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    window.scrollTo({
      top: section.offsetTop,
      behavior: 'smooth',
    });
  };
  return (
    <header>
      <section className='width1280px HeaderWrap flex'>
        <h1>JYW</h1>
        <ul className='flex navWrap'>
          <li onClick={() => scrollToSection('aboutme')}>ABOUT ME</li>
          <li onClick={() => scrollToSection('project1')}>PROJECT1</li>
          <li onClick={() => scrollToSection('project2')}>PROJECT2</li>
          <li onClick={() => scrollToSection('section3Wrap')}>CLONE CODING</li>
        </ul>
      </section>
    </header>
  )
}

export default Header;
