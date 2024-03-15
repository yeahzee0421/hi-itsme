import s from "./Home.module.css";
import heart from "/images/heart.png";

export default function One() {
  return (
    <div className={s.wrapper}>
      <div className={s.textBox}>
        <h1><a>다채롭고</a> <a1>매력적인</a1></h1>
        
        <h1>웹서비스를 만들어 나가요.</h1>
      </div>
      <div className={s.infos}>
        
        <h1>YeJi Lee</h1>
      </div>
      <img className={s.heartIcon} src={heart} /> 
    </div>
  );
}