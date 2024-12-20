import React from 'react';
import styled from 'styled-components';
import AwsSolutionArchitectAssoc from '../assets/aws-certified-solutions-architect-associate.png'; // Import your badge image
import AwsMLSpec from '../assets/aws-certified-machine-learning-speciality.png'; // Import your badge image
import AwsCloudPrac from '../assets/aws-certified-cloud-practitioner.png'; // Import your badge image

const CertificationsContainer = styled.div`
  padding: 50px 20px;
  background: linear-gradient(135deg, #1a0040, #320066);
  color: white;
  text-align: center;

  h2 {
    font-size: 2.5rem;
    margin-bottom: 20px;
  }

  .certification {
    margin: 20px auto;
    max-width: 600px;
    background: rgba(255, 255, 255, 0.1);
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    text-align: left;
    display: flex;
    align-items: center;
  }

  .certification img {
    width: 80px;
    height: auto;
    margin-right: 20px;
    border-radius: 8px;
  }

  .certification-info {
    font-size: 1rem;
  }

  .certification-info h3 {
    font-size: 1.2rem;
    color: #f5a623;
    margin: 0;
  }
`;

const Certifications = () => (
  <CertificationsContainer id="certifications">
    <h2>Certifications</h2>
    <div className="certification">
      <img src={AwsSolutionArchitectAssoc} alt="AWS Certified Solutions Architect – Associate Badge" />
      <div className="certification-info">
        <h3>AWS Certified Solutions Architect – Associate</h3>
        <p>Issued by Amazon Web Services</p>
      </div>
    </div>
    <div className="certification">
      <img src={AwsCloudPrac} alt="AWS Certified Developer – Associate Badge" />
      <div className="certification-info">
        <h3>AWS Certified Developer – Associate</h3>
        <p>Issued by Amazon Web Services</p>
      </div>
    </div>
    <div className="certification">
      <img src={AwsMLSpec} alt="AWS Certified Machine Learning – Specialty" />
      <div className="certification-info">
        <h3>AWS Certified Machine Learning – Specialty</h3>
        <p>Issued by Amazon Web Services</p>
      </div>
    </div>
  </CertificationsContainer>
);

export default Certifications;
