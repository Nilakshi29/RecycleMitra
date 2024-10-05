import React, { useState } from 'react';
import './App.css';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min'; // Include Bootstrap JS for dropdown functionality
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom';
import RecyclingItems from './RecyclingItems'; // Import the RecyclingItems component
import SchedulePickup from './SchedulePickup'; // Import SchedulePickup component
import ProfileDropdown from './ProfileDropdown';
import ProductList from './ProductList'; // Product list page component
import Cart from './Cart'; // Cart component
import AuthDashboard from './AuthDashboard'; // Import AuthDashboard

// Header Component
const Header = ({ isLoggedIn, toggleLogin }) => {
  const navigate = useNavigate();

  const handleLogin = () => {
    toggleLogin();
    navigate('/'); // Navigate to AuthDashboard after login
  };

  return (
    <header className="header-container">
      {/* Logo and Tagline */}
      <div className="logo-tagline">
        <img
          src={require('./assets/recyclemitra logo (1).png')}
          alt="RecycleMitra Logo"
          className="logo"
        />
        <div className="header-content">
          <h1 className="heading">RecycleMitra</h1>
          <p className="tagline">Turn Trash into Treasure</p>
        </div>
      </div>

      {/* Sign-Up/Login or Profile */}
      <div className="profile-section">
        {isLoggedIn ? (
          <ProfileDropdown isLoggedIn={isLoggedIn} toggleLogin={handleLogin} />
        ) : (
          // Sign-Up/Login links when not logged in
          <div>
            <button className="btn btn-primary mx-2" onClick={handleLogin}>
              Sign Up
            </button>
            <button className="btn btn-secondary mx-2" onClick={handleLogin}>
              Log In
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

function App() {
  // State to handle login and profile
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [credits, setCredits] = useState(0); // Add credits state

  // Function to simulate login/logout
  const toggleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  // Handle adding items to cart
  const handleAddToCart = (product, quantity) => {
    const existingItem = cartItems.find((item) => item.id === product.id);
    if (existingItem) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity }]);
    }
  };

  const clearCart = () => {
    setCartItems([]); // Clears the cart by setting it to an empty array
  };

  return (
    <Router>
      <div className="App">
        <Header isLoggedIn={isLoggedIn} toggleLogin={toggleLogin} />

        {/* Full-size Image Below Header */}
        <div>
          <img
            src={require('./assets/banner.jpeg')} // Use your actual image filename
            alt="Banner"
            className="banner-image"
            style={{ width: '100%', height: '550px' }} // Set height to 550 pixels for a taller image
          />
        </div>

        {/* Main Content */}
        <main className="container text-center mt-5">
          <h2 id="choose">Why Choose Us?</h2>
          <div className="circle-container">
            <div className="circle green">
              <img src={require('./assets/circle1.jpeg')} alt="Door service" />
              <p>Convenience at your doorstep</p>
            </div>
            <div className="circle blue">
              <img src={require('./assets/circle2.jpeg')} alt="Earn Credits" />
              <p>Earn credits for recycling</p>
            </div>
            <div className="circle teal">
              <img src={require('./assets/circle3.jpeg')} alt="Greener Planet" />
              <p>Contribute to a greener planet</p>
            </div>
          </div>

          {/* Use Link to mimic button behavior */}
          <div className="button-container">
            <Link to="/recycling-items" style={{ textDecoration: 'none' }}>
              <button className="btn btn-purple">Recycling Price List</button>
            </Link>

            {/* Link for Shop DIY Products */}
            <Link to="/shop" style={{ textDecoration: 'none' }}>
              <button className="btn btn-purple">Shop DIY Products</button>
            </Link>
          </div>

          {/* Show Product List and Cart when on /shop */}
          <div className="main-content">
            <Routes>
              <Route
                path="/shop"
                element={
                  <>
                    <ProductList onAddToCart={handleAddToCart} />
                    <Cart cartItems={cartItems} clearCart={clearCart} credits={credits} />
                  </>
                }
              />
              <Route path="/recycling-items" element={<RecyclingItems />} />
              <Route path="/schedule-pickup" element={<SchedulePickup />} />
              <Route path="/" element={<AuthDashboard toggleLogin={toggleLogin} />} /> {/* Pass toggleLogin to AuthDashboard */}
            </Routes>
          </div>
        </main>

        {/* Footer */}
        <footer className="footer">
          <div className="container text-center">
            <h4>Contact Us</h4>
            <p>Follow us on social media for updates:</p>
            <div className="social-icons">
              <a
                href="https://www.facebook.com/YourPage"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon facebook"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="https://www.twitter.com/YourProfile"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon twitter"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="https://www.instagram.com/YourProfile"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon instagram"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/YourProfile"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon linkedin"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
