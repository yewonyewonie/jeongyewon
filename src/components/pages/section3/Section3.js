import React from 'react'
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import './Section3.css'

export default function Section3() {

  useEffect(() => {
    // 창의 너비를 확인
    const windowWidth = window.innerWidth;

    // 창의 너비가 768보다 큰 경우에만 AOS 초기화
    if (windowWidth >= 768) {
      AOS.init({
        duration: 1000,
        once: false,
      });
    }
  }, []); 

  return (
    <div className='width100 section3Wrap' id='section3Wrap'>
      <div className='width1280px section3 flex'>
        <p>클론코딩입니다.</p>
        <h1 className='font40'>CLONE CODING</h1>
        <div className='flex Clone3Wrap'>
        <div className='CloneWrap flex' data-aos="fade-up" data-aos-delay="300">
              <div className='cloneImgWrap'>
                <div className='dominoText CloneText'>
                </div>
                <div className='domino'></div>
                <div className='hovering'>
                  <p className='CloneTitle'>도미노 피자</p>
                  <p className='CloneCont'>Responsive web / Main & Menu page</p>
                  <div className='btn cloneBtn'><a href="https://yewonyewonie.github.io/domino/" rel="noreferrer" target='_blank'>WEBSITE</a></div>
                </div>
            </div>
            </div>
            <div className='CloneWrap flex' data-aos="fade-up" data-aos-delay="100">
              <div className='cloneImgWrap dokdoImgWrap'>
                <div className='hovering'>
                  <p className='CloneTitle'>독도전시관</p>
                  <p className='CloneCont'>Responsive web / Main page</p>
                  <div className='btn cloneBtn'><a href="https://yewonyewonie.github.io/dokdo/" rel="noreferrer" target='_blank'>WEBSITE</a></div>
                </div>
                <div className='dokdo'></div>
              </div>
            </div>
            <div className='CloneWrap flex' data-aos="fade-up" data-aos-delay="200">
              <div className='cloneImgWrap'>
                <div className='kolongText CloneText'>
                </div>
                <div className='hovering'>
                  <p className='CloneTitle'>코오롱</p>
                  <p className='CloneCont'>Responsive web / Main page</p>
                  <div className='btn cloneBtn'><a href="https://yewonyewonie.github.io/kolong/"rel="noreferrer" target='_blank'>WEBSITE</a></div>
                </div>
                <div className='kolong'></div>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}
