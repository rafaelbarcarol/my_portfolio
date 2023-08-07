import About from "./components/About/About";
import Bio from "./components/Bio/Bio";
import Projects from "./components/Projects/Projects";
import Technologies from "./components/Technologies/Technologies";
import "./globals.css";

function App() {
  return (
    <>
      <div className="app">
        <Bio />
        <About />
        <Technologies />
        <Projects />
      </div>
    </>
  );
}

export default App;
