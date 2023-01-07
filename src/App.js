import { Routes, Route, BrowserRouter } from "react-router-dom"
import Home from "./components/home";
import './App.css';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <h1>hdfelo</h1>
        <Route path="/" element={<Home/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
