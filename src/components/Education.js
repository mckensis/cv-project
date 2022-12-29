import { Component } from "react";

class Education extends Component {
    constructor() {
        super();

        this.state = {
            mode: 'view',
        }
    }

    handleMouseOver() {
        const button = document.querySelector('.education button');
        button.style.display = 'block';
    }

    handleMouseOut() {
        const button = document.querySelector('.education button');
        if (button.textContent === 'Edit') {
            button.style.display = 'none';
        }
    }

    handleEditSection() {
        const educationInfo = document.querySelectorAll('.education p');

        educationInfo.forEach(p => {
            const parent = p.parentElement;
            const input = document.createElement('input');
            input.value = p.textContent;
            input.setAttribute('maxlength', p.dataset.length);
            input.setAttribute('placeholder', p.dataset.placeholder);
            parent.removeChild(p);
            parent.append(input);
        })
    }

    handleSaveSection() {
        const inputs = Array.from(document.querySelectorAll('.education input'));
        
        inputs.forEach(input => {
            const parent = input.parentElement;
            const field = document.createElement('p');
            if (!input.value) {
                field.textContent = input.placeholder;
            } else {
                field.textContent = input.value;
            }
            field.setAttribute('data-length', input.maxLength);
            field.setAttribute('data-placeholder', input.placeholder);
            parent.removeChild(input);
            parent.append(field);
        })
    }
    
    handleButtonClick() {
        const button = document.querySelector('.education button');

        switch (button.textContent) {
            case 'Edit':
                this.handleEditSection();
                this.setState({
                    mode: 'edit',
                })
                button.textContent = 'Save';
                break;
            case 'Save':
                this.handleSaveSection();
                this.setState({
                    mode: 'view',
                })
                button.textContent = 'Edit';
                break;
            default:
                break;
        }
    }

    render() {
        return(
            <section className="education"
                     onMouseOver={this.handleMouseOver}
                     onMouseOut={this.handleMouseOut}>
                <h2>Education</h2>
                <p>Ayr College</p>
                <p>NC Computing & IT</p>
                <p>2010 - 2011</p>
                <button onClick={this.handleButtonClick.bind(this)}>Edit</button>
            </section>
        )
    }
}

export default Education;