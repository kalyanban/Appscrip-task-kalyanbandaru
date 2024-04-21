import Header from "./components/Header"
import Home from "./components/Home"

import { MdOutlineWidgets } from "react-icons/md"

import './App.css';

function App() {
  return (
    <div className="App">
      <div className='top-section'>
        <div className='top-section-info-one'>
          <MdOutlineWidgets size={25}/>
          <p className="top-section-text">
            Lorem ipsum dolor
          </p>
        </div>
        <div className='top-section-info-two'>
          <MdOutlineWidgets size={25}/>
          <p className="top-section-text">
            Lorem ipsum dolor
          </p>
        </div>
        <div className='top-section-info-three'>
          <MdOutlineWidgets size={25}/>
          <p className="top-section-text">
            Lorem ipsum dolor
          </p>
        </div>
      </div>
      <Header />
      <Home />
    </div>
  );
}

export default App;
