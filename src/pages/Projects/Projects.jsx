
import ImageSlider from '../../components/ImageSlider/ImageSlider'; 
import frame1 from '/images/Frame 221.png';
import frame2 from '/images/Frame 222.png';
import frame3 from '/images/Frame 223.png';
import frame4 from '/images/Frame 224.png';
import frame5 from '/images/Frame 425.png';
import Arch from '/images/Arch.png';
import flow from '/images/WebFlow.png';
import s from './Projects.module.css';
import { useNavigate } from 'react-router-dom';

const images = [frame1, frame2, frame3, frame4]; 
const images_WIYO = [frame5, Arch, flow];

export default function Three(){
  const navigate = useNavigate();
  return (
    <div className={s.wrapper}>
      <h2>Projects</h2>
      <div className={s.container}>
        <div className={s.textBox}>
          <h3>🍪가장 솔직한 감정 SNS: 머랭🍪 (2024.01~2024.02)</h3>
        </div>
        <button 
          className={s.buttonModal} 
          onClick={() => { navigate(`/project/ME`);}}>
          자세히 보러가기
        </button>
        <ImageSlider images={images} /> 
      </div>
      
      <div className={s.container}>
        <div className={s.textBox}>
          <h3>👕What is your OOTD? WIYO🧦 (2023.11)</h3>
        </div>
        <button 
          className={s.buttonModal} 
          onClick={() => { navigate(`/project/WIYO`);}}>
          자세히 보러가기
        </button>
        <ImageSlider images={images_WIYO} /> 
      </div>
    </div>
  );
}