import Education from "./components/Education";
import Header from "./components/Header";
import Personal from "./components/Personal";
import Work from "./components/Work";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Personal />
        <Education />
        <Work />
      </main>
      <Footer />
    </div>
  );
}

export default App;
