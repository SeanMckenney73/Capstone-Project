import { useState } from "react";
import { useUserContext } from "../context/UserContext";
import { Container, Form, Button, Alert, Card } from "react-bootstrap";

function Login() {
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [submitResult, setSubmitResult] = useState({ type: '', message: '' });

  const { currentUser, handleUpdateUser, loginUser } = useUserContext();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (userPassword.length < 8) {
      setSubmitResult({ type: 'danger', message: 'Password must be at least 8 chars long' });
      return;
    }

    
    const response = await loginUser({ 
      email: userEmail, 
      userPassword: userPassword 
    });

    if (response.result === 200) {
      setSubmitResult({ type: 'success', message: 'Successful login.' });
    } else {
      setSubmitResult({ type: 'danger', message: response.message || 'Invalid email or password.' });
    }
  };

  
  if (currentUser?.email) return (
    <Container className="mt-5 text-center">
      <Card className="p-4 shadow-sm">
        <h3>Welcome, {currentUser.firstName || currentUser.email}!</h3>
        <p className="text-muted">You are currently logged in.</p>
        <Button variant="outline-danger" onClick={() => handleUpdateUser({})}>
          Log Out
        </Button>
      </Card>
    </Container>
  );

  return (
    <Container className="mt-5" style={{ maxWidth: "400px" }}>
      <Card className="p-4 shadow">
        <h2 className="text-center mb-4">Login</h2>
        
        {submitResult.message && (
          <Alert variant={submitResult.type}>
            {submitResult.message}
          </Alert>
        )}

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email Address</Form.Label>
            <Form.Control 
              type="email" 
              placeholder="Enter email" 
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
              required 
            />
          </Form.Group>

          <Form.Group className="mb-4" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control 
              type="password" 
              placeholder="Password" 
              value={userPassword}
              onChange={(e) => setUserPassword(e.target.value)}
              required 
            />
          </Form.Group>

          <Button variant="primary" type="submit" className="w-100 rounded-3">
            Log In
          </Button>
        </Form>
      </Card>
    </Container>
  );
}

export default Login;
