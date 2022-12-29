import { Component } from "react";

class Work extends Component {
    constructor() {
        super();

        this.remove = 'a';
    }

    render() {
        return(
            <section className="work">
                <h2>Work Experience</h2>
                <p>The Merchant Glasgow</p>
                <p>Assistant Manager</p>
                <p>2014 - 2022</p>
                <p>Cash Handling</p>
                <p>Rotas</p>
                <p>Labour</p>
                <p>Stock Management</p>
                <button>Edit</button>
            </section>
        )
    }
} 

export default Work;