import './App.css';
import Navbar from "./component/Navbar";
import Header from "./component/Header";
import Feature from "./component/Feature";
import Steps from "./component/Steps";
import Signup from "./component/Signup";
import Footer from "./component/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Feature />
      <Feature />
      <Feature />
      <Steps />
      <Signup />
      <Footer />
    </div>
  );
}

export default App;
