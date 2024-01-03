import './App.css';
import Create from './components/Create';
import Edit from './components/Edit';
import Read from './components/Read';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Create />} />
        <Route path="/read" element={<Read />} />
        <Route path="/edit/:id" element={<Edit />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
