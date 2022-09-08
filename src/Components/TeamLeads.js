import React from 'react'
import Example from './Nav'
import { Link } from "react-router-dom";
import { Container, Row } from 'reactstrap'
import { Button } from 'reactstrap';
import LeadsModal from './Modals/LeadsModal';

class TeamLeads extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      customers: []
    }
  }
  getItems() {
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

  addItemToState = (customer) => {
    this.setState(prevState => ({
      customers: [...prevState.customers, customer]
    }))
  }

  updateState = (customer) => {
    const customerIndex = this.state.customers.findIndex(data => data.id === customer.id)
    const newArray = [
      // destructure all items from beginning to the indexed item
      ...this.state.customers.slice(0, customerIndex),
      // add the updated item to the array
      customer,
      // add the rest of the items to the array from the index after the replaced item
      ...this.state.customers.slice(customerIndex + 1)
    ]
    this.setState({ customers: newArray })
  }
  componentDidMount() {
    this.getItems()
  }
  render() {
    return (
      <div>
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
              <tr >
                <th scope="row">{customer.id}</th>
                <td>{customer.firstname}</td>
                <td>{customer.lastname}</td>
                <td>{customer.phone}</td>
                <td>{customer.email}</td>
                <td>{customer.work_station}</td>
                <td>
                  <div style={{ width: "110px" }}>
                    <LeadsModal buttonLabel="Edit" item={customer} updateState={this.props.updateState} />
                    <Button color="danger" >Del</Button>
                  </div>
                </td>
              </tr>
            )}

          </tbody>

        </table>
        <Container className="App">
          <Row>
            <LeadsModal buttonLabel="Add Item" />

            <a href="http://localhost:3000/home" target="_blank" >
                <Button variant="outlined">
                  Employees
                </Button>
              </a>
          </Row>
        </Container>
      </div>
    )

  }
}
export default TeamLeads
