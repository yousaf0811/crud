import { Routes, Route, BrowserRouter } from "react-router-dom"
import Home from "./components/home";
import './App.css';
import Login from "./components/login";
import Signup from "./components/signup";
import StudentAccount from "./components/studentAccount";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/studentaccount" element={<StudentAccount/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
