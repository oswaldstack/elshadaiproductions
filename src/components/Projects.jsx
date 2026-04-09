import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: "UNGA ANBU",
      type: "Music Video",
      videoId: "AFh7u-f-60U",
      link: "https://youtu.be/AFh7u-f-60U"
    },
    {
      title: "Kaividavillai",
      type: "Music Video",
      videoId: "qd1f-aLshkg",
      link: "https://youtu.be/qd1f-aLshkg"
    },
    {
      title: "Thavithin Kumaraane",
      type: "Worship Album",
      videoId: "fS7085suBII",
      link: "https://youtu.be/fS7085suBII"
    },
    {
      title: "VARDHILUDHURU",
      type: "Worship Album",
      videoId: "oNWmj0-UiSo",
      link: "https://youtu.be/oNWmj0-UiSo"
    }
  ];

  return (
    <section className="section projects" id="projects">
      <div className="container">
        <div className="section-header">
          <h2>Featured <span className="text-gradient-gold">Projects</span></h2>
          <p>Our latest works in music and video production</p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card glass-card">
              <div className="project-image-wrapper">
                <img 
                  src={`https://img.youtube.com/vi/${project.videoId}/maxresdefault.jpg`} 
                  alt={project.title} 
                  loading="lazy"
                />
                <div className="project-overlay">
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="play-btn">
                    ▶
                  </a>
                </div>
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <span className="project-type">{project.type}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
