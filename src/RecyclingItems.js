// RecyclingItems.js
import React from 'react';
import './RecyclingItems.css'; // Create a CSS file for styling

const items = [
  {
    name: 'Newspapers',
    image: require('./assets/newspaper.jpeg'), // Replace with actual image path
    cost: '₹0.05',
    rate: 'per kg',
  },
  {
    name: 'Cardboards',
    image: require('./assets/cardboard.jpeg'),
    cost: '₹0.10',
    rate: 'per kg',
  },
  {
    name: 'Soft Plastics',
    image: require('./assets/softplastics.jpeg'),
    cost: '₹0.08',
    rate: 'per kg',
  },
  {
    name: 'Hard Plastics',
    image: require('./assets/hardplastics.jpeg'),
    cost: '₹0.12',
    rate: 'per kg',
  },
  {
    name: 'Iron',
    image: require('./assets/iron.jpeg'),
    cost: '₹0.15',
    rate: 'per kg',
  },
  {
    name: 'Tyres',
    image: require('./assets/tyres.jpeg'),
    cost: '₹1.00',
    rate: 'per tyre',
  },
  {
    name: 'Glass',
    image: require('./assets/glass.jpeg'),
    cost: '₹0.20',
    rate: 'per kg',
  },
  {
    name: 'Brass',
    image: require('./assets/brass.jpeg'),
    cost: '₹2.00',
    rate: 'per kg',
  },
  {
    name: 'Aluminium',
    image: require('./assets/aluminium.jpeg'),
    cost: '₹1.50',
    rate: 'per kg',
  },
  {
    name: 'Cables',
    image: require('./assets/cables.jpeg'),
    cost: '₹0.50',
    rate: 'per kg',
  },
  
  {
    name: 'E-Waste',
    image: require('./assets/e-waste.jpeg'),
    cost: '₹0.05',
    rate: 'per kg',
  },
];

const RecyclingItems = () => {
  return (
    <div className="recycling-items">
      <h1>Recycle Your Items</h1>
      <p>Transform your waste into wealth! Check out the items we recycle:</p>
      <div className="items-container">
        {items.map((item, index) => (
          <div className="item-card" key={index}>
            <img src={item.image} alt={item.name} className="item-image" />
            <h2>{item.name}</h2>
            <p>Cost: {item.cost}</p>
            <p>Rate: {item.rate}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecyclingItems;
