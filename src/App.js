import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './components/HomePage';
import RecipesPage from './components/RecipesPage';
import MealPrepPage from './components/MealPrepPage';
import './App.css'; // Import the CSS file for styling

const App = () => {
  return (
    <Router>
      <nav className="navbar">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/recipes">Recipes</Link>
          </li>
          <li>
            <Link to="/mealprep">Meal Prep</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/recipes" element={<RecipesPage />} />
        <Route path="/mealprep" element={<MealPrepPage />} />
      </Routes>
    </Router>
  );
};

export default App;

