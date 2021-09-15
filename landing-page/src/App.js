import './App.css';

import Navbar from "./component/Navbar";
import Header from "./component/Header";
import Feature from "./component/Feature";
import Steps from "./component/Steps";
import Signup from "./component/Signup";
import Footer from "./component/Footer";
import About from "./pages/about";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Feature id="feature1"/>
      <Feature id="feature2"/>
      <Feature id="feature3"/>
      <Steps />
      <Signup />
      <Footer />
      <About />
    </div>
  );
}

export default App;
