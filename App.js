import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Header from './components/Header';
import Listing from './components/Listing';
import Footer from './components/Footer';
import Filter from './components/Filter';
import Login from './components/Login';
import SignUp from './components/SignUp';
import './App.css';

function App() {
  // State to hold the filter values
  const [filters, setFilters] = useState({ minPrice: 0, maxPrice: 5000 });

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
    console.log("Applied Filters:", newFilters); // For debugging
  };

  return (
    <Router>
      <div className="App">
        <Header />
        <nav>
          <Link to="/">Home</Link> | <Link to="/login">Log In</Link> | <Link to="/signup">Sign Up</Link>
        </nav>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Filter onFilterChange={handleFilterChange} />
                <Listing filters={filters} />
              </>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;