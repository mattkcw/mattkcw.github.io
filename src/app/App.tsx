import Navbar from '../components/navbar/Navbar';
import mediaQuery from '../mediaQuery';
import { useSelector, useDispatch } from 'react-redux'
import { pageSelected, setSelectedPage } from '../components/navbar/navbarSlice';
import Hero2 from '../components/hero/Hero2';
import LineGradient from '../components/LineGradient';
import Cursor from '../components/cursor/Cursor';
import Projects from '../components/section1/Projects';
import Footer from '../components/Footer';

function App() {
  const selectedPage = useSelector(pageSelected);
  const dispatch = useDispatch();
  const isAboveMediumScreen: boolean = mediaQuery("(min-width: 1060px");

  return (

    
    <div className="app bg-deep-blue">
      <Cursor />
      <Navbar />
      <Hero2 />
      <LineGradient />
      <div className='w-11/12 mx-auto md:h-full'>
        <Projects />
      </div>
      <Footer />
    </div>
  )
}

export default App
