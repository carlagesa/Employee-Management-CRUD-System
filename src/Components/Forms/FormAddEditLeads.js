import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class AddEditLeads extends React.Component {
  state = {
    id: 0,
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    work_station: '',
    hobby: ''
  }

  onChange = e => {
    this.setState({[e.target.name]: e.target.value})
  }

  submitFormAdd = e => {
    // e.preventDefault()
    fetch('http://localhost:9292/team_leads', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        firstname: this.state.firstname,
        lastname: this.state.lastname,
        phone: this.state.phone,
        email: this.state.email,
        work_station: this.state.work_station,
      })
    })

      .then(response => response.json())
      .then(customer=> {
        if(Array.isArray(customer)) {
          this.props.addItemToState(customer[0])
          this.props.toggle()

        } else {
          console.log('failure')
        }
      })

      .catch(err => console.log(err))
  }

  submitFormEdit = e => {
    // e.preventDefault()
    fetch("http://localhost:9292/team_leads", {
      method: 'patch',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id: this.state.id,
        firstname: this.state.firstname,
        lastname: this.state.lastname,
        email: this.state.email,
        work_station: this.state.work_station,
        phone: this.state.phone,
      })
    })
      .then(response => response.json())
      .then(customer=> {
        if(Array.isArray(customer)) {
          console.log(item[0])
          this.props.updateState(customer[0])
          this.props.toggle()
        } else {
          console.log('failure')
        }
      })
      .catch(err => console.log(err))
  }

  componentDidMount(){
    // if customerexists, populate the state with proper data
    if(this.props.customer){
      const { id, firstname, lastname, email, work_station, phone,  hobby } = this.props.customer
      this.setState({ id, firstname, lastname, email,  work_station, phone, hobby })
    }
  }

  render() {
    return (
      <Form onSubmit={this.props.customer? this.submitFormEdit : this.submitFormAdd}>
        <FormGroup>
          <Label for="firstname">firstname Name</Label>
          <Input type="text" name="firstname" id="firstname" onChange={this.onChange} value={this.state.firstname === null ? '' : this.state.firstname} />
        </FormGroup>
        <FormGroup>
          <Label for="lastname">lastname Name</Label>
          <Input type="text" name="lastname" id="lastname" onChange={this.onChange} value={this.state.lastname === null ? '' : this.state.lastname}  />
        </FormGroup>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input type="email" name="email" id="email" onChange={this.onChange} value={this.state.email === null ? '' : this.state.email}  />
        </FormGroup>
     
        <FormGroup>
          <Label for="work_station">Work Station</Label>
          <Input type="text" name="work_station" id="work_station" onChange={this.onChange} value={this.state.work_station === null ? '' : this.state.work_station}  placeholder="City, State" />
        </FormGroup>
        <FormGroup>
          <Label for="phone">Phone</Label>
          <Input type="text" name="phone" id="phone" onChange={this.onChange} value={this.state.phone === null ? '' : this.state.phone}  placeholder="ex. 555-555-5555" />
        </FormGroup>
        
        <Button  color="info" >Submit</Button>
      </Form>
    );
  }
}

export default AddEditLeads;