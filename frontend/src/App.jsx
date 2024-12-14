import './App.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {BrowserRouter as Router} from 'react-router-dom'
import Navbar from './components/Navbar'
import Bmicalc from './components/Bmicalc';
import Contact from './components/Contact';
import Hero from './components/Hero';
import Workout from './components/Workout';
import Gallery from './components/Gallery';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
function App() {
  return (
    <>
     <Router>
      <Navbar/>
      <Hero/>
      <Workout/>
      <Gallery/>
      <Pricing/>
      <Contact/>
      <Bmicalc/>
      <Footer/>
      <ToastContainer theme='dark' position='bottom-right'/>
     </Router>
    </>
  )
}

export default App
