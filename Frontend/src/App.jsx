import { Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Cart from './pages/Cart';
import LoginForm from "./components/LoginForm";
import SignupForm from "./components/SignupForm";
import Dashboard from "./components/Dashboard";
import { useState } from "react";
import PrivateRoute from "./components/PrivateRoute";

const App = () => {
  const [login, setLogin] = useState(false);
  return (<div>

  <div>
  <Navbar login = {login} setLogin={setLogin}></Navbar>
  </div>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/cart" element={<Cart/>}/>
    <Route path="/login" element={<LoginForm setLogin={setLogin}/>}></Route>
  <Route path="/signup" element={<SignupForm setLogin={setLogin}/>}></Route>
  <Route path="/dashboard" setLogin={setLogin} element={
    <PrivateRoute login ={login}>
      <Dashboard/>
    </PrivateRoute>}></Route>
  </Routes>
  </div>);
};

export default App;
