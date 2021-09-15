import './App.css';
import Navbar from "./component/Navbar";
import Header from "./component/Header";
import Feature from "./component/Feature";
import Steps from "./component/Steps";
import Signup from "./component/Signup";
import Waitlist from './component/Waitlist';
import Foot from './component/Foot';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Waitlist />
      <Feature />
      <Steps />
      <Foot />
    </div>
  );
}

export default App;
