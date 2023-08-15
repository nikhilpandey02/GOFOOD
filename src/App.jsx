import React from 'react'
import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import Header from './component/Header'
import "./styles/App.scss"
import "./styles/header.scss"
import "./styles/home.scss"
import "./styles/footer.scss"
import "./styles/contact.scss"
import "./styles/services.scss"
import Home from './component/Home'
import Footer from './component/Footer'
import Contact from './component/Contact'
import Services from './component/Services'

const App = () => {
  return (
   <Router>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/services" element={<Services/>}/>
    </Routes>
    <Footer/>
   </Router>
  )
}

export default App
