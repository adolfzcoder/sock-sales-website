import './App.css'
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import SignUp from './pages/SignUp';

function App() {
  return (
   <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/dashboard" element={<Dashboard />} />
    <Route path="/login" element={<Login/>}/>
    <Route path="/sign-up" element={<SignUp/>}/>
   </Routes> 
  );
}

export default App;