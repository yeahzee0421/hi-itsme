import s from "./Detail.module.css"
import frame1 from '/images/Frame 221.png';
import frame2 from '/images/Frame 222.png';
import frame3 from '/images/Frame 223.png';
import frame4 from '/images/Frame 224.png';
import ImageSlider from "../../../components/ImageSlider/ImageSlider";
import cookie from "/images/003.png";
import calendar from "/images/004.png";
import { AiOutlineClose } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

export default function Detail(){
    const images = [frame1, frame2, frame3, frame4]; 
    const navigate = useNavigate();
    return(
        <>
        <AiOutlineClose style={{"color": "#51372B"}} onClick={() => { navigate(`/`);}}/>
        <div className={s.wrapper}>
            <img src={cookie} className={s.icons} />

            <h6>가장 솔직한 감정 SNS: 머랭</h6>
            <ImageSlider images={images} />
            <img src={calendar} className={s.icon2} />
            <h6>About</h6>
            <ul className={s.container}>
                <li className={s.text}>📅기간: 2024.01~ 2024.02</li>
                <li className={s.text}>👥Contributors: 총 5명( FE: 3명, BE: 2명 )</li>
                <li className={s.text}>
                    <FaGithub /><a className={s.shortcut} href="https://github.com/keepgoingLikelion"> Github</a>
                    <a className={s.shorttext} href="https://github.com/keepgoingLikelion" alt="click here">바로가기</a>
                    </li>
                <li className={s.text}> ⚒️Front Tech Stack: Typescript + Zustand + React Query</li>
                <li className={s.text}>✅역할: UI 디자인 & FE</li>  
                <li className={s.text}>🔥구현한 기능
                    <li className={s.about}>✓ JWT Token을 사용한 구글 OAuth 소셜 로그인 기능 구현</li>
                    <li className={s.about}>✓ zustand를 사용한 데이터 상태 관리</li>
                        <li className={s.detail}>• 토큰 전역 상태 관리</li>
                        <li className={s.detail}>• 감정별 테마 색상 전역 상태 관리</li>
                        <li className={s.detail}>• 날짜별 게시글 상태 관리</li>
                        <li className={s.detail}>• 닉네임 정보 관리</li>
                    <li className={s.about}>✓ Restful API를 사용한 게시글 CRUD 중 UPDATE, DELETE 기능 구현</li>
                    <li className={s.about}>✓ zustand와 react query를 사용한 캘린더 기능 구현
                    </li>
                    <li className={s.about}>✓ 유저가 반응을 남긴 게시글 카테고리 구현</li>
                
                </li>

            </ul>
        </div>
        </>
    )
    
    
}