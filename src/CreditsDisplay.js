import React from 'react';

const CreditsDisplay = ({ credits }) => {
  return (
    <div className="credits-display">
      <h2>Your Credits: {credits}</h2>
      <p>Use credits to get discounts on your next DIY project purchase!</p>
    </div>
  );
};

export default CreditsDisplay;