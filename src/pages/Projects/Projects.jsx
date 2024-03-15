
import ImageSlider from '../../components/ImageSlider/ImageSlider'; 
import frame1 from '/images/Frame 221.png';
import frame2 from '/images/Frame 222.png';
import frame3 from '/images/Frame 223.png';
import frame4 from '/images/Frame 224.png';
import s from './Projects.module.css';

const images = [frame1, frame2, frame3, frame4]; 

export default function Three(){
  return (
    <div className={s.wrapper}>
      <h2>Projects</h2>
      <h3>🍪가장 솔직한 감정 SNS, 머랭🍪 (2024.01~2024.02)</h3>
      <div className={s.container}>
        <ImageSlider images={images} /> 
      </div>
    </div>
  );
}