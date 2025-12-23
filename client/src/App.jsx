import react from 'react'
import MainRouter from './appRouter/MainRouter'
import Navbar from './common/Navbar'
import Footer from './common/Footer'

const App = () => {
  return (
    <div className='flex flex-col w-full justify-center items-center'>
      <Navbar />
      <div className='flex flex-col w-full pb-14'>
      <MainRouter />
      </div>
      <Footer />
    </div>
  )
}

export default App
