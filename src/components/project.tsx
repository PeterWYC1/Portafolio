import React from 'react';
import fLogo from './img/fLogo.png';
import logo2 from './img/logo2.png';
import myLogo from './img/myLogo.png';
import pPark from './img/pPark.png';
import pRecircular from './img/pRecircular.png';
import reLogo from './img/reLogo.png';
import rLogo from './img/rLogo.png';
import servLogo from './img/servLogo.png';
import sqlLogo from './img/sqlLogo.png';
import sqLogo from './img/sqLogo.png';
import dbDig from './img/dbDig.png';
import pyLog from './img/pyLog.png';

const abiLogos = [
  rLogo,
  fLogo,
  myLogo,
  sqlLogo,
  pyLog,
];



const projects = [
  {
    title: 'ParkHub',
    description:' ParkHub fue un proyecto de un software para gestion de parqueaderos, permite realizar reservas dentro de instituciones que empleen nuestros servicios, mi papel en el proyecto fue de desarrollador front end',
    imageUrl: logo2,
    link: 'https://github.com/PeterWYC1/ParkHub2.0',
    additionalImageUrl: pPark,
    nn: 'Tecnologías',
    techLogos: [
      rLogo,
      fLogo,
      myLogo,
    ],

  },
  {
    title: 'Recircular',
    description: ' Recircular surgió al ver una necesidad muy grande de aplicar la economía circular al mundo industrial, con esta página web logramos reducir los desperdicios de empresas creando un market place para las holguras de producción y así darle una segunda a los materiales minimizando la contaminación  mi papel en el proyecto fue de desarrollador front end',
    imageUrl: reLogo,
    link: 'https://github.com/DavidBetancurRamirez/Recircular',
    additionalImageUrl: pRecircular,
    nn: 'Tecnologías',
    techLogos: [
      rLogo,
      fLogo,
      myLogo,
    ],
  },
  {
    title: 'Hospital DB',
    description: 'Hospital DB es una base de datos donde se emuló un Hospital de la vida real, es una base de datos normalizada, yo cumplí el rol de DB manager, me encargué de crear tablas, organizarlas y hacer los queries que requería nuestro sistema',
    imageUrl: servLogo,
    link: 'https://github.com/Tomaslopera/Hospital_DB',
    additionalImageUrl: dbDig,
    nn: 'Tecnologías',
    techLogos: [
      servLogo,
      sqLogo,
    ],
  },
];

const techLogosStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  gap: '10px',
  margin: '10px',
};

const techLogoStyle: React.CSSProperties = {
  width: '60px',
  height: '60px',
  objectFit: 'contain',
  borderRadius: '50%',
  
};

const sectionStyle: React.CSSProperties = {
  padding: '50px 20px',
  textAlign: 'center',
  backgroundColor: '#e0f2f1',
  flex: 1,
};
const additionalImgStyle: React.CSSProperties = {
  width: '100%',
  height: 'auto',
  borderRadius: '0 0 8px 8px',
  marginTop: '10px',
};


const h2Style: React.CSSProperties = {
  fontSize: '2.5em',
  marginBottom: '20px',
  marginTop: '40px',
};

const gridStyle: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
  gap: '20px',
  justifyContent: 'center',
};

const cardStyle: React.CSSProperties = {
  backgroundColor: '#fff',
  border: '1px solid #ddd',
  borderRadius: '8px',
  padding: '20px',
  textAlign: 'left',
  boxShadow: '8px 16px 16px rgba(0, 0, 0, 0.2)',
  transition: 'transform 0.4s',
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

const h4Style: React.CSSProperties = {
  fontSize: '1.8em',
  margin: '10px 0',
};

const pStyle: React.CSSProperties = {
  fontSize: '1em',
  textAlign: 'left',
  marginBottom: '10px',
};

const tStyle: React.CSSProperties = {
  fontSize: '1.2em',
  textAlign: 'center',
  marginBottom: '10px',
  
};

const aStyle: React.CSSProperties = {
  color: '#007bff',
  textAlign: 'left',
  fontSize: '1.2em',
  textDecoration: 'none',
};

const cardHoverStyle: React.CSSProperties = {
  transform: 'scale(1.05)',
};

const ProjectsSection: React.FC = () => {
  return (
    <div style={sectionStyle}>
      <h4 style={h4Style}>Skills</h4>
        <div style={techLogosStyle}>
              {abiLogos.map((logo, i) => (
                <img key={i} src={logo} alt={`Logo ${i + 1}`} className="ability-image" />
              ))}
            </div>
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
              GitHub Link
            </a>
            <p style={tStyle}>{project.nn}</p>
            <div style={techLogosStyle}>
              {project.techLogos.map((logo, i) => (
                <img key={i} src={logo} alt={`Logo ${i + 1}`} style={techLogoStyle} />
              ))}
            </div>
            <img src={project.additionalImageUrl} alt={`Imagen adicional de ${project.title}`} style={additionalImgStyle} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;
