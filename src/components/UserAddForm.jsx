import React from 'react';
import './UserAddForm.css';

class UserAddForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            isGoldClient: false,
            salary:'',
            image:''
        };
    }

    updateName(event) {
        this.setState({name: event.target.value});
    }

    updateEmail(event) {
        this.setState({email: event.target.value});
    }

    updateIsGoldClient(event) {
        this.setState({isGoldClient: event.target.checked});
    }

    updateSalary(event) {
        this.setState({salary: event.target.value});
    }

    updateImage(event) {
        this.setState({image: event.target.value});
    }

    render() {
        const {name, email, isGoldClient, salary, image} = this.state;
        const {submitAddForm} = this.props;

        return (
            <form
                className="user-add-form"
                onSubmit={(event) => submitAddForm(event, name, email, isGoldClient,salary,image)}
            >
                <h2>Adauga utilizatori:</h2>
                
                <label htmlFor="name">Nume:</label>
                <input
                    type="text"
                    name="name"
                    onChange={(event) => this.updateName(event)}
                />
                 
                <label htmlFor="email">Email:</label>
                <input
                    type="text"
                    name="email"
                    onChange={(event) => this.updateEmail(event)}
                />
                 
                <label htmlFor="is-gold-client">Client GOLD:</label>
                <input
                    type="checkbox"
                    name="is-gold-client"
                    value="true"
                    onChange={(event) => this.updateIsGoldClient(event)}
                />
                 <label htmlFor="salary">Salariu:</label>
                <input
                    type="number"
                    name="salary"
                    onChange={(event) => this.updateSalary(event)}
                />
                 <label htmlFor="image">Imagine:</label>
                <input
                     alt="photo"
                    name="image"
                    onChange={(event) => this.updateImage(event)}
                />

                <input type="submit" value="Introduceti utilizatorul"/>
            </form>
        )
    }
}

export default UserAddForm;