import React from 'react'
import { Form, Button, Card} from 'react-bootstrap'
import { Link } from 'react-router-dom'

const RegisterScreen = () => {
    return (
    <>
<Card className="w-80">
  <Card.Header><h2>Register</h2></Card.Header>
  <Card.Body>
  <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Full Name</Form.Label>
    <Form.Control type="text" placeholder="Enter full name" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control  type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      {/* We'll never share your email with anyone else. */}
    </Form.Text>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control  type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
  <Form.Label>Confirm Password</Form.Label>
    <Form.Control  type="password" placeholder="Confirm Password" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
  <Form.Label>Phone Number</Form.Label>
    <Form.Control type="text" placeholder="Phone Number" />
  </Form.Group>
  <br/>
  <Button variant="primary" type="submit">
    Register
  </Button>
<br/><br/>
  Have an account? <Link to="/login">Login</Link>
</Form>
  </Card.Body>
</Card>

     </>
  )
}

export default RegisterScreen
