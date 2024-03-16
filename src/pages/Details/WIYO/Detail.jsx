import s from "./Detail.module.css"
import frame5 from '/images/Frame 425.png';
import Arch from '/images/Arch.png';
import flow from '/images/WebFlow.png';
import ImageSlider from "../../../components/ImageSlider/ImageSlider";
import WIYO from "/images/WIYO.png";
import icon from "/images/uniIcon.png";
import { AiOutlineClose } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

export default function Detail(){
    const images_WIYO = [frame5, Arch, flow];
    const navigate = useNavigate();
    return(
        <>
        <AiOutlineClose style={{"color": "black"}} onClick={() => { navigate(`/`);}}/>
        <div className={s.wrapper}>
            <img src={WIYO} className={s.icon} />

            <h6>What is your OOTD? WIYO</h6>
            <ImageSlider images={images_WIYO} />
            <img src={icon} className={s.icon2} />
            <h6>About</h6>
            <ul className={s.container}>
                <li className={s.text}>📅기간: 2023.11.03~2023.11.15</li>
                <li className={s.text}>👥Contributors: 총 6명( FE: 3명, BE: 3명 )</li>
                <li className={s.text}>
                    <FaGithub /><a className={s.shortcut} href="https://github.com/likelion11-kangwon/OOTD"> Github</a>
                    <a className={s.shorttext} href="https://github.com/likelion11-kangwon/OOTD" alt="click here">바로가기</a>
                    </li>
                <li className={s.text}> ⚒️Front Tech Stack: React</li>
                <li className={s.text}>✅역할: UI 디자인 & FE</li>  
                <li className={s.text}>🔥구현한 기능
                    <li className={s.about}>✓ Resftul API를 사용한 게시판 구현</li>
                    <li className={s.about}>✓ 댓글, 검색 기능 구현</li>
                    <li className={s.about}>✓ 카테고리별 게시글 필터링 기능 구현</li>
                
                </li>

            </ul>
        </div>
        </>
    )
    
    
}