import React, { useState } from 'react';
import './CSS/article.css'; // Make sure to adjust the path based on your project structure
import renew from './Asset/RENEW.jpg';
import sustain from './Asset/SUSTAIN.png';
import bio from './Asset/BIO.jpg';
import fashion from './Asset/FASHION.jpg';
import food from './Asset/FOOD.jpg';
import bf from './Asset/BF.jpg';


function Articles() {
  const [expandedCard, setExpandedCard] = useState(null);

  const toggleContent = (index) => {
    if (expandedCard === index) {
      setExpandedCard(null);
    } else {
      setExpandedCard(index);
    }
  };

  return (
    <div className="articles-container">
      {/* Article 1 */}
        <div className={`article-card${expandedCard === 0 ? ' expanded' : ''}`} onClick={() => toggleContent(0)}>
            <img src={renew} alt="Renewable Energy Concept" />
            <h2 className="article-title">The Power of Renewable Energy</h2>
            <p className="article-author">Author: Emily Green</p>
            <div className={`article-content${expandedCard === 0 ? ' expanded' : ''}`}>
                Renewable energy sources like solar, wind, and hydroelectric power have the potential to revolutionize our energy landscape. Learn how these sources work, their benefits for the environment, and the progress being made towards a cleaner energy future.
            </div>
        </div>
      
      {/* Article 2 */}
      <div className={`article-card${expandedCard === 1 ? ' expanded' : ''}`} onClick={() => toggleContent(1)}>
        <img src={sustain} alt="Sustainable" />
        <h2 className="article-title">Sustainable Living: Small Steps, Big Impact</h2>
        <p className="article-author">Author: David EcoLover</p>
        <div className={`article-content${expandedCard === 1 ? ' expanded' : ''}`}>
          Discover practical tips and lifestyle changes you can make to live more sustainably. From reducing waste to supporting local businesses, this article provides actionable advice for incorporating eco-friendly habits into your daily routine.
        </div>
      </div>

      {/* Article 3 */}
      <div className={`article-card${expandedCard === 2 ? ' expanded' : ''}`} onClick={() => toggleContent(2)}>
        <img src={bio} alt="bio"/>
        <h2 className="article-title">The Importance of Biodiversity</h2>
        <p className="article-author">Author: Maya NatureWatcher</p>
        <div className={`article-content${expandedCard === 2 ? ' expanded' : ''}`}>
          Biodiversity is essential for a healthy planet, but it's under threat. Explore the significance of biodiversity, the causes of its decline, and the role each of us plays in preserving the variety of life on Earth.
        </div>
      </div>

      {/* Article 4 */}
      <div className={`article-card${expandedCard === 3 ? ' expanded' : ''}`} onClick={() => toggleContent(3)}>
        <img src={fashion} alt="Article" />
        <h2 className="article-title">Eco-Fashion: Style Meets Sustainability</h2>
        <p className="article-author">Author: Lily GreenFashion</p>
        <div className={`article-content${expandedCard === 3 ? ' expanded' : ''}`}>
          Explore the world of eco-conscious fashion and how the industry is evolving to prioritize sustainability. From ethical manufacturing to innovative materials, learn how you can make fashion choices that align with your environmental values.
        </div>
      </div>

      {/* Article 5 */}
      <div className={`article-card${expandedCard === 4 ? ' expanded' : ''}`} onClick={() => toggleContent(4)}>
        <img src={food} alt="Article" />
        <h2 className="article-title">Food for Thought: The Environmental Impact of Our Diet</h2>
        <p className="article-author">Author: Alex GreenPlate</p>
        <div className={`article-content${expandedCard === 4 ? ' expanded' : ''}`}>
          Our food choices have a significant impact on the environment. This article delves into the environmental consequences of various diets, offering insights into how you can make more eco-friendly food decisions without compromising on taste or nutrition.
        </div>
      </div>

      {/* Article 6 */}
      <div className={`article-card${expandedCard === 5 ? ' expanded' : ''}`} onClick={() => toggleContent(5)}>
        <img src={bf} alt="Article" />
        <h2 className="article-title">Conservation Success Story: Saving the Endangered Blue Butterflies</h2>
        <p className="article-author">Author: Chris NatureGuardian</p>
        <div className={`article-content${expandedCard === 5 ? ' expanded' : ''}`}>
          Delve into the heartwarming story of how a dedicated team of conservationists worked to rescue a population of endangered blue butterflies from the brink of extinction. Learn about the challenges they faced and the strategies they used to protect this fragile species.
        </div>
      </div>
    </div>
  );
}

export default Articles;
