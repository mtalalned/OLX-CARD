import Card from 'react-bootstrap/Card';
import './Card.css'

function CARDBODY () {
  return (
    <Card className='Card' style={{ width: '300px' }}>
      <Card.Img className='w-100 border border-0' style={{height: '150px' , borderRadius: '0px'}} src="https://via.placeholder.com/500" />
      <Card.Body>
        <Card.Title>Rs. 980,000</Card.Title>
        <h1>Rs. 980,000</h1>
        <p>Suzuki Mehran VXR Model 2013 better than baleno liana coure</p>
        <p>200,000 km.2013</p>
        <p>Oasis Orchard, Faisalabad</p>
        <p>1 day ago</p>
      </Card.Body>
    </Card>
  );
}

export default CARDBODY