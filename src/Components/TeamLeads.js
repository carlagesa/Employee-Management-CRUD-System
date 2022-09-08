import React, { Component } from 'react'
import Example from './Nav'
import { Link } from "react-router-dom";
import { Container, Row } from 'reactstrap'
import { Button } from 'reactstrap';

class TeamLeads extends Component {
  constructor(props) {
      super(props);
      this.state = {
          customers: []
      }
  }
  componentDidMount() {
      fetch("http://localhost:9292/team_leads")
      .then(res => res.json())
      .then(
          (customers) => {
              this.setState({ customers: customers });
          },
          (error) => {
              alert(error);
          }
      )
  }

render() {

  return (
    <div>
      
      {/* Imports Navbar to TeamLeads table */}
      <Example />
      <table class="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Phone</th>
            <th scope="col">Email</th>
            <th scope="col">Work Station</th>
            <th scope="col">Action</th>

          </tr>
        </thead>
        <tbody>
        {this.state.customers.map(customer =>
          <tr>
            <th scope="row">{customer.id}</th>
            <td>{customer.firstname}</td>
            <td>{customer.lastname}</td>
            <td>{customer.phone}</td>
            <td>{customer.email}</td>
            <td>{customer.work_station}</td>

            <td> <Button color="danger" >Del</Button></td>
          </tr>
         )}
        </tbody>
      </table>
      <Container className="App">
        <Row>
          <Button element={Link} to="../App">
            Click Me
          </Button>
        </Row>
      </Container>
    </div>
  )
  }
}
export default TeamLeads