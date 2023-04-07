import Header from "./views/Header";
import Personal from "./views/Personal";
import Work from "./views/work/Work";
import About from "./views/About";
import Education from "./views/education/Education";
import Skills from "./views/Skills";
import Projects from "./views/projects/Projects";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Personal />
        <About />
        <Skills />
        <Projects />
        <Work />
        <Education />
      </main>
    </div>
  );
}

export default App;
