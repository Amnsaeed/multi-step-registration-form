import React, { Component } from 'react';
import AccountSetup from './AccountSetup';
import PersonalDetails from './PersonalDetails';
import ProfessionalDetails from './ProfessionalDetails';
import Confirm from './Confirm';
import Success from './Success';

export class UserForm extends Component {
  state={
    step: 0,
    userName: '',
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    gender: '',
    bio: '',
    education: '',
    occupation: '',
    city: ''
  }


  // Go to the next page

  nextStep = () => {
    const { step } = this.state;
      this.setState({
        step: step + 1
      });
  }

  // Go the the prev page

  prevStep = () => {
    const { step } = this.state;
      this.setState({
        step: step - 1
      })
  }

  // handle fields change

  handleChange = input => e => {
    this.setState({[input]: e.target.value})
  }


  render() {

    const { step } = this.state;
    const { userName, email, password, firstName, lastName, gender, bio, education, occupation, city} = this.state;
    const values = { step, userName, email, password, firstName, lastName, gender, bio, education, occupation, city };

    switch( step ) {
      case 0:
        return (
          <AccountSetup
          nextStep={this.nextStep}
          handleChange={this.handleChange}
          values={ values }
          />
        )
        case 1:
          return (
              <PersonalDetails 
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                handleChange={this.handleChange}
                values={values} />

          )
          case 2:
            return (
              <ProfessionalDetails 
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              handleChange={this.handleChange}
              values={values}
              />
            
            )
          case 3:
              return (
                <Confirm 
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                values={values}
                />  
              
            )
          case 4:
            return (
              <Success
              values={values}
              />
            )
    }
  }
}

export default UserForm
