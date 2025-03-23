import React, { Component } from 'react';
import '../EmployeeForm.css'; 

class EmployeeForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            title: '',
            department: ''
        };
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    };


    handleSubmit = (event) => {
        event.preventDefault(); 
    
        this.props.onAddEmployee(this.state);
    
        this.setState({ name: '', email: '', title: '', department: '' }); 
    };    

    render() {
        return (
            <div className="employee-form-container">
                <h2>Add New Employee</h2>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name:
                        <input type="text" name="name" value={this.state.name} onChange={this.handleChange} required />
                    </label>
                    <label>
                        Email:
                        <input type="email" name="email" value={this.state.email} onChange={this.handleChange} required />
                    </label>
                    <label>
                        Job Title:
                        <input type="text" name="title" value={this.state.title} onChange={this.handleChange} required />
                    </label>
                    <label>
                        Department:
                        <input type="text" name="department" value={this.state.department} onChange={this.handleChange} required />
                    </label>
                    <button type="submit">Add Employee</button>
                </form>
            </div>
        );
    }
}

export default EmployeeForm;
