import { Component } from "react";
import Education from "./components/Education";
import Personal from "./components/Personal";
import Work from "./components/Work";
import './styles/style.css'

class App extends Component {

    constructor() {
        super();

        this.state = {
            mode: 'view',
        }
        this.changeMode = this.changeMode.bind(this);
    }

    changeMode(change) {
        this.setState({
            mode: change,
        });
    }
  
    render() {
        return(
            <div className="App">
                {/* */}
                <div className="header">
                    <h1>CV Builder</h1>
                </div>
                <Personal />
                <Education />
                <Work />
            </div>
        )
    }
}

export default App;