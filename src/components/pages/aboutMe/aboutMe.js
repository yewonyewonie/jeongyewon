import React from 'react'

import './aboutMe.css'

function aboutMe() {
  return (
    <section className='width100 aboutMe' id='aboutme'>
        <div className='aboutMeWrap width1280px  flex'>
          <h1 className='font40 aboutMeFont'>ABOUT ME</h1>
            <section className='flex'>
              <div className='yw'>
                <div className='ywImg margin50'></div>
                <li className='flex'>
                  <p className='introduce'>안녕하세요 3년 5개월차 디자이너에서 프론트엔드까지 자기계발을 하는 정예원입니다.</p>
                </li>
              </div>
              <div>
                <div className='height200 margin50'>
                  <p className='about'>| ABOUT</p>
                  <ul>
                    <li className='flex '>
                      <p>NAME</p>
                      <p>정예원</p>
                    </li>
                    <li className='flex'>
                      <p>BIRTH</p>
                      <p>1997.08.26</p>
                    </li>
                    <li className='flex'>
                      <p>H.P</p>
                      <p>010 6296 6320</p>
                    </li>
                    <li className='flex'>
                      <p>E-MAIL</p>
                      <p>gangneung08@naver.com</p>
                    </li>
                  </ul>
                </div>
                <div className='height200'>
                  <p className='experience'>| EXPERIENCE</p>
                  <ul>
                    <li className='flex'>
                      <p>22.07-22.12</p>
                      <p>에프엔에스리테일</p>
                    </li>
                    <li className='flex'>
                      <p>20.08-22.03</p>
                      <p>에스엔패션그룹</p>
                    </li>
                    <li className='flex'>
                      <p>19.03-20.05</p>
                      <p>제무(화장품)</p>
                    </li>
                  </ul>
                </div>
              </div>
              <div>
                <div className='height200 margin50'>
                  <p className='license'>| LICENSE</p>
                  <ul>
                    <li className='flex'>
                      <p>17.02.20</p>
                      <p>2종보통운전면허(오토)</p>
                    </li>
                    <li className='flex'>
                      <p>23.09.23</p>
                      <p>웹디자인 기능사 필기 합격</p>
                    </li>
                  </ul>
                </div>
                <div className='height200'>
                  <p className='education'>| EDUCATION</p>
                  <ul>
                    <li className='flex'>
                      <p>13.03-16.02</p>
                      <p>혜원여자고등학교</p>
                    </li>
                  </ul>
                  <ul>
                    <li className='flex'>
                      <p>17.03-19.02</p>
                      <p>서일대학교</p>
                    </li>
                  </ul>
                  <ul>
                    <li className='flex'>
                      <p>23.05-23.12</p>
                      <p>프론트엔트 개발자 양성과정</p>
                    </li>
                  </ul>
                </div>
              </div>
              <div>
                <div className='height200 margin50'>
                  <p className='skills'>| SKILLS</p>
                  <ul className='flex iconWrap'>
                    <li className='psd skillsIcon'></li>
                    <li className='ai skillsIcon'></li>
                    <li className='figma skillsIcon'></li>
                    <li className='html skillsIcon'></li>
                    <li className='css skillsIcon'></li>
                    <li className='js skillsIcon'></li>
                    <li className='react skillsIcon'></li>
                    <li className='vscode skillsIcon'></li>
                  </ul>
                </div>
                {/* <div className='height200'>
                  <p className='likes'>| LIKES</p>
                  <ul className='flex iconWrap'>
                    <li className='psd skillsIcon'></li>
                    <li className='ai skillsIcon'></li>
                    <li className='figma skillsIcon'></li>
                    <li className='html skillsIcon'></li>
                    <li className='css skillsIcon'></li>
                    <li className='js skillsIcon'></li>
                    <li className='react skillsIcon'></li>
                    <li className='vscode skillsIcon'></li>
                  </ul>
                </div> */}
              </div>
            </section>
        </div>
    </section>
  )
}

export default aboutMe
