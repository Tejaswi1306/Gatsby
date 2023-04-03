import React, { useState, useEffect } from "react"
import { Container, Row, Col, Form, Card, Button } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import "./styles.css"
import { faInr } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Application = () => {
  const [userDetails, setUserDetails] = useState([])

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/1")
      .then(response => response.json())
      .then(json => setUserDetails(json))
  }, [])

  return (

    <Container fluid>
      <Row className="my-2">
        <Col md={8} className="column">
          <Form >
            <Form.Group >
              <Row >

                <Col >
                  <Form.Label className="form-label ">Life Assured Name</Form.Label>
                  <Form.Control type="text" value={userDetails.name} className="form-control-read-only " readOnly />
                </Col>
                <Col>
                  <Form.Label className="form-label">Proposer Name</Form.Label>
                  <Form.Control type="text" value={userDetails.username} className="form-control-read-only" readOnly />
                </Col>
                <Col>
                  <Form.Label className="form-label">SP Code</Form.Label>
                  <Form.Control type="text" value={userDetails.email} className="form-control-read-only" readOnly />
                </Col>
              </Row>
              <Row className="my-2">
                <Col>
                  <Form.Label className="form-label">Hub Name</Form.Label>
                  <Form.Control type="text" value={userDetails.phone} className="form-control-read-only" readOnly />
                </Col>
                <Col>
                  <Form.Label className="form-label">Hub Code</Form.Label>
                  <Form.Control type="text" value={userDetails.website} className="form-control-read-only" readOnly />
                </Col>
                <Col>
                  <Form.Label className="form-label">Bank Name</Form.Label>
                  <Form.Control type="text" value={userDetails.name} className="form-control-read-only" readOnly />
                </Col>
              </Row>
              <Row className="my-2">
                <Col>
                  <Form.Label className="form-label">Selling Branch Name</Form.Label>
                  <Form.Control type="text" value={userDetails.name} className="form-control-read-only" readOnly />
                </Col>
                <Col>
                  <Form.Label className="form-label">ISM Name</Form.Label>
                  <Form.Control type="text" value={userDetails.name} className="form-control-read-only" readOnly />
                </Col>
                <Col>
                  <Form.Label className="form-label">RSM Name</Form.Label>
                  <Form.Control type="text" value={userDetails.name} className="form-control-read-only" readOnly />
                </Col>
              </Row>
              <Row className="my-2">
                <Col>
                  <Form.Label className="form-label">Illustration No</Form.Label>
                  <Form.Control type="text" value={userDetails.name} className="form-control-read-only" readOnly />
                </Col>
                <Col>
                  <Form.Label className="form-label">BR Termination Date</Form.Label>
                  <Form.Control type="text" value={userDetails.name} className="form-control-read-only" readOnly />
                </Col>
                <Col>
                  <Form.Label className="form-label">BR Phone No</Form.Label>
                  <Form.Control type="text" value={userDetails.name} className="form-control-read-only" readOnly />
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Label className="form-label">PVC Accept Indicator</Form.Label>
                  <Form.Control type="text" value={userDetails.name} className="form-control-read-only" readOnly />
                </Col>
                <Col>
                  <Form.Label className="form-label">Selling Branch Code</Form.Label>
                  <Form.Control type="text" value={userDetails.name} className="form-control-read-only" readOnly />
                </Col>
                <Col>
                  <Form.Label className="form-label">Customer ID</Form.Label>
                  <Form.Control type="text" value={userDetails.name} className="form-control-read-only" readOnly />
                </Col>
              </Row>
            </Form.Group>

          </Form>
          <Button className='button' type='submit' style={{ marginTop: '2%' }} variant="outline-warning rounded-pill">
            Back to Search
          </Button>
        </Col>

        <Col md={4}>

          <Card className="shadow  mb-5  d-flex h-99 ">
            <Card.Body>
              <Card.Title className="mb-5" style={{ fontWeight: 'normal', fontSize: '20px' }}>Case Status</Card.Title>
              <Card.Text >
                Underwriting Details
              </Card.Text>
              <div className="mb-5" style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                <div style={{ width: '35px', height: '35px', borderRadius: '50%', backgroundColor: 'white', border: '#F08A5D', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '10px' }}>
                  <FontAwesomeIcon icon={faInr} size="1.5x" color="#F08A5D" />
                </div>
                <p style={{ fontSize: '15px', fontWeight: 'normal', marginBottom: '10px' }}>Policy Underwriting Decision</p>
              </div>
              <Card.Text>Risk Analysis</Card.Text>
              <Row className="form-row" >
                <div className="form-col" >
                  <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                    <div style={{ width: '35px', height: '35px', borderRadius: '50%', backgroundColor: 'white', border: '#F08A5D', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '10px' }}>
                      <FontAwesomeIcon icon={faInr} size="1.5x" color="#F08A5D" />
                    </div>
                    <Form.Label className="form-label-custom">Sum Assured</Form.Label>
                  </div>
                </div>
                <div className="form-col">

                  <Form.Control type="text" value={userDetails.name} className="form-control-custom" readOnly />
                </div>
              </Row>
              <Row className="form-row">
                <div className="form-col">
                  <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                    <div style={{ width: '35px', height: '35px', borderRadius: '50%', backgroundColor: 'white', border: '#F08A5D', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '10px' }}>
                      <FontAwesomeIcon icon={faInr} size="1.5x" color="#F08A5D" />
                    </div>
                    <Form.Label className="form-label-custom">Premium</Form.Label>
                  </div>
                </div>
                <div className="form-col">
                  <Form.Control type="text" value={userDetails.name} className="form-control-custom" readOnly />
                </div>

              </Row>
              <Row className="form-row my-3">
                <div className="form-col">
                  <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                    <div style={{ width: '35px', height: '35px', borderRadius: '50%', backgroundColor: 'white', border: '#F08A5D', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '10px' }}>
                      <FontAwesomeIcon icon={faInr} size="1.5x" color="#F08A5D" />
                    </div>
                    <Form.Label className="form-label-custom">Login Date</Form.Label>
                  </div>
                </div>
                <div className="form-col">
                  <Form.Control type="text" value={userDetails.name} className="form-control-custom" readOnly />
                </div>
              </Row>



            </Card.Body>
          </Card>
        </Col>

      </Row>

    </Container>


  )
}

export default Application
