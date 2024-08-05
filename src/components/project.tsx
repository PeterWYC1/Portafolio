import React from 'react';

const projects = [
  {
    title: 'Proyecto 1',
    description: 'Descripción breve del proyecto 1.',
    imageUrl: 'ruta/a/la/imagen1.jpg',
    link: 'https://github.com/tuusuario/proyecto1',
  },
  {
    title: 'Proyecto 2',
    description: 'Descripción breve del proyecto 2.',
    imageUrl: 'ruta/a/la/imagen2.jpg',
    link: 'https://github.com/tuusuario/proyecto2',
  },
  // Añade más proyectos aquí
];

const sectionStyle: React.CSSProperties = {
  padding: '50px 20px',
  textAlign: 'center',
  backgroundColor: '#f7f7f7',
};

const h2Style: React.CSSProperties = {
  fontSize: '2.5em',
  marginBottom: '20px',
};

const gridStyle: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
  gap: '20px',
  justifyContent: 'center',
};

const cardStyle: React.CSSProperties = {
  backgroundColor: '#fff',
  border: '1px solid #ddd',
  borderRadius: '8px',
  padding: '20px',
  textAlign: 'left',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  transition: 'transform 0.2s',
};

const imgStyle: React.CSSProperties = {
  width: '100%',
  height: 'auto',
  borderRadius: '8px 8px 0 0',
};

const h3Style: React.CSSProperties = {
  fontSize: '1.5em',
  margin: '10px 0',
};

const pStyle: React.CSSProperties = {
  fontSize: '1em',
  marginBottom: '10px',
};

const aStyle: React.CSSProperties = {
  color: '#007bff',
  textDecoration: 'none',
};

const cardHoverStyle: React.CSSProperties = {
  transform: 'scale(1.05)',
};

const ProjectsSection: React.FC = () => {
  return (
    <div style={sectionStyle}>
      <h2 style={h2Style}>Mis Proyectos</h2>
      <div style={gridStyle}>
        {projects.map((project, index) => (
          <div
            key={index}
            style={cardStyle}
            onMouseOver={(e) => (e.currentTarget.style.transform = cardHoverStyle.transform as string)}
            onMouseOut={(e) => (e.currentTarget.style.transform = 'none')}
          >
            <img src={project.imageUrl} alt={project.title} style={imgStyle} />
            <h3 style={h3Style}>{project.title}</h3>
            <p style={pStyle}>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer" style={aStyle}>
              Ver Proyecto
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;
