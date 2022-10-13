import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Portfolio from "./components/home/Index";
import Navigation from "./components/layout/Navbar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Portfolio />} />
          {/* <Route path="about" element={<About />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
