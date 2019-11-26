import React, {Component} from 'react';
import ReactDOM from 'react-dom';

export default class HelloWorldClass extends Component{

  constructor(props)
  {
    super(props);
    this.state = {
      firstName : 'Priyanka',
      lastName : 'Gat',
      salary : 100
    };

    this.IncreametSalary = this.IncreametSalary.bind(this);
  }

  render()  {
    return (
    <div>
      <div>First Name : {this.state.firstName}</div>
      <div>Last Name : {this.state.lastName}</div>
      <div>Salary : {this.state.salary}</div>
      <button onClick = {this.IncreametSalary}> Submit </button>
    </div>
    )
  };

  IncreametSalary()
  {
    // alert('clicked');
    // this.setState({
    //   firstName : 'Priyanka',
    //   lastName : 'Gat',
    //   salary : this.state.salary+100
    // });

    this.setState((state) =>({salary : state.salary+100}));
      // ...this.state, //this is optional setstate handles all other value kept intact.
      // salary : this.state.salary+100

        this.setState((state) =>({salary : state.salary+100}));

    // this.setState({
    //   ...this.state, //this is optional setstate handles all other value kept intact.
    //   salary : this.state.salary+100
    // });
  }

}