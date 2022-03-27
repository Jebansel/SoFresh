import "./App.css";
import { Navbar } from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
// import { Recipes } from "./components/Recipes";
import { Recipes } from "./components/Recipes";
import mockData from "./mockData.json";
import { useState } from "react";

function App() {
  const {
    data: { messages, recipes },
  } = mockData;
  const [cart, setCart] = useState([]);
  const handleCart = (operation, recipeTitle) => {
    recipes.find((purchase) => purchase.title === recipeTitle).quantitySelected += operation;
    setCart(cartArray());
  };
  const cartArray = () => {
    const updatedCart = [];
    recipes.forEach(
      (recipeItem) =>
        recipeItem.quantitySelected > 0 &&
        updatedCart.push({
          title: recipeItem.title,
          quantitySelected: recipeItem.quantitySelected,
        })
    );
    return updatedCart;
  };

  return (
    <div className="App">
      <Router>
        <div className="sticky-navbar">
          <Navbar cart={cart} />
        </div>
        <Routes>
          <Route path="/" element={<Home messages={messages} />} />
          <Route path="/recipes" element={<Recipes recipes={recipes} handleCart={handleCart} />} />
          {/* <Route path="/login" element={<Login />} /> */}
          {/* <Route path="/cart" element={<Cart />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
