import s from "./Home.module.css";
// import heart from "./images/heart.png";

export default function One() {
  return (
    <div className={s.wrapper}>
      <img className={s.heartIcon} src="./images/heart.png" /> 
      <div className={s.textBox}>
        <h1><a1>웹</a1>이라는 <a>도화지에</a></h1>
        <h1>꿈을 그려나가는</h1>
      </div>
      <div className={s.infos}>
        {/* <a className={s.hello}>hello, I'm</a> */}
        <h1>YeJi Lee</h1>
      </div>
      
    </div>
  );
}