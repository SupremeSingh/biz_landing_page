import './App.css';

import Main from "./Main";

import Navbar from "./component/Navbar";
import Header from "./component/Header";
import Feature from "./component/Feature";
import Waitlist from './component/Waitlist';
import Foot from './component/Foot';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Waitlist />
      <Feature />
      <Foot />
    </div>
  );
}

export default App;
