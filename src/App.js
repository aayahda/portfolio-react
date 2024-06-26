// import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import Headroom from 'react-headroom';
import Bio from './components/Bio';
import Expertise from './components/expertise';
import About from './components/about';
import Footer from './components/Footer';
import Works from './components/works';
import Honors from './components/honors';

function App() {
  return (
    <div className="App">
      <Headroom><Navbar/></Headroom>
      <Bio /> 
      <Expertise/>
      <Works/>
      <Honors/>
      <About/>
      <Footer/>

     </div>
  );
}

export default App;
