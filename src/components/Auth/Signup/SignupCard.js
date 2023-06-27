import React, { useState } from 'react';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
import loginImage from "../../../Assets/friendship.png"; // Remplacez cela par votre image de signup
import '../../../style.css';
import { Link } from 'react-router-dom';  // Importer le composant Link

function SignupCard() {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [restaurant, setRestaurant] = useState('Kenko'); // Nouvel état pour le restaurant
  const [errorMessage, setErrorMessage] = useState(''); // Nouvel état pour les messages d'erreur

  const validateForm = () => {
    if (firstname === '' || lastname === '' || email === '' || password === '') {
      setErrorMessage('All fields must be filled');
      return false;
    }

    const nameRegex = /^[A-Za-z]+$/;
    if (!firstname.match(nameRegex) || !lastname.match(nameRegex)) {
      setErrorMessage('First Name and Last Name should not contain special characters or numbers');
      return false;
    }

    if (password.length < 6) {
      setErrorMessage('Password should be at least 6 characters');
      return false;
    }

    const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    if (!email.match(emailRegex)) {
      setErrorMessage('Invalid email');
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }

    const data = { firstName: firstname, lastName: lastname, email, password, restaurant };

    try {
      const response = await axios.post('https://restaurant.api.hnh.tn/api/auth/signup', data);

      if (response.data.error) {
        setErrorMessage(response.data.error);
      } else {
        console.log('Signup successfully');
        setErrorMessage('');
      }
    } catch (error) {
      console.error(error);
      setErrorMessage('An error occurred');
    }
  };

  return (
    <div>
      <img className="image-class" src={loginImage} height={"200px"} alt="card-img" />
      <Card className="projectd-card-view" style={{ backgroundColor: '#0d3445', color: '#fff' }}>
        <Card.Body>
          <Card.Title>Signup</Card.Title>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicFirstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control type="text" placeholder="Enter First Name" value={firstname} onChange={(e) => setFirstname(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicLastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="text" placeholder="Enter Last Name" value={lastname} onChange={(e) => setLastname(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicRestaurant">
                <Form.Control type="hidden" name="restaurant" value={restaurant} />
            </Form.Group>


            <Button variant="primary" type="submit">
              Signup
            </Button>
            <p className="mt-3">
              Already have an account? <Link to="/login">Login</Link>
            </p>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}

export default SignupCard;