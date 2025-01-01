import Hero from './components/Hero'
import About from './components/About';
import Features from './components/Features';
import Navbar from './components/Navbar';
// import Footer from './components/Footer'

const App = () => {
  return (
    <main className='relaitve min-h-screen w-screen overflow-x-hidden'>
      <Navbar />
      <Hero />
      <About />
      <Features />
      {/* <Footer /> */}
    </main>
  )
}

export default App
