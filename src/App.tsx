import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/site/footer'
import Navbar from './components/site/navbar'
import Home from './pages/home'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}>  </Route>
        {/* <Route path="/about" element={ }>  </Route>
        <Route path="/services" element={ }>  </Route>
        <Route path="/portfolio" element={ }>  </Route>
        <Route path="/contact" element={ }>  </Route> */}
      </Routes>
      <Footer />
    </>
  )
}

export default App
