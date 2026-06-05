import { useState } from "react";
import { useUserContext } from "../context/UserContext";
import { Container, Form, Button, Alert, Card } from "react-bootstrap";

function UpdateProfile() {
  const { currentUser, updateDBUser, deleteDBUser } = useUserContext();
  

  
  const [formData, setFormData] = useState({
    firstName: currentUser.firstName || "",
    lastName: currentUser.lastName || "",
    userName: currentUser.userName || "",
    email: currentUser.email || "",
    userPassword: "" 
  });

  const [status, setStatus] = useState({ type: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: "info", message: "Updating..." });

    
    const result = await updateDBUser(currentUser.id, formData);

    if (result.success) {
      setStatus({ type: "success", message: "Profile updated successfully!" });
    } else {
      setStatus({ type: "danger", message: result.message });
    }
  };

  const handleDelete = async () => {
  const confirmed = window.confirm(
    "Are you sure you want to delete your account? This action cannot be undone."
  );

  if (confirmed) {
    const result = await deleteDBUser(currentUser.id);
    
    if (result.result === 200) {
      alert("Account deleted successfully.");

    } else {
      alert("Error deleting account: " + result.message);
    }
  }
};

  return (
    <Container className="mt-5" style={{ maxWidth: "500px" }}>
        <Card className="p-4 shadow">
      <h2>Update Profile</h2>
      {status.message && <Alert variant={status.type}>{status.message}</Alert>}

      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>First Name</Form.Label>
          <Form.Control 
            name="firstName" 
            value={formData.firstName} 
            onChange={handleChange} 
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Last Name</Form.Label>
          <Form.Control 
            name="lastName" 
            value={formData.lastName} 
            onChange={handleChange} 
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Username</Form.Label>
          <Form.Control 
            name="userName" 
            value={formData.userName} 
            onChange={handleChange} 
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control 
            type="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>New Password</Form.Label>
          <Form.Control 
            type="password" 
            name="userPassword" 
            onChange={handleChange} 
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="w-100">
          Save Changes
        </Button>
              
        <div className="text-center">
        <h5 className="text-danger">Danger Zone</h5>
        <Button 
          variant="outline-danger" 
          size="sm" 
          onClick={handleDelete}
          className="w-100"
        >
          Delete My Account
        </Button>
        </div>
      </Form>
      </Card>
    </Container>
  );
}

export default UpdateProfile;