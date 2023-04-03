import React, { useState, useEffect } from "react"
import { Container, Row, Col, Form, Card, Button } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import "./styles.css"


const Application = () => {
  const [userDetails, setUserDetails] = useState([])

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/1")
      .then(response => response.json())
      .then(json => setUserDetails(json))
  }, [])

  return (
    <Container fluid>
      <Row className="justify-content-center">
        <Col md={8} className="w-100">
          <Form>
            <Form.Group>
              <Row>
                <Col >
                  <Form.Label className="form-label">Name</Form.Label>
                  <Form.Control type="text" value={userDetails.name} className="form-control-read-only" readOnly />
                </Col>
                <Col>
                  <Form.Label className="form-label">Relationship</Form.Label>
                  <Form.Control type="text" value={userDetails.username} className="form-control-read-only" readOnly />
                </Col>
                <Col>
                  <Form.Label className="form-label">Allocated percentage</Form.Label>
                  <Form.Control type="text" value={userDetails.email} className="form-control-read-only" readOnly />
                </Col>
                <Col>
                  <Form.Label className="form-label">Age</Form.Label>
                  <Form.Control type="text" value={userDetails.email} className="form-control-read-only" readOnly />
                </Col>
              </Row>
              <Row className="my-2">
                <Col>
                  <Form.Label className="form-label">Gender</Form.Label>
                  <Form.Control type="text" value={userDetails.phone} className="form-control-read-only" readOnly />
                </Col>
                <Col>
                  <Form.Label className="form-label">Date of Birth</Form.Label>
                  <Form.Control type="text" value={userDetails.website} className="form-control-read-only" readOnly />
                </Col>
                <Col>
                  <Form.Label className="form-label">Email ID</Form.Label>
                  <Form.Control type="text" value={userDetails.name} className="form-control-read-only" readOnly />
                </Col>
                <Col>
                  <Form.Label className="form-label">Alternate Mobile No.</Form.Label>
                  <Form.Control type="text" value={userDetails.name} className="form-control-read-only" readOnly />
                </Col>
              </Row>
              <Row className="my-2">
                <Col md={3}>
                  <Form.Label className="form-label">Current Residence Phone No.</Form.Label>
                  <Form.Control type="text" value={userDetails.name} className="form-control-read-only" readOnly />
                </Col>
                <Col md={3}>
                  <Form.Label className="form-label">Permanent Mobile No.</Form.Label>
                  <Form.Control type="text" value={userDetails.name} className="form-control-read-only" readOnly />
                </Col>
              </Row>
            </Form.Group>
          </Form>
        </Col>
    
      <Col xs={12} md={4} className="d-flex  justify-content-center" >
          <Card className="p-5" style={{marginTop:'10%' ,borderColor:'#F08A5D' , }}>
           
  <Card.Body>
    <Card.Title>Current Address</Card.Title>
    <Card.Text>
      {userDetails.address && (
        <>
          {userDetails.address.street}, {userDetails.address.suite}
          <br />
          {userDetails.address.city}, {userDetails.address.zipcode}
          <br />
          {userDetails.address.geo.lat}, {userDetails.address.geo.lng}
        </>
      )}
    </Card.Text>
  </Card.Body>
</Card>
</Col>
</Row>
</Container>

    );
  }
  
  export default Application;
  
