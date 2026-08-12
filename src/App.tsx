import About from './components/About'
import './App.css'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {

  return (
    <>
    <div className="grid grid-cols-1 gap-2 grainy-sandpaper">
      
      <div>
      <About></About>
      <Portfolio></Portfolio>
      <Contact></Contact>
      <Footer></Footer>
      </div>
    </div>
    </>
  )
}

export default App
