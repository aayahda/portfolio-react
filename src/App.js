// import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import Headroom from 'react-headroom';
import Bio from './components/Bio';
import Expertise from './components/expertise';


function App() {
  return (
    <div className="App">
      <Headroom><Navbar/></Headroom>
      <Bio/> 
      <Expertise/>

     </div>
  );
}

export default App;
