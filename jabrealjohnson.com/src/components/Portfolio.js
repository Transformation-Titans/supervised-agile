// src/components/Portfolio.js
import React from 'react';
import styled from 'styled-components';

const PortfolioContainer = styled.div`
  padding: 50px 20px;
  background: linear-gradient(135deg, #320066, #4b0082);
  color: white;
  text-align: center;

  h2 {
    font-size: 2.5rem;
    margin-bottom: 20px;
  }

  .portfolio-item {
    margin: 20px auto;
    max-width: 600px;
    background: rgba(255, 255, 255, 0.1);
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  .portfolio-item h3 {
    font-size: 1.5rem;
    color: #f5a623;
  }

  .portfolio-item p {
    font-size: 1rem;
    line-height: 1.6;
  }
`;

const Portfolio = () => (
  <div id="portfolio">
    <PortfolioContainer>
      <h2>My Portfolio</h2>
      <div className="portfolio-item">
        <h3>AI-Powered Disease Detection</h3>
        <h4>(Merlin)</h4>
        <p>
          As a shareholder and founding contributor to <strong><a id="trmt" href="https://treatment.com" target="_blank">Treatment.com</a></strong>, I collaborated with other AI/ML engineers to build supervised learning models that accurately detect and predict patient disease. These efforts integrated cutting-edge AI and healthcare data to assist clinicians in early detection and expedited diagnosis, creating impactful solutions for the healthcare industry.
        </p>
      </div>
      <div className="portfolio-item">
        <h3>Modern Engineering and Health Insurance</h3>
        <p>
	I had an awesome opportunity to consult with Cigna Health and build awesome engineering teams that were able to increase their modern engineering thru Dev/Sec and MLOps industry practices to build a world class LLM for health insurance to improve the patient experience. I coached those teams towards building scalable, cloud native solutions with AWS.
        </p>
      </div>
    </PortfolioContainer>
  </div>
);

export default Portfolio;
