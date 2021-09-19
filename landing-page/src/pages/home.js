import Header from "../component/Header";
import Feature from "../component/Feature";
import Signup from "../component/Signup";

function Home() {
    return (
      <div>
        <Header />
        <Feature id="feature1" />
        <Feature id="feature2" />
        <Feature id="feature3" />
        <Signup />
      </div>
    );
  }
  
  export default Home;