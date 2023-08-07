import Personal from "./components/Personal/Personal";
import Projects from "./components/Projects/Projects";
import Technologies from "./components/Technologies/Technologies";
import "./globals.css";

function App() {
  return (
    <>
      <div className="app">
        <Personal />
        <Technologies />
        <Projects />
      </div>
    </>
  );
}

export default App;
