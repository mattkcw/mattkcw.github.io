import Navbar from '../components/navbar/Navbar';
import mediaQuery from '../mediaQuery';
import { useSelector, useDispatch } from 'react-redux'
import { pageSelected, setSelectedPage } from '../components/navbar/navbarSlice';
import ButtonNav from '../components/buttonnav/ButtonNav';
import Hero2 from '../components/hero/Hero2';
import LineGradient from '../components/LineGradient';
import SectionOne from '../components/section1/SectionOne';
import SectionTwo from '../components/section2/SectionTwo';
import Contact from '../components/contact/Contact';

function App() {
  const selectedPage = useSelector(pageSelected);
  const dispatch = useDispatch();
  const isAboveMediumScreen: boolean = mediaQuery("(min-width: 1060px");

  return (

    
    <div className="app bg-deep-blue">
      <Navbar />
      <Hero2 />
      <LineGradient />
      <div className='w-5/6 mx-auto md:h-full'>
        <SectionOne />
      </div>
      <LineGradient />
      <div className='w-5/6 mx-auto'>
        <SectionTwo />
      </div>
      <div className='w-5/6 mx-auto md:h-full'>
        <Contact />
      </div>
    </div>
  )
}

export default App
