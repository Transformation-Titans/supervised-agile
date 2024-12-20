import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import ProfileImage from '../assets/c.jpg'; // Import your profile image

const ProfileContainer = styled.div`
  position: relative;
  width: 100%; /* Full width of the container */
  height: 500px; /* Adjust height for the landscape view */
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ParallaxWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: url(${ProfileImage}) center/cover no-repeat;
  background-position: center 74%; /* Adjust to position the face in focus */
  background-size: 100%; /* Ensure the image covers the entire area */
  filter: opacity(0.85); /* Add slight transparency for blending */
  will-change: transform;
  transform: translateZ(0);

  &:before {
    content: '';
    position: absolute;
    top: 50%; /* Start the gradient halfway down the container */
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, transparent, #4b0082); /* Fades to background color */
    z-index: 1;
  }
`;

const ProfilePic = () => {
  const parallaxRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const parallaxElement = parallaxRef.current;
      if (parallaxElement) {
        const yOffset = window.pageYOffset || document.documentElement.scrollTop;
        parallaxElement.style.transform = `translateY(${yOffset * 0.2}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <ProfileContainer>
      <ParallaxWrapper ref={parallaxRef} />
    </ProfileContainer>
  );
};

export default ProfilePic;
