import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Ourbenefits = () => {
  return (
    <div>
      <Container className='text-center p-5'>
        <h3 style={{color: "#333333"}}>OUR BENEFITS</h3>
        <em style={{color: "#999999"}}>Luxury AutoStar Rental Services</em>
      <Row className='mt-5'>
        <Col sm lg="4">
            <img src='https://autostar.templines.org/wp-content/uploads/2018/12/as001.jpg' />
            <h5 style={{color: "#333333"}}>Our Customers Always 100% Satisfied</h5>
            <div className='p-2'><img style={{height: "15px"}} src='https://snipboard.io/NRTeph.jpg'/></div>
            <p style={{color: "#666666"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit sed don eiusmod tempor enim minim veniam quis notrud exercitation</p>
        </Col>
        <Col sm lg="4">
            <img src='https://autostar.templines.org/wp-content/uploads/2018/12/as002.jpg' />
            <h5 style={{color: "#333333"}}>We Provide Easier &#38; Faster Bookings</h5>
            <div className='p-2'><img style={{height: "15px"}} src='https://snipboard.io/NRTeph.jpg'/></div>
            <p style={{color: "#666666"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit sed don eiusmod tempor enim minim veniam quis notrud exercitation</p>
        </Col>
        <Col sm lg="4">
            <img src='https://autostar.templines.org/wp-content/uploads/2018/12/as003.jpg' />
            <h5>Your Choice of Any Pickup Location</h5>
            <div className='p-2'><img style={{height: "15px"}} src='https://snipboard.io/NRTeph.jpg'/></div>
            <p style={{color: "#666666"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit sed don eiusmod tempor enim minim veniam quis notrud exercitation</p>
        </Col>
      </Row>
    </Container>
    </div>
  )
}

export default Ourbenefits
