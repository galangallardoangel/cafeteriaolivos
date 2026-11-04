import "./App.css";
import Header from "./assets/components/Header.jsx";
import Home from "./assets/pages/Hero.jsx";
import About from "./assets/pages/About.jsx";
import Menu from "./assets/pages/Menu.jsx";
import Map from "./assets/components/Map.jsx";
import Footer from "./assets/components/Footer.jsx";

function App() {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Menu />
      <Map />
      <Footer />
    </>
  );
}

export default App;
