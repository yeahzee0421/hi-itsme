import s from "./Others.module.css";

export default function Others(){
    return(
        <>
        <div className={s.wrapper}>
            <hh6>Others
                <br/> <hh2>click!</hh2>
            </hh6>
            <div className={s.container}>
                <div className={s.card}>
                    <h3><a className={s.gogo} href="https://github.com/yeahzee0421">Github</a></h3>
                </div>
                <div className={s.card}>
                    <h3><a className={s.gogo} href="https://portfolio0421.tistory.com">Tistory</a></h3>
                </div>
            </div>
        </div>
        <div className={s.wrapper}>
        <hh6>Contact</hh6>
        <div className={s.containerContact}>
            <div className={s.smallCard}>
                <hh3>📞010-3742-6785</hh3>
            </div>
            <div className={s.smallCard}>
                <hh3>📮ydw082504211@gmail.com</hh3>
            </div>
        </div>
    </div>
        </>
    )
}