import React from 'react';
import styled from 'styled-components';
import ProfilePic from './ProfilePic'; // Import the ProfilePic component

const AboutContainer = styled.div`
  padding: 50px 20px;
  /* background: linear-gradient(135deg, #9999CC, #8a2be2);*/
  background: linear-gradient(135deg, #9999CC, #8a2be2);
  text-align: center;
  
  font-size: 1.2rem;
  max-width: 800px;
  margin: 0 auto;
    
  @media (max-width: 768px) {
      margin-top: 80px;
      padding-top: 20px;
  }
    
  h2 {
    font-size: 2.5rem;
    margin-bottom: 20px;
  }

  p {
    font-size: 1.2rem;
    max-width: 800px;
    margin: 0 auto 50px auto;
  }
`;

const About = () => (
  <AboutContainer id="about">
    <h2>About</h2>
    <p>
      I’m a <strong>Product and Engineering leader</strong> with over 12 years of experience in AI/ML at large and small firms. I specialize in driving cross-functional teams towards value, delivering impactful solutions, and bridging the gap between engineering and business to create innovative products for the cloud. Here’s a glimpse of my journey so far:
    </p>
    <ProfilePic /> 
  </AboutContainer>
);

export default About;
