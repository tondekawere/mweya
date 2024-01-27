import './App.css';
import Header from "./components/MyHeader.js";
import Hero from "./components/Hero";
import About from './components/About';
import What from "./components/What";
import Swipe from "./components/App";
import Projects from './components/Projects';
import Footer from "./components/Footer"

function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <What />
      <Swipe />
      <Projects />
      <Footer />
    </>
  );
}

export default App;
