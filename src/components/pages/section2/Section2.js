import React from 'react'
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import '../section1/Section1.css'

function Section2() {

    const [isModalOpen, setModalOpen] = useState(false);

    useEffect(() => {
        AOS.init({
          // aos 초기화 설정
          duration: 1000, // 애니메이션 지속 시간 (ms)
          once: false, // 한 번만 애니메이션 실행 여부
        });
      }, []);

      const openModal = () => {
        setModalOpen(true);
      };
    
      const closeModal = () => {
        setModalOpen(false);
      };

  return (
    <section className='width100 project2' id='project2'>
        {isModalOpen && (
        <div className='modal' onClick={closeModal}>
          <div className='modalContent' onClick={(e) => e.stopPropagation()}>
            <span className='closeModal' onClick={closeModal}>
              &times;
            </span>
            <div className="modalSection">
                <h1 className='ModalTitle'>Overview.</h1>
                <p>아름다운 고궁의 가을축제 또는 가을 (봄) 맞이 별빛 야행 축제를
                  소개하는 사이트를 기획, 디자인, 개발하였습니다.
                    <br></br>
                    <br></br>
                    잔잔하고 신비로운 야간행사의 분위기를 바탕으로 한
                    옛스럽고 고풍스러운 느낌의 사이트로
                    밝은 하늘색상으로 야경의 조명을 표현했으며
                    시원한 레이아웃을 위해 메인 페이지는 가로 100% 세로 100vh로 작업했으며 풀페이지 스크롤을
                    넣어서 스크롤이 부드럽게 내려가도록 했습니다.
                    <br></br>
                    <br></br>
                    메인 페이지 및 서브 페이지 모든 페이지를 개발 완료했습니다.
                </p>
            </div>
            <div className="modalSection">
                <h1 className='ModalTitle'>StyleGuide.</h1>             
                <div className='colorsWrap'>
                    <p className='ModalSubTitle'>COLORS</p>
                    <div className='flex'>
                        <div className='lightBlue color'>
                            #33bbc5
                        </div>
                        <div className='purple1 color'>
                            #352F44
                        </div>
                        <div className='purple2 color'>
                            #2A2438
                        </div>
                        <div className='white color'>
                            #fff
                        </div>
                        <div className='black color'>
                            #000
                        </div>
                    </div>
                </div>
                <div className='fontsSizeWrap'>
                    <p className='ModalSubTitle'>FONTS</p>
                    <div className='flex margin50'>
                        <div>
                            <p><b>웹(1920px) & 타블렛(1024px)</b></p>
                            <p>타이틀 : 48px /서브 타이틀 : 24px</p>
                            <p>본문 : 18px / 버튼 : 14px</p>
                        </div>
                        <div>
                            <p><b>모바일 (768px)</b></p>
                            <p>타이틀 : 40px / 서브 타이틀 : 18px</p>
                            <p>본문 : 16px / 버튼 : 14px</p>
                        </div>
                        <div>
                            <p><b>모바일 (460px)</b></p>
                            <p>타이틀 : 32px / 서브 타이틀 : 16px</p>
                            <p>본문 : 16px / 버튼 : 15px</p>
                        </div>
                    </div>
                </div>
                <div>
                    <p className='ModalSubTitle'>LOGO</p>
                    <div className='flex'>
                        <div className='logo1'></div>
                        <div className='logo2'></div>
                        <div className='logo3'></div>
                    </div>
                </div>
            </div>
            <div className="modalSection width100">
                <h1 className='ModalTitle'>RespoSive Web & Mobile.</h1>
                <div className='width100'>
                    <p className='ModalSubTitle'>MAIN PAGE</p>
                    <div className='width100 mainPageWrap'>
                        <div className='mainPage bamMainPage'></div>
                    </div>
                </div>
                <div className='width100'>
                    <p className='ModalSubTitle'>SUB PAGE</p>
                    <div className='flex width100 subPgWrap'>
                        <div className='MainMo bamMainMo1'></div>
                        <div className='MainMo bamMainMo2'></div>
                        <div className='MainMo bamMainMo4'></div>
                        <div className='MainMo bamMainMo3'></div>
                    </div>
                </div>
            </div>
          </div>
        </div>
        )}
        <div className='flex sectionWrap width1280px' data-aos="fade-up">
            <div className='text flex'>
                <p>팀 프로젝트</p>
                <h1 className='font40 purpleTitle'>밤을 걷다</h1>
                <ul className='infoWrap'>
                    <li>
                        <p>작업기간</p>
                        <p>2023.11.01 - 2013.11.01</p>
                    </li>
                    <li>
                        <p>TOOL</p>
                        <p>Figma, React, Jsx, Css, Javascript</p>
                    </li>
                    <li>
                        <p>PROCESS</p>
                        <p>Main(디자인, 개발) + Sub*6(디자인, 개발)</p>
                    </li>
                    <li>
                        <p>참여도</p>
                        <p>디자인 90% + 개발 40%</p>
                    </li>
                </ul>
                <div className='flex'>
                    <div className='btn infoBtn sec2Btn' onClick={openModal}>STYLE GUIDE</div>
                    <div className='btn infoBtn sec2Btn'><a href="https://yewonyewonie.github.io/gbk/" rel="noreferrer" target='_blank'>
                        WEBSITE
                        </a>
                        </div>
                </div>
            </div>
                <div className='kwangjuWrap'>
                    <div className='mockupImg bam'></div>
                </div>
        </div>
    </section>
  )
}

export default Section2
