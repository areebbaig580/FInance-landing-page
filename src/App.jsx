import React from 'react'
import Nav from './components/hero/Nav'
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import HeroSection from './components/hero/HeroSection';
import { Database } from 'lucide-react';
import Section2 from './components/sections/Section2';
import Section3 from './components/sections/Section3';
import Footer from './components/Footer';
import Section4 from './components/sections/Section4';

const App = () => {
  const containerRef = useRef();

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.from('.logo', {
      y: -30,
      opacity: 0,
      duration: 0.4,
      delay: 0.3,
    })
    tl.from('.nav-2 div', {
      y: -10,
      opacity: 0,
      duration: 0.4,
      stagger: 0.3,

    })
    tl.from('.nav-3 div', {
      y: -10,
      opacity: 0,
      duration: 0.4,
      stagger: 0.3,
    },)
    tl.from('.hero-1', {
      y: -30,
      opacity: 0,
      duration: 0.7,
    },)
    tl.from('.hero-2', {
      y: -30,
      opacity: 0,
      duration: 0.7,
    },"<")
    tl.from('.hero-3', {
      y: -30,
      opacity: 0,
      duration: 0.7,
    },"<")
    tl.from('.hero-4', {
      y: -30,
      opacity: 0,
      duration: 0.7,
    },"<")
    tl.from('.hero-5', {
      y: -30,
      opacity: 0,
      duration: 0.7,
    },"<")
    tl.from('.hero-6', {
      y: -30,
      opacity: 0,
      duration: 0.5,
    })
    tl.from('.hero-img', {
      x: 50,
      opacity: 0,
      duration: 0.5,
    }, "-=1")

    // tl.pause()
  })
  return (
    <div className='min-h-screen w-full overflow-x-hidden'>
      <Nav />
      <HeroSection />
      <Section2/>
      <Section3/>
      <Section4/>
      <Footer/>
    </div>
  )
}

export default App

