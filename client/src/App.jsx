import "./app.scss"
import { Routes, Route, Link, Navigate } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Watch from "./pages/watch/Watch";

const App = () => {
  const user = true;
  return (
    <Routes>
      <Route path="/login" element={!user ? <Login /> : <Navigate replace to={"/"} />} />
      <Route path="/register" element={!user ? <Register /> : <Navigate replace to={"/"} />} />
      <Route path="/" element={user ? <Home/> : <Register/>} />
      <Route path="/series" element={user ? <Home type="series" /> : <Register/>} />
      <Route path="/movies" element={user ? <Home type="movies" /> : <Register/>} />
      <Route path="/watch" element={user ? <Watch /> : <Register/>} />
    </Routes>
  )
}

export default App