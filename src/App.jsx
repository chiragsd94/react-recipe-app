import React, { useMemo } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import About from "./pages/about";
import Categories from "./pages/Categories";
import Header from "./components/Header";
import Footer from "./components/Footer";
import useThemeStore from "./store/useThemeStore";
import Meals from "./pages/Meals";
import Meal from "./pages/Meal";
import SearchMeal from "./pages/SearchMeal";

const App = () => {
  const { day } = useThemeStore();

  return (
    <Router>
      <div
        className={`flex flex-col min-h-screen ${
          day ? "bg-black" : "bg-white"
        }`}
      >
        <header className="fixed top-0 left-0 w-full z-50">
          <Header />
        </header>

        <main className="flex-grow pt-[60px] pb-[60px]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/home/:idMeal" element={<Meal />} />
            <Route path="/search" element={<SearchMeal />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/categories/:strCategory" element={<Meals />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>

        <footer className="fixed bottom-0 left-0 w-full z-50">
          <Footer />
        </footer>
      </div>
    </Router>
  );
};

export default App;
