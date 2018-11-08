import React, { Component } from 'react';
import FormUserDetails from './FormUserDetails';
import FormPersonalDetails from './FormPersonalDetails';
import Confirm from './Confirm';
import Success from './Success';

class UserForm extends Component {
  state = {
    step: 1,
    firstName: '',
    lastName: '',
    email: '',
    occupation: '',
    city: '',
    bio: '',
  }

  // Proceed to the next step.
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  }

  // Go back to the previous step.
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  }

  // Handle fields change.
  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  }

  render () {
    const { step } = this.state;
    const { firstName, lastName, email, occupation, city, bio } = this.state;
    const values = { firstName, lastName, email, occupation, city, bio };

    switch(step) {
      case 1:
        return (
          <FormUserDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        )
      case 2:
        return (
          <FormPersonalDetails
            prevStep={this.prevStep}
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        )
      case 3:
        return (
          <Confirm
            prevStep={this.prevStep}
            nextStep={this.nextStep}
            values={values}
          />
        )
      case 4:
        return <Success />;
      default:
        return <h1>Uh oh!</h1>

    }
  }
}

export default UserForm;
