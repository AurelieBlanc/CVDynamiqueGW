import './App.scss';
import Banner from "../Banner/Banner"; 
import Title from "../Title/Title"; 
import Photo from "../Photo/Photo"; 
import AboutMe from "../AboutMe/AboutMe"; 
import Infos from '../Infos/Infos';
import ExpPro from '../ExpPro/ExpPro'; 
import Footer from '../Footer/Footer'; 



function App() {
  return <div className="app">
    <Banner/>
    <Title />
      <div className="center">
        <Photo />
        <AboutMe />
        <Infos />
        
      </div>
      <ExpPro />
      <Footer />
   
    
  </div>;
}

export default App;
