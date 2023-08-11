import React from 'react';
import './CSS/about.css'; // Make sure to adjust the path based on your project structure
import aboutus from './Asset/about_image.png';
import recyling from './Asset/recycling_icon.png';
import sustain from './Asset/sustainability_icon.jpg';
import reuse from './Asset/reuse_icon.jpg';

function AboutUs() {
  return (
    <div>
      <div className='about-section'>
        <div >
          <img src={aboutus} alt="About Us" />
        </div>
        <div className="text-section">
          <h2>About Us</h2>
          <p>Empowering a more eco-friendly future by repurposing waste materials is our mission at EcoConnect. Our dedication lies in turning waste into pathways of opportunity. Through nurturing a culture deeply rooted in recycling and reusing, we forge the road to a sustainable tomorrow. We wholeheartedly invite you to join us on this journey, as we strive to create a cleaner, improved world for generations to come.</p>
        </div>
      </div>

      <div className="what-we-do-section">
        <h2>What We Do</h2>
        <div className="what-we-do-content">
          <div className="what-we-do-item">
            <img src={recyling} alt="Recycling Icon" />
            <h3>Recycling</h3>
            <p>We actively recycle waste materials to minimize their environmental impact and promote resource conservation.</p>
          </div>
          <div className="what-we-do-item">
            <img src={reuse} alt="Reuse Icon" />
            <h3>Reuse</h3>
            <p>Through innovative approaches, we find new ways to repurpose waste materials, reducing waste and landfill usage.</p>
          </div>
          <div className="what-we-do-item">
            <img src={sustain} alt="Sustainability Icon" />
            <h3>Sustainability</h3>
            <p>Our commitment to sustainability drives us to create a cleaner and better future for generations to come.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
