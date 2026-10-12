import Home from "./pages/Home";
import './App.css'
import Footer from './components/Footer'
import Contact from "./pages/Contact"
import Blog from "./pages/Blog"
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {

  return (
    <>
    
      <BrowserRouter>
      <div className="grid grid-cols-1 gap-2">
      <nav className="bentham-regular ml-auto mr-auto">
        <Link  className="text-4xl relative after:bg-[#261732] after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer" to="/">home</Link> | {""}
        <Link  className="text-4xl relative after:bg-[#261732] after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer" to="/blog">blog</Link> |{" "}
        <Link  className="text-4xl relative after:bg-[#261732] after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer" to="/contact">contact</Link> |{" "}
      </nav>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/contact" element={<Contact/>} />
      </Routes>
      
    </div>
    </BrowserRouter>
    <Footer></Footer>
    </>
  )
}

export default App
