import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home/home';
import About from "./pages/about/about"
import Login from "./pages/login/login"
import Input from './pages/dashboard/Input';

function App() {
  return (
    <BrowserRouter>
        {/* <div className="App"> */}
          <Routes>
            <Route exct path='/' element={<Home/>} />
            {/* <Route path="Latihan" element={<Latihan/>} /> */}
            <Route path="Login" element={<Login/>} />
            <Route path="About" element={<About/>} />
            <Route exct path="login/dashboard" element={<Input/>} />
            

          </Routes>
    {/* </div> */}

    </BrowserRouter>
  )
}

export default App;
