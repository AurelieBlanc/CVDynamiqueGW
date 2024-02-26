import './App.scss';
import Banner from "../Banner/Banner"; 
import Title from "../Title/Title"; 
import Photo from "../Photo/Photo"; 
import AboutMe from "../AboutMe/AboutMe"; 
import Infos from '../Infos/Infos';
import NewLife from '../NewLife/NewLife';



function App() {
  return <div className="app">
    <Banner/>
    <Title />
    <div className="center">
      <Photo />
      <AboutMe />
      <Infos />
    </div>
    <NewLife />
    
  </div>;
}

export default App;
