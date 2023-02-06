import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { menuBool, pageSelected, scrollState, setMenuToggled, setScrollUp, setSelectedPage } from './navbarSlice'
import mediaQuery from '../../mediaQuery'



const Navbar = () => {

  const selectedPage = useSelector(pageSelected);
  const menuToggled = useSelector(menuBool);
  const scrollUp = useSelector(scrollState);
  const dispatch = useDispatch();
  const isAboveSmallScreen: boolean = mediaQuery("(min-width: 768px)");
  
  
  const navLink = (page: string) => {
    return (
      <a className='hover:text-yellow transition duration-300' 
        href={`#${page}`}
        onClick={() => dispatch(setSelectedPage(page))}>{page}
      </a>
    )
  }

  let oldScrollY = 0;
  const scrolllDirection = () => {
    if(window.scrollY > oldScrollY) {
      dispatch(setScrollUp(false));
    } else {
      dispatch(setScrollUp(true));
    }
    oldScrollY = window.scrollY;
  }

  useEffect(() => {
    window.addEventListener('scroll', scrolllDirection);
    return () => {
      window.removeEventListener('scroll', scrolllDirection);
    };
  },[]);



  return (
    <nav className={`z-40 w-full py-6 ${scrollUp ? 'fixed top-0' : ''}`}>
      <div className='flex items-center justify-between mx-auto w-5/6'>
        <h4 className='font-lora text-3xl font-bold'>Oasis</h4>
          {isAboveSmallScreen ? (
            <div className='flex justify-between gap-16 font-lato text-sm font-semibold text-white'>
              {navLink('Home')}
              {navLink('Products')}
              {navLink('Gallery')}
            </div>
          ) : (<button className='rounded-full bg-red p-2' onClick={() => dispatch(setMenuToggled(!menuToggled))}>
                <img src='src/assets/images/menu-icon.svg' alt='menu-icon' /></button>)}

        {!isAboveSmallScreen && menuToggled && (
          <div className='fixed right-0 bottom-0 h-full bg-blue w-[200px]'>
            <div className='flex justify-end p-12'>
              <button onClick={() => dispatch(setMenuToggled(!menuToggled))}>
                <img src='src/assets/images/close-icon.svg' alt='close-icon' />
              </button>
            </div>
            <div className='flex flex-col gap-10 ml-[25%] text-2xl text-deep-blue'>
              {navLink('Home')}
              {navLink('Products')}
              {navLink('Gallery')}
            </div>
          </div>
        )}          
      </div>
    </nav>
  )
}

export default Navbar