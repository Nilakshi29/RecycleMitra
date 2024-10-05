import  React, { useState } from 'react';
import './SchedulePickup.css'; // Make sure this path is correct

const SchedulePickup = () => {
  const [item, setItem] = useState('');
  const [quantity, setQuantity] = useState('');
  const [address, setAddress] = useState('');
  const [timeSlot, setTimeSlot] = useState('');

  const items = [
    'Newspapers',
    'Cardboards',
    'Soft Plastics',
    'Hard Plastics',
    'Iron',
    'Tyres',
    'Glass',
    'Brass',
    'Aluminium',
    'Cables',
    'Wires',
    'E-Waste'
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Pickup scheduled for ${quantity} ${item} at ${address} on ${timeSlot}`);
  };

  return (
    <div className="schedule-pickup-container">
      <h2>Schedule Pickup</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Select Item:
          <select value={item} onChange={(e) => setItem(e.target.value)} required>
            <option value="">--Select an Item--</option>
            {items.map((item, index) => (
              <option key={index} value={item}>{item}</option>
            ))}
          </select>
        </label>
        <label>
          Quantity:
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            required
          />
        </label>
        <label>
          Address:
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
            placeholder="Enter your address"
          />
        </label>
        <label>
          Time Slot:
          <input
            type="time"
            value={timeSlot}
            onChange={(e) => setTimeSlot(e.target.value)}
            required
          />
        </label>
        <button type="submit" className="btn btn-success">Schedule Pickup</button>
      </form>
    </div>
  );
};

export default SchedulePickup;
