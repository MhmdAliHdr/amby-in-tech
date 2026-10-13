import Home from "./pages/Home";
import './App.css'
import Footer from './components/Footer'
import Contact from "./pages/Contact"
import Blog from "./pages/Blog"
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';

function App() {

  return (
    <>
    
      <BrowserRouter>
      <div className="grid grid-cols-1 gap-2">
      <nav className="grid md:grid-cols-5 bentham-regular ml-auto mr-auto mt-10">
        <NavLink  className={({isActive, isPending}) => isPending ? "text-5xl text-center text-center rounded-full bg-[#D6D0C5]" : isActive ? "pt-3 pb-3 px-10 text-5xl text-[#D6D0C5] text-center text-center rounded-full border-3 border-[#D6D0C5]" : "text-5xl pt-4 pb-3 px-10 text-center rounded-full bg-[#D6D0C5]"} to="/">home</NavLink> | {" "}
        <NavLink  className={({isActive, isPending}) => isPending ? "text-5xl text-center text-center rounded-full bg-[#D6D0C5]" : isActive ? "pt-3 pb-3 px-10 text-5xl text-[#D6D0C5] text-center text-center rounded-full border-3 border-[#D6D0C5]" : "text-5xl pt-4 pb-3 px-10 text-center rounded-full bg-[#D6D0C5]"} to="/blog">blog</NavLink> | {" "}
        <NavLink  className={({isActive, isPending}) => isPending ? "text-5xl text-center text-center rounded-full bg-[#D6D0C5]" : isActive ? "pt-3 pb-3 px-10 text-5xl text-[#D6D0C5] text-center text-center rounded-full border-3 border-[#D6D0C5]" : "text-5xl pt-4 pb-3 px-10 text-center rounded-full bg-[#D6D0C5]"} to="/contact">contact</NavLink>
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
