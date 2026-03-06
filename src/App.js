import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products"; // θα το φτιάξουμε μετά
import Inventory from "./pages/Inventory"; // θα το φτιάξουμε μετά

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/products" element={<Products />} />
        <Route path="/inventory" element={<Inventory />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;