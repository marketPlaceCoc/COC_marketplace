import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar cart="0" cartCost="0" />
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
