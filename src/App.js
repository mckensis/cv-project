import Header from "./views/Header";
import Personal from "./views/Personal";
import Work from "./views/work/Work";
import About from "./views/About";
import Education from "./views/education/Education";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Personal />
        <About />
        <Work />
        <Education />
      </main>
    </div>
  );
}

export default App;
