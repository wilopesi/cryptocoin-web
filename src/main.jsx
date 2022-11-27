import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter,Routes,Route} from 'react-router-dom'


import App from './App'
import './index.css'

import Home from "./pages/Home";
import Coin from "./pages/Coin";
import Search from "./pages/Search";
import News from "./pages/News";
import Bitcoin from "./pages/Bitcoin";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
          <Route element={<App/>}>
              <Route path="/" element={<Home/>} />
              <Route path="/:id" element={<Coin/>} />
              <Route path="news" element={<News/>}/>
              <Route path="search" element={<Search/>} />
              <Route path="bitcoin" element= {<Bitcoin/>} />
          </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)


