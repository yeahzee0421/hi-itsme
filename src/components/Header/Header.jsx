import PropTypes from 'prop-types';
import s from "./Header.module.css";

export default function Header({ scrollToSection }){
    return(
        <div className="header-wrapper">
        <ul className={s.container}>
            <li className={s.menu} onClick={() => scrollToSection('home')}> Home </li>
            <li className={s.menu} onClick={() => scrollToSection('about')}> About me</li>
            <li className={s.menu} onClick={() => scrollToSection('project1')}> Projects</li>
            <li className={s.menu} onClick={() => scrollToSection('others')}> Others</li>
        </ul>
    </div>
    )
}

Header.propTypes = {
    scrollToSection: PropTypes.func.isRequired
  };