import logo from './logo.svg';
import './App.css';
import PrimarySearchAppBar from "./Components/Header";
import HeroImage from './Components/HeroImage';
import Cards from './Components/Cards/Cards';
import Section from './Components/Section/Section';
import { useState } from 'react';
import Carousel from './Components/Section/Carousel';
import BasicGrid from './Components/Section/Grid'


function App() {
  return (
    <>
    <PrimarySearchAppBar/>
    <HeroImage />
    <Section />
    <Carousel />
    </>
  )
}

export default App;
