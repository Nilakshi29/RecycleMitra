import React from 'react';
import './Homepage.css'; 

const HomePage = () => {
    return (
        <div className="home-container">
            <header className="header">
                <h1>Welcome to RecycleMitra</h1>
                <p>Promoting recycling and sustainability for a greener planet.</p>
            </header>

            <section className="benefits">
                <h2>Why Choose Us?</h2>
                <ul>
                    <li>Convenience at your doorstep</li>
                    <li>Earn credits for recycling</li>
                    <li>Contribute to a greener planet</li>
                </ul>
            </section>

            <div className="call-to-action">
                <button className="cta-button">Schedule Pickup</button>
                <button className="cta-button">MarketPlace</button>
                <div className="quick-access">
                    <a href="/signup">Sign Up</a>
                    <a href="/login">Log In</a>
                </div>
            </div>

            <nav className="navigation">
                <ul>
                    <li><a href="/dashboard">User Dashboard</a></li>
                    <li><a href="/marketplace">Marketplace</a></li>
                </ul>
            </nav>

            <section className="featured">
                <h2>What Our Users Say</h2>
                <p>"Recycling Mitra has made it so easy to recycle!" - Happy User</p>
                <p>Total Materials Recycled: 10,000 kg</p>
                <p>Total Users Served: 5,000</p>
            </section>
        </div>
    );
};

export default HomePage;