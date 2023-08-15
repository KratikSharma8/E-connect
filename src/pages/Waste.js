import React, { useState } from 'react';
import './CSS/Waste.css';
import Card from './Asset/Cardboard.jpg';
import Plastic from './Asset/Plastic.jpg';
import Electronic from './Asset/Electronic.jpg';

function WasteCards() {
  const [selectedCategory, setSelectedCategory] = useState('Paper/Cardboard');

  return (
    <div>
      <div className="dropdown-container">
        <label htmlFor="category-dropdown">Categories:</label>
        <select id="category-dropdown" value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="Paper/Cardboard">Paper/Cardboard</option>
          <option value="Plastic">Plastic</option>
          <option value="Electronic">Electronic</option>
          <option value="Toys">Toys</option>
          <option value="Clothes">Clothes</option>
        </select>
      </div>

      <div className="card-container">
        {selectedCategory === 'Paper/Cardboard' && (
          <div className="card">
            <img src={Card} alt="Cardboard Waste" />
            <h2>Cardboard</h2>
            <p>Recycle cardboard to reduce waste and help the environment.</p>
            <div className="action-buttons">
              <button className="action-button recycle">Recycle</button>
              <button className="action-button reuse">Reuse</button>
            </div>
          </div>
        )}
        {selectedCategory === 'Plastic' && (
          <div className="card">
            <img src={Plastic} alt="Plastic Bottles Waste" />
            <h2>Plastic Bottles</h2>
            <p>Reuse plastic bottles for creative DIY projects and reduce plastic waste.</p>
            <div className="action-buttons">
              <button className="action-button recycle">Recycle</button>
              <button className="action-button reuse">Reuse</button>
            </div>
          </div>
        )}
        {selectedCategory === 'Electronic' && (
          <div className="card">
            <img src={Electronic} alt="Electronic Waste" />
            <h2>Electronic Waste</h2>
            <p>Recycle electronic waste responsibly to recover valuable materials.</p>
            <div className="action-buttons">
              <button className="action-button recycle">Recycle</button>
              <button className="action-button reuse">Reuse</button>
            </div>
          </div>
        )}
        {/* Add similar conditional rendering for other categories */}
      </div>
    </div>
  );
}

export default WasteCards;
