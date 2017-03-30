import React, {Component} from 'react';

export default class PersonEdit extends Component {

    constructor(props) {
        super(props);

        this.state = {
            person: this.props.person
        };
        this.onDone = this.onDone.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        let state = this.state
        state.person[event.target.name] = event.target.value;
        this.setState(state);
    }

    onDone() {
        this.props.onDone();
        return false;
    }

    render() {
        return (
            <form onSubmit={this.onDone}>
                <div className="form-group">
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" className="form-control" id="firstName" name="firstName"
                           defaultValue={this.state.person.firstName}
                           onChange={this.handleInputChange}/>
                </div>
                <div className="form-group">
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" className="form-control" id="lastName" name="lastName"
                           defaultValue={this.state.person.lastName}
                           onChange={this.handleInputChange}/>
                </div>
                <button className="btn btn-primary">Submit</button>
            </form>
        );
    }
}