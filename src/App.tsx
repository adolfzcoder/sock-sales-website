import './App.css'
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import AddSocks from './pages/AddSocks';
import Login from './pages/Login';
import SignUp from './pages/SignUp';

function App() {
  return (
   <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/add-socks" element={<AddSocks />} />
    <Route path="/login" element={<Login/>}/>
    <Route path="/sign-up" element={<SignUp/>}/>
   </Routes> 
  );
}

export default App;