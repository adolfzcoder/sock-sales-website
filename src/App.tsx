import './App.css'
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import AddSock from './pages/AddSock';
import Login from './pages/Login';
import SignUp from './pages/SignUp';

function App() {
  return (
   <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/add-sock" element={<AddSock />} />
    <Route path="/login" element={<Login/>}/>
    <Route path="/sign-up" element={<SignUp/>}/>
   </Routes> 
  );
}

export default App;