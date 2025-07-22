// Components
import HeroSection from './components/heroSection/HeroSection';
import Nav from './components/nav/Nav';


function App() {

  return (
    <>
    <div className='bg-background h-screen'>
      <div className='container mx-auto py-8 px-1'>
        {/* Navigation */}
        <Nav />
        {/* Hero Section */}
        <div className='mt-4 md:mt-8 lg:mt-15'>
          <HeroSection />
        </div>
      </div>
    </div>
    </>
  )
}

export default App
