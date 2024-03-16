
import ImageSlider from '../../components/ImageSlider/ImageSlider'; 
import frame5 from '/images/Frame 425.png';
import Arch from '/images/Arch.png';
import flow from '/images/WebFlow.png';
import s from './Projects.module.css';
import { useNavigate } from 'react-router-dom';

const images_WIYO = [frame5, Arch, flow];

export default function Three(){
  const navigate = useNavigate();
  return (
    <div className={s.wrapper}>
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