import React from 'react'
import { ScrollTrigger,SplitText } from 'gsap/all'
import gsap from 'gsap'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import Cocktail from './components/Cocktail'
import About from './components/About'
import Art from './components/Art'
import Menu from './components/Menu'
import Contact from './components/Contact'
gsap.registerPlugin(ScrollTrigger,SplitText)

function App() {
  return (
   <main className='mx-auto'>
    <NavBar/>
    <Hero/>
    <Cocktail/>
    <About/>
    <Art/>
    <Menu/>
    <Contact/>
   </main>
  )
}

export default App
