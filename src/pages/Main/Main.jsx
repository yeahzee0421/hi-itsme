import { useEffect, useState } from "react";
import s from "./Main.module.css";
import AboutMe from "../AboutMe/AboutMe";
import Header from "../../components/Header/Header";
import Project1 from "../Project1/Projects";
import Project2 from "../Project2/Projects";
import Others from "../Others/Others";
import Home from "../Home/Home";

function Main() {
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const objectHeight = window.innerHeight;
      const totalPages = 1;
      const newPage = Math.floor(scrollTop / objectHeight);
      if (currentPage !== newPage && newPage >= 0 && newPage < totalPages) {
        setCurrentPage(newPage);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [currentPage]);


  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const offsetTop = section.offsetTop;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className={s.wrap}>
      <div className={s.header}><Header scrollToSection={scrollToSection} /></div>
      <div className={s.slider} style={{ transform: `translateY(-${currentPage * 100}vh)` }}>
        <div id="home" className={s.object}><Home /></div>
        <div id="about" className={s.object}><AboutMe /></div>
        <div id="project1" className={s.object}><Project1 /></div>
        <div id="project2" className={s.object}><Project2 /></div>
        <div id="others" className={s.object}><Others /></div>
      </div>
    </div>
  );
}

export default Main;
