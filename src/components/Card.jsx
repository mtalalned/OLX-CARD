import Card from 'react-bootstrap/Card';

function CARDBODY ({price , description , totalRunning , model , location , adPosted , imgsrc}) {
  return (
    <Card className='Card px-0' style={{ width: '300px' }}>
      <Card.Img className='w-100 border border-0' style={{height: '150px' , borderRadius: '0px'}} src="https://via.placeholder.com/500" />
      <Card.Body className='px-3 d-flex flex-column'>
        <div className='d-flex justify-content-between'>
        <h6 className='fw-bold'>Rs. 980,000</h6>
        <h5><i class="fa-regular fa-heart"></i></h5>
        </div>
        <p>Suzuki Mehran VXR Model 2013 better than baleno liana coure</p>
        <div>
        <p className='fw-bold d-flex justify-content-start align-items-center gap-1' style={{fontSize: '0.75rem'}}><i class="fa-solid fa-gauge-high"></i>200,000 km <i class="fas fa-dot-circle" style={{fontSize: '2.5px'}}></i> 2013</p>
        <p style={{fontSize: '0.90rem', marginTop:'-15px'}}>Oasis Orchard, Faisalabad</p>
        <p style={{fontSize: '0.75rem' , marginTop: '-15px' , marginBottom: '0px'}}>1 week ago</p>
        </div>
      </Card.Body>
    </Card>
  );
}

export default CARDBODY