import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/site/footer'
import Navbar from './components/site/navbar'
import Home from './pages/home'
import About from './pages/about'
import Service from './pages/service'
// import Portfolio from './pages/portfolio'
import Contact from './pages/contact'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}>  </Route>
        <Route path="/about" element={<About />}>  </Route>
        <Route path="/services" element={<Service />}>  </Route>
        {/* <Route path="/portfolio" element={<Portfolio />}>  </Route> */}
        <Route path="/contact" element={<Contact />}>  </Route>
      </Routes>
      <Footer />
    </>
  )
}

export default App
