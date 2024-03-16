
import s from "./Projects.module.css"
import ImageSlider from '../../components/ImageSlider/ImageSlider'; 
import frame1 from '/images/Frame 221.png';
import frame2 from '/images/Frame 222.png';
import frame3 from '/images/Frame 223.png';
import frame4 from '/images/Frame 224.png';
import { useNavigate } from 'react-router-dom';

const images = [frame1, frame2, frame3, frame4]; 

export default function Three(){
  const navigate = useNavigate();
  return (
    <div className={s.wrapper}>
      <h2 className={s.title}>Projects</h2>
      <div className={s.container}>
        <div className={s.textBox}>
          <h3 className={s.projName}>🍪가장 솔직한 감정 SNS: 머랭🍪 (2024.01~2024.02)</h3>
        </div>
        <button 
          className={s.buttonModal} 
          onClick={() => { navigate(`/project/ME`);}}>
          자세히 보러가기
        </button>
        <ImageSlider images={images} /> 
      </div>
    </div>
  );
}