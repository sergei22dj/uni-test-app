import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// components
import Auth from "./components/Auth";
import Main from "./components/Main";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/main" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
