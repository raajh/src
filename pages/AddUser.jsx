import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Card,
  CardContent,
  TextField,
  Button,
  Typography,
} from "@mui/material";
import Navbar from "../components/Navbar";
import { addUser } from "../services/userService";

function AddUser() {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    city: "",
    state: "",
    pincode: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    try {
      await addUser(formData);

      alert("User added successfully");

      navigate("/users");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Navbar />

      <Container maxWidth="sm" sx={{ mt: 5 }}>
        <Card>
          <CardContent>
            <Typography variant="h4" gutterBottom>
              Add User
            </Typography>

            <TextField
              fullWidth
              margin="normal"
              label="Name"
              name="name"
              onChange={handleChange}
            />

            <TextField
              fullWidth
              margin="normal"
              label="Age"
              name="age"
              onChange={handleChange}
            />

            <TextField
              fullWidth
              margin="normal"
              label="City"
              name="city"
              onChange={handleChange}
            />

            <TextField
              fullWidth
              margin="normal"
              label="State"
              name="state"
              onChange={handleChange}
            />

            <TextField
              fullWidth
              margin="normal"
              label="Pincode"
              name="pincode"
              onChange={handleChange}
            />

            <Button
              variant="contained"
              fullWidth
              sx={{ mt: 2 }}
              onClick={handleSubmit}
            >
              Save
            </Button>
          </CardContent>
        </Card>
      </Container>
    </>
  );
}

export default AddUser;