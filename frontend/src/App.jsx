import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Fix the typo
import Register from './pages/Register';
import { ToastContainer} from 'react-toastify';
import Login from './pages/Login';
import Home from './pages/Home';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
        </Routes>
        <ToastContainer/>
      </BrowserRouter>
    </>
  );
}

export default App;
