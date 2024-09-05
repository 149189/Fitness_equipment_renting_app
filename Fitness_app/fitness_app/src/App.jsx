import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import ItemsPage from './pages/ItemsPage';
import ImageUploadPage from './pages/ImageUploadPage';


function MyButton() {
  return (
    <button>
      I'm a button
    </button>
  );
}


function App() {
  return (
    <div>
    <BrowserRouter>
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/items" element={<ItemsPage />} />
        <Route path="/upload" element={<ImageUploadPage />} />
      </Routes>
    </Router>
    </BrowserRouter>
    </div>
  );
}

export default App;
