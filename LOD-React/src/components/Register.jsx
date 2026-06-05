import { useState } from "react";
import { useUserContext } from "../context/UserContext";
import { Container, Form, Button, Alert, Card, Row, Col } from "react-bootstrap";

function Register() {
  const { registerUser } = useUserContext();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    userName: '',
    userPassword: ''
  });

  const [status, setStatus] = useState({ type: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: 'info', message: 'Creating account...' });

    const result = await registerUser(formData);

    if (result.result === 200) {
      setStatus({ type: 'success', message: 'User created successfully! You can now log in.' });
      setFormData({ firstName: '', lastName: '', email: '', userName: '', userPassword: '' });
    } else {
      setStatus({ type: 'danger', message: result.message || 'Error creating user.' });
    }
  };

  return (
    <Container className="mt-5" style={{ maxWidth: "600px" }}>
      <Card className="p-4 shadow">
        <h2 className="text-center mb-4">Create Account</h2>

        {status.message && (
          <Alert variant={status.type}>
            {status.message}
          </Alert>
        )}

        <Form onSubmit={handleSubmit}>
          <Row>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  name="firstName"
                  value={formData.firstName}
                  placeholder="Enter first name"
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  name="lastName"
                  value={formData.lastName}
                  placeholder="Enter last name"
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>
          </Row>

          <Form.Group className="mb-3">
            <Form.Label>Username</Form.Label>
            <Form.Control
              name="userName"
              value={formData.userName}
              placeholder="Pick a username"
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={formData.email}
              placeholder="Enter email"
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="userPassword"
              value={formData.userPassword}
              placeholder="Create a password"
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Button variant="success" type="submit" className="w-100 rounded-3">
            Register
          </Button>
        </Form>
      </Card>
    </Container>
  );
}

export default Register;