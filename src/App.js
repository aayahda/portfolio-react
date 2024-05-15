// import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import Headroom from 'react-headroom';

function App() {
  return (
    <div className="App">
      <Headroom><Navbar/></Headroom>
     </div>
  );
}

export default App;
