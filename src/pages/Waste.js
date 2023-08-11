import React from 'react';
import './CSS/Waste.css';

function WasteCards() {
  return (
    <div className="card-container">
      <div className="card">
        <img src="waste1.jpg" alt="Waste Material 1" />
        <h2>Cardboard</h2>
        <p>Recycle cardboard to reduce waste and help the environment.</p>
        <div className="action-buttons">
          <button className="action-button recycle">Recycle</button>
          <button className="action-button reuse">Reuse</button>
        </div>
      </div>
      <div className="card">
        <img src="waste2.jpg" alt="Waste Material 2" />
        <h2>Plastic Bottles</h2>
        <p>Reuse plastic bottles for creative DIY projects and reduce plastic waste.</p>
        <div className="action-buttons">
          <button className="action-button recycle">Recycle</button>
          <button className="action-button reuse">Reuse</button>
        </div>
      </div>
      <div className="card">
        <img src="waste3.jpg" alt="Waste Material 3" />
        <h2>Electronic Waste</h2>
        <p>Recycle electronic waste responsibly to recover valuable materials.</p>
        <div className="action-buttons">
          <button className="action-button recycle">Recycle</button>
          <button className="action-button reuse">Reuse</button>
        </div>
      </div>
    </div>
  );
}

export default WasteCards;
