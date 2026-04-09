import React from 'react';
import './Team.css';

const Team = () => {
  const team = [
    {
      name: "John Praison",
      role: "Music Director",
      image: "/images/team/john praison.jpeg"
    },
    {
      name: "Abhishek",
      role: "Music Producer",
      image: "/images/team/Abhishek DuraiRaj.jpeg"
    },
    {
      name: "Arathana",
      role: "Keyboard Programmer",
      image: "/images/team/Aarathana Magdalene.jpeg"
    },
    {
      name: "Manmohan J",
      role: "Sound Engineer",
      image: "/images/team/Manmohan J.jpeg"
    },
    {
      name: "John Allson",
      role: "Technology Advisor",
      image: "/images/team/john allson.jpeg",
      link: "https://www.linkedin.com/in/johnallson/"
    }
  ];

  return (
    <section className="section team" id="team">
      <div className="container">
        <div className="section-header">
          <span className="subtitle">Our Team</span>
          <h2>Meet the <span className="text-gradient-gold">Creatives</span></h2>
          <p>Passionate professionals dedicated to excellence in media production</p>
        </div>

        <div className="team-grid">
          {team.map((member, index) => {
            const content = (
              <div className="team-card glass-card">
                <div className="team-image">
                  <img src={member.image} alt={member.name} loading="lazy" />
                  <div className="team-overlay"></div>
                </div>
                <div className="team-info">
                  <h3>{member.name}</h3>
                  <p>{member.role}</p>
                </div>
              </div>
            );

            if (member.link) {
              return (
                <a href={member.link} target="_blank" rel="noopener noreferrer" key={index} className="team-member-link">
                  {content}
                </a>
              );
            }

            return <div key={index}>{content}</div>;
          })}
        </div>
      </div>
    </section>
  );
};

export default Team;
