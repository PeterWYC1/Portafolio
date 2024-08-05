
import Perfil from './components/Perfil';
import ProjectsSection from './components/project';
import Footer from './components/Footer';


const appStyle: React.CSSProperties = {
  fontFamily: 'Arial, sans-serif',
};

function App() {
  return (
      < div style={appStyle}>
      <Perfil/>
      <ProjectsSection />
      <Footer />
      </div>
  );
}

export default App;
