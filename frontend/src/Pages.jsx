import React from 'react'
import AppNavbar from './Components/Navbar/Navbar'
import Banner from './Components/Banner/Banner'
import Filter from './Components/Filter/Filter'
import Services from './Components/Services/Services'
import Cars from './Components/Cars/Cars'
import Solution from './Components/Solution/Solution'
import Partner from './Components/Partner/Partner'
import Video from './Components/Video/Video'
import Counter from './Components/Counter/Counter'
import Article from './Components/Article/Article'
import Search from './Components/Search/Search'

const Pages = () => {
  return (
    <div>
      <Banner/>
      <Filter/>
      <Search/>
      <Services/>
      <Cars/>
      <Solution/>
      <Partner/>
      <Video/>
      <Counter/>
      <Article/>
    </div>
  )
}

export default Pages
