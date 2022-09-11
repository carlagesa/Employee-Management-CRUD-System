import React from 'react'
import Example from './Nav'
import { Container, Row } from 'reactstrap'
import { Button } from 'reactstrap';
import LeadsModal from './Modals/LeadsModal';
import { Link } from 'react-router-dom';

class TeamLeads extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      teamleads: []
    }
  }
  getItems() {
    fetch("http://localhost:9292/team_leads")
      .then(res => res.json())
      .then(
        (teamleads) => {
          this.setState({ teamleads: teamleads });
        },
        (error) => {
          alert(error);
        }
      )
  }

  addItemToState = (teamlead) => {
    this.setState(prevState => ({
      teamleads: [...prevState.teamleads, teamlead]
    }))
  }

  updateState = (teamlead) => {
    const teamleadIndex = this.state.teamleads.findIndex(data => data.id === teamlead.id)
    const newArray = [
      // destructure all items from beginning to the indexed item
      ...this.state.teamleads.slice(0, teamleadIndex),
      // add the updated item to the array
      teamlead,
      // add the rest of the items to the array from the index after the replaced item
      ...this.state.teamleads.slice(teamleadIndex + 1)
    ]
    this.setState({ teamleads: newArray })
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


            {this.state.teamleads.map(teamlead =>
              <tr >
                <th scope="row">{teamlead.id}</th>
                <td>{teamlead.firstname}</td>
                <td>{teamlead.lastname}</td>
                <td>{teamlead.phone}</td>
                <td>{teamlead.email}</td>
                <td>{teamlead.work_station}</td>
                <td>
                  <div style={{ width: "110px" }}>
                    <LeadsModal buttonLabel="Edit" item={teamlead} updateState={this.props.updateState} />
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
            <Link to="/app">
              <Button variant="outlined">
                Employees
              </Button>
            </Link>
          </Row>
        </Container>
      </div>
    )

  }
}
export default TeamLeads
