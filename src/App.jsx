import { Suspense } from 'react';
import { Routes,Route } from 'react-router-dom'
import './App.css'

//components
import Home from './pages/Home';
import About from './pages/About';
import Header from './components/nav/Header';

function App() {


  return (
    <Suspense fallback="Loading...." >
      <Header/>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    </Routes>
    </Suspense>
  )
}

export default App
