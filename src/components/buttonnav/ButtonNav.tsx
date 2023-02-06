import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { pageSelected, setSelectedPage } from '../navbar/navbarSlice'

const ButtonNav = () => {
  const selectedPage = useSelector(pageSelected);
  const dispatch = useDispatch();
  
  const navButton = (page: string) => {
    return (
      <a className={`${selectedPage ===  page ? 'buttonNav-selected' : 'bg-dark-grey'} w-3 h-3 rounded-full`}   
        href={`#${page}`}
        onClick={() => dispatch(setSelectedPage(page))}>
      </a>
    )
  }

  return (
    <div className='flex flex-col gap-6 fixed top-[60%] right-7'>
      {navButton('Home')}
      {navButton('Products')}
      {navButton('Gallery')}
    </div>
  )
}

export default ButtonNav