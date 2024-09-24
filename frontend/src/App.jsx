import React, { useEffect, useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AppRoutes from './AppRoutes';
import Loader from './Components/Loader/Loader';

const App = () => {

  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const loadingData = () => {
      setTimeout(() => {
        setIsLoading(false)
      },2000)
    }

    loadingData()
  }, [])

  return (
    <div className='overflow-x-hidden'>
      {
        isLoading ? <Loader/> : <AppRoutes />
      }
    </div>
  )
}

export default App