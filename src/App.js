import Education from "./components/Education";
import Header from "./components/Header";
import Personal from "./components/Personal";
import Work from "./components/Work";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Personal />
        <Work />
        <Education />
      </main>
    </div>
  );
}

export default App;
