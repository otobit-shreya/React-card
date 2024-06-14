import { useState } from "react";
import { Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import "./JoinRoom.css";

const JoinRoom = () => {
  const [validated, setValidated] = useState(false);
  const [code, setCode] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      console.log("Code entered:", code);
    }

    setValidated(true);
  };

  const handleChange = (event) => {
    setCode(event.target.value);
  };

  return (
    <div className="join-room">
      <Card className="card">
        <Card.Body>
          <Card.Title className="font d-flex justify-content-center">
            JOIN ROOM
          </Card.Title>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Row className="mb-3 mt-4">
              <Form.Group md="4" controlId="validationCustom01">
                <Form.Label className="text-white">Enter Code</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="CODE"
                  value={code}
                  onChange={handleChange}
                />
                <Form.Control.Feedback type="invalid">
                  Please Enter A Valid Code.
                </Form.Control.Feedback>
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Row style={{ padding: "12px" }}>
              <Button type="submit" className="submit-btn mt-1">
                join room
              </Button>
            </Row>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default JoinRoom;
