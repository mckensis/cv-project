import { Component } from "react";

class Personal extends Component {
    constructor() {
        super();
        this.state = {
            mode: 'view',
        }
    }

    handleMouseOver() {
        const button = document.querySelector('.personal button');
        button.style.display = 'block';
    }

    handleMouseOut() {
        const button = document.querySelector('.personal button');
        if (button.textContent === 'Edit') {
            button.style.display = 'none';
        }
    }

    handleEditSection() {
        const personalInfo = document.querySelectorAll('.personal p');

        personalInfo.forEach(p => {
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
        const inputs = Array.from(document.querySelectorAll('.personal input'));
        
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
        const button = document.querySelector('.personal button');

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
            <section className="personal"
                        onMouseOver={this.handleMouseOver}
                        onMouseOut={this.handleMouseOut}>
                <p className="name" data-length="20" data-placeholder="Name">Aidan Mckenzie</p>
                <p className="contact" data-length="15" data-placeholder="Contact No.">07985 120 283</p>
                <p className="email" data-length="30" data-placeholder="Email Address">adn.mck@gmail.com</p>
                <p className="website" data-length="35" data-placeholder="Website">https://mckensis.github.io/</p>
                <button onClick={this.handleButtonClick.bind(this)}>Edit</button>
            </section>
        )
    }
} 

export default Personal;