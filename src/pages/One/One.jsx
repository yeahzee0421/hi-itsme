import s from "./One.module.css";

export default function One() {
  return (
    <div className={s.wrapper}>
      <div className={s.textBox}>
        <h1><a>다채롭고</a> <a1>매력적인</a1></h1>
        <h1>웹서비스를 꿈꾸다.</h1>
      </div>
      <div className={s.infos}>
        <h1>YeJi Lee</h1>
      </div>
    </div>
  );
}