import React, { useState, useEffect } from "react";
import { Container, Table, Form, Button, Row, Col, ButtonGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faExpand } from '@fortawesome/free-solid-svg-icons';
import { Link } from "gatsby"
import './rc.css'



const Dropdown = () => {
  const [userDetails, setUserDetails] = useState([]);
  const [selectedOption1, setSelectedOption1] = useState("");
  const [selectedOption2, setSelectedOption2] = useState("");
  const [selectedOption3, setSelectedOption3] = useState("");
  const [selectedOption4, setSelectedOption4] = useState("");
  const [isVisible, setIsVisible] = useState(true);
  const [note, setNote] = useState("")
  const [notesList, setNotesList] = useState([])
  const [showTable, setShowTable] = useState(false);




  const toggleVisible = () => {
    setIsVisible(!isVisible);

  };


  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/1")
      .then((response) => response.json())
      .then((json) => setUserDetails(json));
  }, []);



  const options1 = ["New-Welcome", "Welcome Call Done", "Customer Busy", "No Answer",
    "Customer not available", "Customer not interested", "Not reachable", "Number out of service",
    "Customer overseas", "Incorrect Number", "CRU - Complaint", "Customer not interested - Address not verified",
    "CRU - Incidence", "Not Taken", "Do not call", "Language Barrier", "Third Party Barrier", "Sales Contact Provided",
    "Claim Intimation", "Claim Incidence", "Call Back Request", "Call Closed", "Non Contactable",
    "Call Terminated-Policy Pack Not Received", "Contactable"];
  const options2 =
    ["New", "ALL", "Completed", "Pending", "Lapsed", "Dishonored", "Overdue",
      "Non Contactable", "Engagement", "Engagement-Auto Closed"];
  const options3 = ["BnC - First premium payment", "BnC - Payment dishonor", "BnC - Reinstatement payment",
    "BnC - SI registration status", "BnC - SI rejection reason", "BnC - SMS", "Claims - Intimation", "CRU - Auto-termiation", "CRU - Bank Related", "CRU - CHOICE related",
    "CRU - Dispatch / Deliery", "CRU - Forced selling", "CRU - Forgery", "CRU - High Charges", "CRU - Issues with SP", "CRU - Misselling",
    "CRU - Renewal reminder issue", "CRU - Single Pay", "CRU - Three Years Pay", "CRU - Wrong Premium", "CS -  Do not call", "CS - FPR", "CS - RPR",
    "CS - Updating contact info", "MN - Appointment for medicals", "NB - Free look alteration", "NB - Free look cancellation", "NB - Fund swap",
    "NB - Policy dispatch/RTO", "NB - Proposal status", "NB - Refund status", "NB - Sales illustration", "Others",
    "Others - Board / Fax numbers", "Others - Brochure request", "Others - Career", "Others - Channel Partners / JV",
    "Others - Fund portfolio", "Others - FV related", "Others - Group Insurance", "Others - Plan related", "Others - Tax", "PM - Auto cover continuance",
    "PM - Awaiting funds", "PM - Financial Hardship", "PM - Grace period", "PM - Payment options", "PM - Renewal enquiry", "PM - Vendor collection inquiry",
    "PM - Vendor collection issues", "PS - Assignment", "PS - Change of PH", "PS - Change of Sum Assured", "PS - DoB / Signature / Gender change", "PS - Duplicate policy",
    "PS - Method / Mode", "PS - Name change", "PS - Nomminee / Appointee change", "PS - Physical / geographical changes", "PS - Redirection",
    "PS - Reinstatement", "PS - Surrender", "PS - Switching/MSO", "PS - Top-up", "PS - Unit Statement", "Sales - Lead", "UW - Pending requirements", "UW - Reason for rejection", "Bnc - SI re-debit authorization"];
  const options4 = ["Proposer", "Life Assured", "Others"];

  const handleChangeOption1 = (e) => {
    setSelectedOption1(e.target.value);

  };

  const handleChangeOption2 = (e) => {
    setSelectedOption2(e.target.value);
  };

  const handleChangeOption3 = (e) => {
    setSelectedOption3(e.target.value);
  };

  const handleChangeOption4 = (e) => {
    setSelectedOption4(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault()
    setNotesList([...notesList, note])
    setNote("")
  }

  const [choice1, setChoice1] = useState("");
  const choiceOptions1 = ["Yes", "No", "Not Sure"];
  
  const [choice2, setChoice2] = useState("");
  const choiceOptions2 = ["Yes", "No", "Not Sure"];

  const [choice3, setChoice3] = useState("");
  const choiceOptions3 = ["Yes", "No"];

  const [choice4, setChoice4] = useState("");
  const choiceOptions4 = ["Yes", "No"];

  const [choice5, setChoice5] = useState("");
  const choiceOptions5 = ["Yes", "No", "Not Sure"];
  
  const [choice6, setChoice6] = useState("");
  const choiceOptions6 = ["Yes", "No"];

  const [choice7, setChoice7] = useState("");
  const choiceOptions7 = ["Yes", "No"];

  const handleChoice1Change = (e) => {
    setChoice1(e.target.value);
  };
  
  const handleChoice2Change = (e) => {
    setChoice2(e.target.value);
  };
  
  const handleChoice3Change = (e) => {
    setChoice3(e.target.value);
  };
  
  const handleChoice4Change = (e) => {
    setChoice4(e.target.value);
  };

  const handleChoice5Change = (e) => {
    setChoice5(e.target.value);
  };
  
  const handleChoice6Change = (e) => {
    setChoice6(e.target.value);
  };
  
  const handleChoice7Change = (e) => {
    setChoice7(e.target.value);
  };

  const handleDocumentReceiptClick = (event) => {
    event.preventDefault()
    setShowTable(true)
  }

  return (
    <>

      <Table bordered>
        <thead>
          <tr>
            <th >

            <div className="d-flex align-items-center">
  <p style={{ color: "#F08A5D", marginRight: "10px", marginBottom: "0" }}><b>Call Details</b></p>
  <div className="d-flex justify-content-end align-items-center flex-grow-1">
    <button className="btn btn-link text-dark" onClick={toggleVisible}>
      <FontAwesomeIcon icon={faMinus} />
    </button>
    <button className="btn btn-link text-dark" onClick={toggleVisible}>
      <FontAwesomeIcon icon={faExpand} />
    </button>
  </div>
</div>

            </th>
          </tr>
        </thead>
        <tbody>
          {isVisible && (

            <Container fluid>
              <Table bordered style={{ tableLayout: 'fixed', width: '100%' }}>
                
                <tbody>
                  <tr>
                    <td style={{ width: "10%" }}>Complaint Flag: </td>
                    <td style={{ width: "25%" }}>{userDetails.name}</td>
                    <td style={{ width: "10%", borderColor: "transparent" }}></td>
                    <td style={{ width: "20%", borderColor: "transparent" }}></td>
                    <td style={{ width: "10%", borderColor: "transparent" }}></td>
                    <td style={{ borderRight: '1px solid #ddd'}}></td>

                  </tr>
                  <tr>
                    <td style={{ width: "10%" }}>Type of Call : </td>
                    <td style={{ width: "25%" }}>{userDetails.username}</td>
                    <td style={{ width: "10%" }}>Last Call Date : </td>
                    <td style={{ borderRight: "none" }}>{userDetails.username}</td>
                    <td style={{ width: "10%", borderColor: "transparent" }}></td>
                    <td style={{ borderRight: '1px solid #ddd'}}></td>
                  </tr>

                  <tr>
                    <td style={{ width: "10%" }}>Disposition Status : </td>
                    <td style={{ width: "25%" }}>
                      <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Control
                          as="select"
                          value={selectedOption1}
                          onChange={handleChangeOption1}
                          style={{ marginLeft: '1rem', width: "280px" }}
                        >
                          <option value="" style={{ height: "20%" }}>--Select--</option>
                          {options1.map((option) => (
                            <option key={option} value={option}>
                              {option}
                            </option>
                          ))}
                        </Form.Control>
                      </Form.Group>
                    </td>
                    <td style={{ width: "10%" }}>Call Status : </td>
                    <td >
                      <Form.Group controlId="exampleForm.ControlSelect2">
                        <Form.Control
                          as="select"
                          value={selectedOption2}
                          onChange={handleChangeOption2}
                          style={{ marginLeft: '1rem', width: "210px" }}
                        >
                          <option value="">--Select--</option>
                          {options2.map((option) => (
                            <option key={option} value={option}>
                              {option}
                            </option>
                          ))}
                        </Form.Control>
                      </Form.Group>
                    </td>
                    <td style={{ width: "10%" }}>Behaviour Disposition Status : </td>
                    <td style={{ width: "30%" }}>
                      <Form.Group controlId="exampleForm.ControlSelect3">
                        <Form.Control
                          as="select"
                          value={selectedOption3}
                          onChange={handleChangeOption3}
                          style={{ marginLeft: '1rem', width: "280px" }}
                        >
                          <option value="">--Select--</option>
                          {options3.map((option) => (
                            <option key={option} value={option}>
                              {option}
                            </option>
                          ))}
                        </Form.Control>
                      </Form.Group>
                    </td>
                  </tr>
                  <tr>
                    <td>Customer Role : </td>
                    <td>
                      <Form.Group controlId="exampleForm.ControlSelect4">
                        <Form.Control
                          as="select"
                          value={selectedOption4}
                          onChange={handleChangeOption4}
                          style={{ marginLeft: '1rem', width: "250px" }}
                        >
                          <option value="">--Select--</option>
                          {options4.map((option) => (
                            <option key={option} value={option}>
                              {option}
                            </option>
                          ))}
                        </Form.Control>
                      </Form.Group>
                    </td>
                    <td>Form Notes :</td>
                    <td style={{ borderRight: "none" }}>
                      <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Control as="textarea" rows={1} style={{ marginLeft: '1rem', width: "275%" }} />
                      </Form.Group>
                    </td>
                    <td style={{ width: "10%", borderColor: "transparent" }}></td>
                    <td style={{ borderRight: '1px solid #ddd'}}></td>
                  </tr>
                  <tr>
                    <td>Comment 2 :</td>
                    <td style={{ borderRight: "none" }}>
                      <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Control as="textarea" rows={1} style={{ marginLeft: '1rem', width: "250%" }} />
                      </Form.Group>
                    </td>
                    <td style={{ width: "10%", borderColor: "transparent" }}></td>
                    <td style={{ width: "10%", borderColor: "transparent" }}></td>
                    <td style={{ width: "10%", borderColor: "transparent" }}></td>
                    <td style={{ borderRight: '1px solid #ddd'}}></td>
                  </tr>

                </tbody>
              </Table>
              <Table bordered>
                <tbody>
                  <tr>
                    <td style={{ width: "25%" }}>Contact Update request Status :</td>
                    <td>{userDetails.name}</td>
                  </tr>
                  <tr>
                    <td style={{ width: "25%" }}>Reason For Rejection : </td>
                    <td>{userDetails.name}</td>
                  </tr>
                </tbody>
              </Table>
              <div>
                <Row className="mt-3 d-flex" style={{ marginTop: "2%" }}>
                  <Col md={1} className="align-self-center">
                    <Form.Label>Notes:</Form.Label>
                  </Col>
                  <Col md={9}>
                    <Form onSubmit={handleSubmit}>
                      <Form.Group controlId="note">
                        <Form.Control
                          type="text"
                          placeholder="Enter notes"
                          value={note}
                          onChange={(event) => setNote(event.target.value)}
                        />
                      </Form.Group>
                    </Form>
                  </Col>
                  <Col md={2}>
                    <Button  onClick={handleSubmit} style={{backgroundColor:"#F08A5D", borderColor:"#F08A5D"}}>
                      Add Notes
                    </Button>
                  </Col>
                </Row>

              </div>
              
              <div>
      <div style={{ marginTop: "30px" }}>
        <Link
          to="#"
          style={{ display: "inline-block", fontWeight: "bold", color: "black" }}
          onClick={handleDocumentReceiptClick}
        >
          Document Receipt&gt;&gt;
        </Link>
      </div>
      {showTable && (

              <>
                <p><b> Renewal Premium Notice</b></p>
              <Table bordered style={{width:"100%"}}>
  <thead>
    <tr>
      <td></td>
      <td>Yes</td>
      <td>No</td>
      <td>Not Sure</td>
      <td>NA</td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style={{width:"25%"}}>Renewed Premium Notice Received?</td>
      <td  style={{width:"10%"}}>
        <label className="form-check-custom success">
          <input type="radio" name="radio-21" value="Yes" checked={choice1 === "Yes"} onChange={handleChoice1Change} />
          <span></span>
        </label>
      </td>
      <td style={{width:"10%"}}>
        <label className="form-check-custom danger">
          <input type="radio" name="radio-21" value="No" checked={choice1 === "No"} onChange={handleChoice1Change} />
          <span></span>
        </label>
      </td>
      <td>
        <label className="form-check-custom danger">
          <input type="radio" name="radio-21" value="Not Sure" checked={choice1 === "Not Sure"} onChange={handleChoice1Change} />
          <span></span>
        </label>
      </td>
      <td>
        <label className="form-check-custom danger">
          <input type="radio" name="radio-21" value="Not Sure" checked={choice1 === "Not Sure"} onChange={handleChoice1Change} />
          <span></span>
        </label>
      </td>
    </tr>
    <tr>
      <td>With Aided</td>
      <td>
        <label className="form-check-custom success">
          <input type="radio" name="radio-22" value="Yes" checked={choice2 === "Yes"} onChange={handleChoice2Change} />
          <span></span>
        </label>
      </td>
      <td>
        <label className="form-check-custom danger">
          <input type="radio" name="radio-22" value="No" checked={choice2 === "No"} onChange={handleChoice2Change} />
          <span></span>
        </label>
      </td>
      <td>
        <label className="form-check-custom danger">
          <input type="radio" name="radio-22" value="Not Sure" checked={choice2 === "Not Sure"} onChange={handleChoice2Change} />
          <span></span>
        </label>
      </td>
    </tr>
    {/* <tr>
  <td>Address Change Required?</td>
  <td>
    <label className="form-check-custom success">
      <input type="radio" name="radio-23" value="Yes" checked={choice3 === "Yes"} onChange={handleChoice3Change} />
      <span></span>
    </label>
  </td>
  <td>
    <label className="form-check-custom danger">
      <input type="radio" name="radio-23" value="No" checked={choice3 === "No"} onChange={handleChoice3Change} />
      <span></span>
    </label>
  </td>
  <td style={{display:"flex", flexDirection:"row"}}>
    <b>Land Mark :</b>
    {choice3 === "Yes" && (
      <Form.Group controlId="exampleForm.ControlTextarea1">
        <Form.Control as="textarea" rows={1} style={{ marginLeft: '1rem', width: "280%" }} />
      </Form.Group>
    )}
  </td>
  <td></td>
</tr> */}

<tr>
  <td>Address Change Required?</td>
  <td>
    <label className="form-check-custom success">
      <input type="radio" name="radio-26" value="Yes" checked={choice6 === "Yes"} onChange={handleChoice6Change} />
      <span></span>
    </label>
  </td>
  <td>
    <label className="form-check-custom danger">
      <input type="radio" name="radio-26" value="No" checked={choice6 === "No"} onChange={handleChoice6Change} />
      <span></span>
    </label>
  </td>
  <td style={{display:"flex", flexDirection:"row"}}>
    <b>Land Mark :</b>
    <Form.Group controlId="exampleForm.ControlTextarea1">
      <Form.Control as="textarea" rows={1} style={{ marginLeft: '1rem', width: "280%" }} />
    </Form.Group>
  </td>
</tr>

    
    <tr>
      <td>Customer Contact Change?</td>
      <td>
        <label className="form-check-custom success">
          <input type="radio" name="radio-24" value="Yes" checked={choice4 === "Yes"} onChange={handleChoice4Change} />
          <span></span>
        </label>
      </td>
      <td>
        <label className="form-check-custom danger">
          <input type="radio" name="radio-24" value="No" checked={choice4 === "No"} onChange={handleChoice4Change} />
          <span></span>
        </label>
      </td>
      <td>
       
      </td>
    </tr>
        </tbody>
      </Table>
    
    <p><b>Policy Pack</b></p>
    <Table bordered style={{width:"100%"}}>
  <thead>
    <tr>
      <td></td>
      <td>Yes</td>
      <td>No</td>
      <td>Not Sure</td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style={{width:"25%"}}>Policy Pack Received?</td>
      <td style={{width:"10%"}}>
        <label className="form-check-custom success">
          <input type="radio" name="radio-25" value="Yes" checked={choice5 === "Yes"} onChange={handleChoice5Change} />
          <span></span>
        </label>
      </td>
      <td style={{width:"10%"}}>
        <label className="form-check-custom danger">
          <input type="radio" name="radio-25" value="No" checked={choice5 === "No"} onChange={handleChoice5Change} />
          <span></span>
        </label>
      </td>
      <td>
        <label className="form-check-custom danger">
          <input type="radio" name="radio-25" value="Not Sure" checked={choice5 === "Not Sure"} onChange={handleChoice5Change} />
          <span></span>
        </label>
      </td>
    </tr>
    <tr>
  <td>Address Change Required?</td>
  <td>
    <label className="form-check-custom success">
      <input type="radio" name="radio-26" value="Yes" checked={choice6 === "Yes"} onChange={handleChoice6Change} />
      <span></span>
    </label>
  </td>
  <td>
    <label className="form-check-custom danger">
      <input type="radio" name="radio-26" value="No" checked={choice6 === "No"} onChange={handleChoice6Change} />
      <span></span>
    </label>
  </td>
  <td style={{display:"flex", flexDirection:"row"}}>
    <b>Land Mark :</b>
    <Form.Group controlId="exampleForm.ControlTextarea1" className={choice6 === "Yes" ? "visible" : "hidden"}>
      <Form.Control as="textarea" rows={1} style={{ marginLeft: '1rem', width: "280%" }} />
    </Form.Group>
  </td>
</tr>

    
    <tr>
      <td>Customer Contact Change?</td>
      <td>
        <label className="form-check-custom success">
          <input type="radio" name="radio-27" value="Yes" checked={choice7 === "Yes"} onChange={handleChoice7Change} />
          <span></span>
        </label>
      </td>
      <td>
        <label className="form-check-custom danger">
          <input type="radio" name="radio-27" value="No" checked={choice7 === "No"} onChange={handleChoice7Change} />
          <span></span>
        </label>
      </td>
      <td>
       
      </td>
    </tr>
        </tbody>
      </Table>
   </>
   
             )}
             </div> 
              <div style={{marginTop: "30px"}}><p>Notes Details</p>
{notesList.length > 0 ? (
        <div>
          {notesList.map((note, index) => (
            <div key={index}><b>{note}</b></div>
          ))}
        </div>
      ) : (
        <p><b>Notes are not available</b></p>
      )}
 </div>       
 <div className="d-flex justify-content-center mt-3">
      <Button  className="mx-2" style={{backgroundColor:"#F08A5D", borderColor:"#F08A5D"}}>
        Save
      </Button>
      <Button  className="mx-2" style={{backgroundColor:"#F08A5D", borderColor:"#F08A5D"}}>
        Policy & Client Details
      </Button>
      <Button className="mx-2" style={{backgroundColor:"#F08A5D", borderColor:"#F08A5D"}}>
        Exit 
      </Button>
      <Button  className="mx-2" style={{backgroundColor:"#F08A5D", borderColor:"#F08A5D"}}>
       Call History
      </Button>
      <Button  className="mx-2" style={{backgroundColor:"#F08A5D", borderColor:"#F08A5D"}}>
        Contact Details Update
      </Button>
    </div>       
            </Container>
          )}

        </tbody>
      </Table>

    </>
  );
}



export default Dropdown
