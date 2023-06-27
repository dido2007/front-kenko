import React, { useState, useContext } from 'react';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
import loginImage from "../../../Assets/friendship.png"; // Notez cette ligne
import '../../../style.css';
import { Link, useNavigate } from 'react-router-dom';  // Importer le composant Link
import UserContext from '../../../UserContext';  // correct


function LoginCard() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(''); // Nouvel état pour les messages d'erreur
  const [restaurant, setRestaurant] = useState('Kenko');
  const { setUser } = useContext(UserContext);


  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = { email, password, restaurant };

    try {
      const response = await axios.post('https://restaurant.api.hnh.tn/api/auth/login', data, { withCredentials: true });

      if (response.data.error) {
        setErrorMessage(response.data.error); // Mettez à jour le message d'erreur avec la réponse du serveur
      } else {
        console.log('Login successfully');
        setErrorMessage(''); // Effacer le message d'erreur en cas de succès

          // Récupérer les informations de l'utilisateur
          fetch('https://restaurant.api.hnh.tn/api/auth/namedisplay', {
            credentials: 'include'  // pour envoyer les cookies avec la requête
          })
            .then(response => response.json())
            .then(data => {
              // mettre à jour l'état 'user' avec les informations de l'utilisateur
              setUser(data);
            })
            .catch(error => {
              console.error('Error:', error);
            });
  
          // Gérer la redirection en fonction du rôle de l'utilisateur
          if (response.data.role === 'dev') {
            navigate('/admin/homepage');
          } else if (response.data.role === 'client') {
            navigate('/clientHome');
          }
        }
    } catch (error) {
      console.error(error);
      setErrorMessage('An error occurred'); // Mettez à jour le message d'erreur avec une erreur générique
      // handle error
    }
  };

  return (
    <div>
      <img className="image-class" src={loginImage} height={"200px"} alt="card-img" />
      <Card className="projectd-card-view" style={{ backgroundColor: '#0d3445', color: '#fff' }}>
        <Card.Body>
          <Card.Title>Login</Card.Title>
          {errorMessage && <p className="error-message">{errorMessage}</p>} {/* Afficher le message d'erreur s'il existe */}
          <Form onSubmit={handleSubmit}>
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
              Login
            </Button>
            
            <p className="mt-3">
        {/* Remplacer <a> par <Link> */}
        Doesn't have an account? <Link to="/signup">Signup</Link>  
      </p>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}
export default LoginCard;
