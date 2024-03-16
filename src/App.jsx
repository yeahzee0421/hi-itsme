import './App.css'
import Main from './pages/Main/Main';
import ME from './pages/Details/ME/Detail';
import WIYO from './pages/Details/WIYO/Detail';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  function setScreenSize() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`); //"--vh"라는 속성으로 정의해준다.
  }

window.addEventListener('resize', () => setScreenSize());

  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/project/ME' element={<ME />} />
          <Route path='/project/WIYO' element={<WIYO />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
