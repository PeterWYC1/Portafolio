import React from 'react';
import Footer from './components/Footer';
import Perfil from './components/Perfil';
import ProjectsSection from './components/project';
import HobbiesSection from './components/Hobby';
import './index.css';

const appStyle: React.CSSProperties = {
  fontFamily: 'Arial, sans-serif',
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
};

const contentStyle: React.CSSProperties = {
  flex: 1,
};

const App: React.FC = () => {
  return (
    <div style={appStyle}>
      <div style={contentStyle}>
        <Perfil />
        <ProjectsSection />
        <HobbiesSection />
      </div>
      <Footer />
    </div>
  );
};

export default App;
