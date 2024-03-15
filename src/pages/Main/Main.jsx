import { useEffect, useState } from "react";
import s from "./Main.module.css";
import One from "../One/One";
import Header from "../../components/Header/Header";

function Main() {

    const wholePage = document.getElementsByClassName("slider");
    const totalPageNumber = wholePage[0]?.children?.length;
  
    const [currentInputs, setCurrentInputs] = useState({
      currentWindowHeight: window.innerHeight,
      currentPage: 0,
    });
  
    const setPageSize = () => {
      setCurrentInputs((prevState) => ({
        ...prevState,
        currentWindowHeight: window.innerHeight,
      }));
    };
    const setPage = () => {
      for (let i = 1; i < totalPageNumber; i++) {
        if (window.scrollY < currentInputs.currentWindowHeight * i) {
          setCurrentInputs({ ...currentInputs, currentPage: i });
          return;
        }
      }
    };
  
    useEffect(() => {
      window.addEventListener("scroll", setPage);
      window.addEventListener("resize", setPageSize);
      return () => {
        window.removeEventListener("scroll", setPage);
        window.removeEventListener("resize", setPageSize);
      };
    });
  
    window.addEventListener("wheel", (e) => {
      if (e.deltaY > 0) {
        let p = 1;
        while (p < totalPageNumber) {
          if (currentInputs.currentPage === p) {
            window.scrollTo({
              top: currentInputs.currentWindowHeight * p,
              behavior: "smooth",
            });
          }
          p++;
        }
      }
      if (e.deltaY < 0) {
        let p = 1;
        while (p < totalPageNumber) {
          if (currentInputs.currentPage === p) {
            window.scrollTo({
              top: currentInputs.currentWindowHeight * (p - 1),
              behavior: "smooth",
            });
          }
          p++;
        }
      }
    });
  
    return (
      <>
      <div className={s.header}><Header /></div>
      <div className={s.slider}>
        <div className={s.object}>
          <One />
        </div>
        <div className={s.object}>two</div>
      </div></>
    );
  }
  
export default Main;