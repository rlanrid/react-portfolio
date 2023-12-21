import React, { useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomeView from './views/HomeView'
import { link } from './utils/link'
import { menubar } from './utils/menubar'
import { menu } from './utils/menu'
import { three } from './utils/threeEffect'
import { gsapEffect } from './utils/gsapEffect'
import { smooth } from './utils/smooth'

const App = () => {
  useEffect(() => {
    smooth();
    three();
    gsapEffect();
    link();
    menubar();
    menu();
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomeView />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
