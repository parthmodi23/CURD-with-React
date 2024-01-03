import './App.css';
import Create from './components/Create';
import Read from './components/Read';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Create />} />
        <Route path="/read" element={<Read />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
