import React from 'react';
import sqlLogo from './img/bikeImg.jpg';
import sqLogo from './img/runImg.jpg';
import dbDig from './img/ultiImg.jpg';
import bassImg from './img/bassImg.jpg';
import '../index.css';

const hobbies = [
  { title: 'Bike Riding', imageUrl: sqlLogo },
  { title: 'Running', imageUrl: sqLogo },
  { title: 'Ultimate', imageUrl: dbDig },
  { title: 'Playing Music', imageUrl:  bassImg},
];

const sectionStyle: React.CSSProperties = {
  padding: '50px 20px',
  textAlign: 'center',
  backgroundColor: '#fff',
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};
const containerStyle: React.CSSProperties = {
 maxWidth: '1200px',
 width: '100%',
 margin: '0 auto',
};


const gridStyle: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
  gap: '20px',
  justifyContent: 'center',
};


const imgStyle: React.CSSProperties = {
  width: '100%',
  height: 'auto',
  borderRadius: '12px 12px ', // Redondear las esquinas superiores
  marginBottom: '15px'
};

const h3Style: React.CSSProperties = {
  fontSize: '1.4em',
  margin: '10px ',
  color: '#ddd'
  
};

const h2Style: React.CSSProperties = {
 fontSize: '1.6em',
 margin: '10px ',
};

const cardStyle: React.CSSProperties = {
  backgroundColor: '#11111f',
 border: '1px solid #fff',
 borderRadius: '15px',
 padding: '20px',
 boxShadow: '8px 16px 16px rgba(0, 0, 0, 0.2)',
 transition: 'transform 0.4s',
};

const HobbiesSection: React.FC = () => {
  return (
    <div style={sectionStyle}>
          <div style={containerStyle}>
        <h2 style={h2Style}>Mis Hobbies</h2>
        <div style={gridStyle}>
          {hobbies.map((hobby, index) => (
            <div
              key={index}
              style={cardStyle}
              onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
              onMouseOut={(e) => (e.currentTarget.style.transform = 'none')}
            >
              <h3 style={h3Style}>{hobby.title}</h3>
              <img src={hobby.imageUrl} alt={hobby.title} style={imgStyle} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HobbiesSection;
