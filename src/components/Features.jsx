import React from 'react';

const Features = () => {
  return (
    <section className="features">
      <h2>Key Features</h2>
      <div className="feature-cards">
        <div className="card">
          <h3>For Students</h3>
          <ul>
            <li>Job Listings</li>
            <li>Resume Builder</li>
            <li>Mock Interviews</li>
          </ul>
        </div>
        <div className="card">
          <h3>For Recruiters</h3>
          <ul>
            <li>Post Jobs</li>
            <li>Schedule Drives</li>
            <li>Access Profiles</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Features;