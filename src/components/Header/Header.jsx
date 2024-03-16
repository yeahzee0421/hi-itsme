import s from "./Header.module.css";

export default function Header(){
    return(
        <div className="header-wrapper">
        <ul className={s.container}>
            <li className={s.menu}> Home </li>
            <li className={s.menu}> About me</li>
            <li className={s.menu}> Projects</li>
            <li className={s.menu}> Others</li>
            <li className={s.menu}> Contacts</li>
        </ul>
    </div>
    )
}