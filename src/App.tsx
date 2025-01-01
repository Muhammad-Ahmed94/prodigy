import Hero from './components/Hero'
import About from './components/About';
// import Footer from './components/Footer'

const App = () => {
  return (
    <main className='relaitve min-h-screen w-screen overflow-x-hidden'>
      <Hero />
      <About />
      {/* <Footer /> */}
    </main>
  )
}

export default App
