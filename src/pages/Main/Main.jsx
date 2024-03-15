import { useEffect, useState } from "react";
import s from "./Main.module.css";
import AboutMe from "../AboutMe/AboutMe";
import Projects from "../Projects/Projects";
import Home from "../Home/Home";
import Header from "../../components/Header/Header";

function Main() {
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const objectHeight = window.innerHeight;
      const totalPages = 3;
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

  return (
    <>
      <div className={s.header}><Header /></div>
      <div className={s.slider} style={{ transform: `translateY(-${currentPage * 100}vh)` }}>
        <div className={s.object}>
          <Home />
        </div>
        <div className={s.object}>
          <AboutMe />
        </div>
        <div className={s.object}>
          <Projects />
        </div>
      </div>
    </>
  );
}

export default Main;
