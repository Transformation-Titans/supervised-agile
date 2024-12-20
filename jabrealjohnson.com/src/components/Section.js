// src/components/Section.js
import React from 'react';
import styled from 'styled-components';

const SectionWrapper = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.bgColor || 'white'};
  color: white;
  font-size: 2rem;
  font-weight: bold;
`;

const Section = ({ id, bgColor, children }) => (
  <SectionWrapper id={id} bgColor={bgColor}>
    {children}
  </SectionWrapper>
);

export default Section;
