import React from "react";
import "./mycv.css"; // Add custom styles

const MyCV = () => {
  return (
   <div id="cv">
    <div className="cv-container">
      {/* Name and Contact Section */}
      <header className="cv-header">
        <h1>Jabreal Johnson</h1>
        <p>
          <a href="https://jabrealjohnson.com" target="_blank" rel="noopener noreferrer">Website</a> | 
          <a href="https://github.com/your-github" target="_blank" rel="noopener noreferrer"> GitHub</a> | 
          (917) 981-7716
        </p>
      </header>

      {/* Summary Section */}
      <section className="cv-summary">
        <h2>Summary</h2>
        <p>
          Dynamic Cloud DevOps Engineer with over 19 years of experience in designing and maintaining scalable cloud infrastructure. Skilled in automation, CI/CD, and Infrastructure as Code (IaC) principles, with a proven track record of enhancing system efficiency and reliability. Adept at collaborating with international teams to maintain high levels of platform performance and compliance with regulatory standards. Committed to operational excellence and continuous improvement within high-paced environments.
        </p>
      </section>

      {/* Skills Section */}
      <section className="cv-skills">
        <h2>Skills</h2>
        <ul>
          <li>
            <strong>Cloud Infrastructure:</strong> Proficient in designing and implementing scalable infrastructure using AWS and GCP, with strong adherence to Infrastructure as Code (IaC) practices using Terraform.
          </li>
          <li>
            <strong>Automation & CI/CD:</strong> Experienced in driving automation initiatives and implementing deployment pipelines using Jenkins, Git, and Argo CD to support continuous delivery.
          </li>
          <li>
            <strong>Containerization & Orchestration:</strong> Skilled in using Docker and Kubernetes for containerization and orchestration of applications.
          </li>
          <li>
            <strong>Configuration Management:</strong> Competent in using Ansible for configuration management and deployment automation.
          </li>
          <li>
            <strong>Monitoring & Logging:</strong> Proficient with ELK stack, Prometheus, and Grafana for monitoring and logging, ensuring high system performance and rapid incident response.
          </li>
          <li>
            <strong>Technical Support & Troubleshooting:</strong> Extensive experience in resolving infrastructure and application performance issues and participating in incident management and on-call rotations.
          </li>
        </ul>
      </section>

      {/* Experience Section */}
      <section className="cv-experience">
        <h2>Professional Experience</h2>
        <div className="experience-item">
          <h3>Product and Engineering Coach</h3>
          <p>Wells Fargo | 2018–Present</p>
          <ul>
            <li>Spearhead automation initiatives to streamline repetitive tasks, resulting in a 30% increase in operational efficiency.</li>
            <li>Design and maintain scalable cloud infrastructure, leveraging AWS services and Terraform for robust deployment.</li>
            <li>Collaborate with engineering teams to ensure smooth deployment of production services, enhancing system reliability.</li>
            <li>Implement CI/CD pipelines using Jenkins and Argo CD, increasing deployment frequency and reducing rollback incidents by 15%.</li>
            <li>Mentor junior engineers and promote best practices in cloud management and infrastructure design.</li>
          </ul>
        </div>
        {/* Add other experience items similarly */}
      </section>

      {/* Freelance Section */}
      <section className="cv-freelance">
        <h2>Freelance Consulting</h2>
        <p>Clients: Treatment.com, Cigna, Huntington National Bank (HNB), ETS Education Systems, Pinterest, Twitter, Hudson Insurance Companies, Cox Communications, Target Corporation, Dell</p>
      </section>

      {/* Education Section */}
      <section className="cv-education">
        <h2>Education</h2>
        <p>
          <strong>GEORGIA STATE UNIVERSITY, Atlanta, GA</strong><br />
          Bachelor's in Computer Science | BA in English – Logic, Rhetoric, and Composition
        </p>
      </section>

    </div>
    </div>
  );
};

export default MyCV;
