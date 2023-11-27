import React from 'react'
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import './Section1.css'

function Section1() {
    const [isModalOpen, setModalOpen] = useState(false);

    useEffect(() => {
        // 창의 너비를 확인
        const windowWidth = window.innerWidth;
    
        // 창의 너비가 768보다 큰 경우에만 AOS 초기화
        if (windowWidth > 768) {
          AOS.init({
            duration: 1000,
            once: false,
          });
        }
    
      }, []); 

      const openModal = () => {
        setModalOpen(true);
        document.body.style= `overflow: hidden`;
      };
    
      const closeModal = () => {
        setModalOpen(false);
        document.body.style.overflow = 'auto';
      };

  return (
    <section className='width100 project1' id='project1'>       
        {isModalOpen && (
        <div className='modal' onClick={closeModal}>
          <div className='modalContent' onClick={(e) => e.stopPropagation()}>
            <span className='closeModal' onClick={closeModal}>
              &times;
            </span>
            <div className="modalSection">
            <h1 className='ModalTitle'>Overview.</h1>
                <p>광주 컨트리 클럽 사이트를 다시 디자인하고 제작하였습니다.
                    <br></br>
                    <br></br>
                    기존의 광주 컨트리 클럽 사이트의 가독성이 좋지 않았던 점을 토대로
                    가독성이 좋은 사이트를 만들고자 했습니다.
                    메인 사이트, 로그인 페이지, 클럽소개, 편의시설 페이지를 디자인하였으며
                    메인 페이지의 프론트엔드 개발 작업을 진행했습니다.
                    <br></br>
                    <br></br>
                    시원한 레이아웃을 위해 가로 100% 세로 100vh로 작업했으며 풀페이지 스크롤을
                    넣어서 스크롤이 부드럽게 내려가도록 했습니다.
                    <br></br>
                    <br></br>
                    깔끔한 느낌을 위해 포인트 컬러는 한 색상만 사용하였으며 자연적인 느낌을 주기 위해
                    초록색 계열을 사용하였습니다.
                </p>
            </div>
            <div className="modalSection">
                <h1 className='ModalTitle'>StyleGuide.</h1>             
                <div className='colorsWrap'>
                    <p className='ModalSubTitle'>COLORS</p>
                    <div className='flex'>
                    <div className='Green color'>
                        #95A835
                    </div>
                    <div className='white color'>
                        #fff
                    </div>
                    <div className='black2 color'>
                        #000 0.5
                    </div>
                    <div className='black color'>
                        #000
                    </div>
                    </div>
                </div>
                <div className='fontsSizeWrap'>
                    <p className='ModalSubTitle'>FONTS</p>
                    <div className='flex fontsSizeWrap'>
                        <div>
                            <p><b>웹(1920px)</b></p>
                            <p>타이틀 : 90px</p>
                            <p>서브 타이틀 : 50px /서브 타이틀 : 30px</p>
                            <p>본문 : 18px / 본문 : 16px</p>
                        </div>
                        <div>
                            <p><b>타블렛(1024px)</b></p>
                            <p>타이틀 : 60px / 서브 타이틀 : 44px</p>
                            <p>본문 : 18px / 본문 : 16px</p>
                        </div>
                        <div>
                            <p><b>모바일 (390px)</b></p>
                            <p>타이틀 : 40px /서브 타이틀 : 30px</p>
                            <p>본문 : 15px / 본문 : 13px</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modalSection width100">
                <h1 className='ModalTitle'>RespoSive Web & Mobile.</h1>
                <div className='width100'>
                    <p className='ModalSubTitle'>MAIN PAGE</p>
                    <div className='width100 mainPageWrap'>
                        <div className='mainPage golfMainPc'></div>
                    </div>
                </div>
                <div className='width100'>
                    <p className='ModalSubTitle'>SUB PAGE</p>
                    <div className='flex width100 subPgWrap'>
                        <div className='MainMo kwangjuMo1'></div>
                        <div className='MainMo kwangjuMo2'></div>
                        <div className='MainMo kwangjuMo3'></div>
                        <div className='MainMo kwangjuMo4'></div>
                    </div>
                </div>
            </div>
          </div>
        </div>
        )}
        <div className='flex sectionWrap width1280px' data-aos="fade-up">
            <div className='text flex left'>
                <p>개인작업</p>
                <h1 className='font40 greenTitle'>광주컨트리클럽</h1>
                <ul className='infoWrap'>
                    <li>
                        <p>작업기간</p>
                        <p>2023.11.01 - 2013.11.01</p>
                    </li>
                    <li>
                        <p>TOOL</p>
                        <p>Figma, Html, Css, Javascript</p>
                    </li>
                    <li>
                        <p>PROCESS</p>
                        <p>Main(디자인, 퍼블리싱) + Sub*3(디자인)</p>
                    </li>
                    <li>
                        <p>참여도</p>
                        <p>개인작업 100%</p>
                    </li>
                </ul>
                <div className='flex right'>
                    <div className='btn infoBtn sec1Btn' onClick={openModal}>STYLE GUIDE</div>
                    <div className='btn infoBtn sec1Btn'><a href="https://yewonyewonie.github.io/golf/" rel="noreferrer" target='_blank'>
                        WEBSITE
                        </a>
                        </div>
                </div>
            </div>
                <div className='kwangjuWrap'>
                    <div className='mockupImg kwangju'></div>
                </div>
        </div>
    </section>
  )
}

export default Section1
