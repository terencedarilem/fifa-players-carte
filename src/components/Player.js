import React from 'react';
import Card from 'react-bootstrap/Card'; // Assurez-vous que ce chemin est correct
import 'bootstrap/dist/css/bootstrap.min.css'; // Assurez-vous que ce chemin est correct

const Player = ({ name, position, image }) => {
  return (
    <Card style={{ width: '18rem', margin: '1rem' }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{position}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Player;
