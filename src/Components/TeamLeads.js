import React from 'react'
import Example from './Nav'
import { Link } from "react-router-dom";
import { Container, Row } from 'reactstrap'
import { Button } from 'reactstrap';

function TeamLeads() {
  return (
    <div>
      {/* Imports Navbar to TeamLeads table */}
      <Example />
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td colspan="2">Larry the Bird</td>
            <td>@twitter</td>
          </tr>
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

export default TeamLeads