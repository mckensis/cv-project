import Header from "./views/Header";
import MainComponent from "./views/MainComponent";
import './stylesheets/base.css';
import './stylesheets/About.css';
import './stylesheets/Education.css';
import './stylesheets/Personal.css';
import './stylesheets/Projects.css';
import './stylesheets/Skills.css';
import './stylesheets/Work.css';
import './stylesheets/Print.css';

function App() {

  // localStorage.clear();

  return (
    <div className="App">
      <Header />
      <MainComponent />
    </div>
  );
}

export default App;
