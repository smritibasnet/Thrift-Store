import React from 'react'
import { Form, Button, Card} from 'react-bootstrap'
import { Link } from 'react-router-dom'

const LoginScreen = () => {
    return (
    <>
<Card >
  <Card.Header><h2>LOGIN</h2></Card.Header>
  <Card.Body>
  <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      {/* We'll never share your email with anyone else. */}
    </Form.Text>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    {/* <Form.Check type="checkbox" label="Check me out" /> */}
  </Form.Group>
  <Button variant="primary" type="submit">
    Login
  </Button>
<br/><br/>
  Don't have an account? <Link to="/register">Register</Link>
</Form>
  </Card.Body>
</Card>
     </>
  )
}
export default LoginScreen
