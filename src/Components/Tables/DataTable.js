import React, { Component } from 'react'
import { Table, Button } from 'reactstrap';
import ModalForm from '../Modals/Modal'


class DataTable extends Component {

  deleteItem = id => {
    let confirmDelete = window.confirm('All good things have an end. Delete item forever?')
    if(confirmDelete){
      fetch(`http://localhost:9292/employees/${id}`, {
      method: 'delete',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id
      })
    })
      .then(response => response.json())
      .then(item => {
        this.props.deleteItemFromState(id)
      })
      .catch(err => console.log(err))
    }
  }

  render() {
    const items = this.props.items.map(item => {
      return (
        <tr key={item.id}>
          <th scope="row">{item.id}</th>
          <td>{item.first_name}</td>
          <td>{item.last_name}</td>
          <td>{item.email}</td>
          <td>{item.work_station}</td>
          <td>{item.phone}</td>
          <td>{item.salary}</td>
          <td>
            <div style={{width:"110px"}}>
              <ModalForm buttonLabel="Edit" item={item} updateState={this.props.updateState}/>
              {' '}
              <Button color="danger" onClick={() => this.deleteItem(item.id)}>Del</Button>
            </div>
          </td>
        </tr>
        )
      })

    return (
      <div>  
   
      <Table responsive hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>First</th>
            <th>Last</th>
            <th>Email</th>
            <th>Work Station</th>
            <th>Phone</th>
            <th>Salary</th>
            <th>Actions</th>
          </tr>

        </thead>

        <tbody>
          {items}
        </tbody>
      </Table>
      </div>
    )
  }
}

export default DataTable
