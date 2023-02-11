import "./app.scss"
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Watch from "./pages/watch/Watch";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/series" element={<Home type="series" />} />
      <Route path="/movies" element={<Home type="movies" />} />
      <Route path="/watch" element={<Watch />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  )
}

export default App