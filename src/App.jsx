
import './App.css'
import About from './components/About';
import Location from './components/location';
import Contact from './components/Contact/Contact';
import Navbar from './components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Project from './components/Project/project';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Product from './components/Product/Product';





function App() {

  const age = 17;

  // function handleClick() {
  //   console.log(" button is clicked!")
  // }


  return (
    <>

      <Navbar />

      {/* <div className='container'> */}


      {/* </div>
      <h1>I m in professional class.</h1>
      <p>I am Sampada Dhakal.</p>
      <button
        id='btn'

        onClick={handleClick}>

        click me</button>




      <div className='container1'>
        <h1>OMMMMM</h1>
      </div> */}



      {/* routing configuration */}
      <Routes>
        <Route path='/contact' element={<Contact />} />
        <Route path='/' element={<Home />} />
        <Route path='/project' element={<Project />} />
        <Route path='/about' element={<About />} />
        <Route path='/login' element={<Login />} />
        <Route path= '/product' element={<Product />}/>
      </Routes>






    </>
  )
}

export default App
