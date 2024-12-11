import './App.css'
import {Route , Routes} from 'react-router-dom'

import Add from './pages/Add'
import Home from './pages/Home'

function App() {


  return (
    <>
    <Routes>
       <Route path='/' element = {<Home/>}/>
       <Route path='/Add' element = {<Add/>}/>
     </Routes>
    </>
  )
}


export default App
