// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import Header from "./Component/Header/Header.jsx";
import Footer from "./Footer/Fotter.jsx";
import Main from "./Main/Main.jsx";
import { Route, Routes,Link } from "react-router-dom";
import Mac from "./Pages/Mac/Mac.jsx";
import Iphones from "./Pages/Iphones/Iphone.jsx";
import Ipad from "./Pages/Ipad/Ipad.jsx";
import Watch from "./Pages/Watch/Watch.jsx";
import Tv from "./Pages/Tv/Tv.jsx";
import Music from "./Pages/Music/Music.jsx";
import Support from "./Pages/Support/Support.jsx";
import Cart from "./Pages/Cart/Cart.jsx";
import Four04 from './Pages/Four04/Four04.jsx'
import SharedLayOut from "./Pages/SharedLayOut.jsx";
function App() {
  return (
    <>
      
      <Routes>
        <Route path="/" element={<SharedLayOut />}>
          <Route path="/" element={<Main />} />
          <Route path="Mac" element={<Mac />} />
          <Route path="iphone" element={<Iphones />} />
          <Route path="Ipad" element={<Ipad />} />
          <Route path="Watch" element={<Watch />} />
          <Route path="Tv" element={<Tv />} />
          <Route path="Music" element={<Music />} />
          <Route path="Support" element={<Support />} />
          <Route path="Cart" element={<Cart />} />
          <Route path="*" element={<Four04 />} />
          
        </Route>
      </Routes>
    </>
  );
}

export default App;
