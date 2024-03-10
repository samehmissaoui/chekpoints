
import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Card from 'react-bootstrap/Card';

class Profile extends React.Component {
 state={
  person:{
    name:'mohamed',
    bio:'I love photography',
    img:'https://iso.500px.com/wp-content/uploads/2021/08/Hobby-photographer-waiting-for-beautiful-sunset-By-Jarom%C3%ADr-Chalabala-2-1500x1000.jpg',
    profession:'Photographer'
  },
show : false,
time: 0,
 };
//  modifier l'affichage du profil
 handleShowPerson = () => {
  this.setState((prevState) => ({
    show: !prevState.show,
  }));
};
// start time and set interval time
componentDidMount() {
 this.timerId= setInterval(() => {
   this.setState((prevState) => ({ time: prevState.time + 1,}));
 }, 1000);
}
render() {
    const profileStyle = {
      width: '18rem',
      margin: 'auto',
      marginTop: '20px',
      padding: '10px',
      boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
      backgroundColor: 'white',
    };
    const timeStyle = {
      fontSize: '18px',
      color: 'red',
    };
    const cardTextStyle= {
      fontStyle: 'italic',
      color: 'blue',
    };
    const cardTitleStyle = {
      fontSize: '24px',
      fontWeight: 'bold',
      color: 'green',
      
    };
    const buttonStyle = {
      width: '100%',
      backgroundColor:'blue',
      color:'white',
      padding: '10px',
    };
  return ( 
    <div style={profileStyle}>
      {this.state.show && (
        <div>
    <p><img  src={this.state.person.img} alt={this.state.person.name} width={250}/></p>
    <div>
      <Card.Title style={cardTitleStyle} >I am {this.state.person.name}</Card.Title>
      <Card.Text style={cardTextStyle}>
      <p>I am a {this.state.person.profession}</p>
      <p>{this.state.person.bio}</p>
     
      </Card.Text>
       
    </div>
     
  </div>)}
  <button class="btn btn-block btn-primary" style={buttonStyle} onClick={this.handleShowPerson}>
           {this.state.show ? 'Hide Profile' : 'Show Profile'}
         </button>
         <div style={timeStyle}>
   <h1>{this.state.time} Seconds</h1>
  </div> 
  </div>
  
  );}}

  

  export default Profile;