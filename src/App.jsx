

import './App.css'
import PriceOptions from './components/PriceOptions/PriceOptions'
import NavBar from './NavBar/NavBar'
// import DaisyNav from './components/DaisyNav/DaisyNav'

function App() {


  return (
    <>
      <NavBar></NavBar>
      {/* <DaisyNav></DaisyNav> */}
 
      <h1 className='text-7xl bg-red-500' >Vite + React</h1>
      
      <PriceOptions></PriceOptions>
      

    </>
  )
}

export default App
