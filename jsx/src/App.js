
import Name from './Name';
import Price from './Price';
import Description from './Description';
import Image from './Image';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function App() {
  const firstName ="mohamed"
return (
  <>
  <Card style={{ width: '18rem' }}>
      
      <Image/>
      <Card.Body>
          <Name className="card-title"/>
          <Price className="card-text"/>
          <Description className="card-text"/>
      </Card.Body>
    </Card>
    {firstName ? (<> <p className="mt-3">hello, {firstName} !</p><Image/>
        </>) : (<p className="mt-3">hello, there ! (You can provide your name as a variable above the root component)</p>)}
    </>
);
}

export default App;
