// player.js

import Card from 'react-bootstrap/Card';

const cardStyle = {
  width: '18rem',
  height: 'Auto',
  borderRadius: '10px',
};

const imageStyle = {
  height: 'auto',
  Width: '18rem',
};

const Player = ({ name, team, nationality, jerseyNumber, age, imageUrl}) => {
  
  return (
    
    <Card style={cardStyle}>
      <img src={imageUrl || 'default-image-url.jpg'} alt ={name || 'unknown'} style={imageStyle} ></img>
    <Card.Body>
      <Card.Title style={{fontSize: '1.5rem', fontWeight: 'bold', color: 'blue',}}>{name || 'unknown'}</Card.Title>
      <Card.Text style={{fontSize: '1rem', fontWeight: 'bold', color: 'green'}}>
      <p>Team: {team || 'unknown'}</p>
      <p>Nationality: {nationality || 'unknown'}</p>
      <p>Jersey Number: {jerseyNumber || 'N/A'}</p>
      <p>Age: {age || 'N/A'}</p>
      </Card.Text>
    </Card.Body>
  </Card>
  );
};

Player.defaultProps = {
  imageUrl: 'default-image-url.jpg',
  name: 'unknown',
  team: 'unknown',
  nationality: 'unknown',
  jerseyNumber: 'N/A',
  age: 'N/A',
};
export default Player;
