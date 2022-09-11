import React from 'react'
import Example from './Components/Nav'
import '../src/index.css'
import { Button, Card, CardImg, CardImgOverlay, CardText, CardTitle } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
function Home(){
    return(
        <div>
        <Example />
        <div>
  <Card inverse>
    <CardImg
      alt="Card image cap"
      src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
      style={{
        height: 790
      }}
      width="100%"
    />
    <CardImgOverlay>
      <CardTitle tag="h5">
        Employee Management System
      </CardTitle>
      <CardText>
       With an EMS, Human Resource teams around the world can manage, <br></br>store and most
       importantly track employee data.
      </CardText>
      <CardText>
        <small className="text-muted">
          Last updated 3 mins ago
        </small>
      </CardText>
    </CardImgOverlay>
  </Card>
</div>
<div className='login'>
  <Button
    color="primary"
    outline
  >
    Log in
  </Button>

  <Button
  color="success"
  outline>
    Sign Up
  </Button>
</div>
        </div>
    )
}

export default Home