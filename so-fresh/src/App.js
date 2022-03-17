import "./App.css";
import { Navbar } from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
// import { Recipes } from "./components/Recipes";
import { Recipes } from "./components/Recipes";
import mockData from "./mockData.json";

function App() {
  const {
    data: { messages, recipes },
  } = mockData;
  return (
    <div className="App">
      <Router>
        <div className="sticky-navbar">
          <Navbar />
        </div>
        <Routes>
          <Route path="/" element={<Home messages={messages} />} />
          <Route path="/recipes" element={<Recipes recipes={recipes} />} />
          {/* <Route path="/login" element={<Login />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
