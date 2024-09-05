import './App.css'

import ItemsPage from './pages/ItemsPage';
import ImageUploadPage from './pages/ImageUploadPage';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Login from './pages/Login';
function App() {

  return (
    <div  className='h-screen flex flex-col w-screen min-h-screen max-w-maxContent overflow-hidden'>
     
      <Navbar/>
      <Routes>
      <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login />} />
        <Route path="/items" element={<ItemsPage />} />
        <Route path="/upload" element={<ImageUploadPage />} />
      </Routes>
     
    </div>
  )
}

export default App
