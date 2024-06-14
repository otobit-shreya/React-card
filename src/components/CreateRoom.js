import React, { useState } from "react";
import { Button, Card, Form, FormGroup } from "react-bootstrap";

const CreateRoom = () => {
  const [values, setValues] = useState({name: '', room:''});

  const handleChange = (e) => {
    setValues(prev =>({...prev,[e.target.name]: e.target.value}));
  }

  const submit = () => {
    console.log(values,'val');
  };

  return (
    <div className="image row m-0 align-items-center">
      <div className="col-6"></div>
      <div className="col-6">
        <Card body className="mx-auto p-2 bg-black text-white" style={{width: '30rem', height: '30rem'}}>
          <Card.Title className="text-center fs-2">Let's play Uno with friends</Card.Title>
          <p className="text-center my-3">To get started, enter your player name and a game room. Other players can join your game with the same room name on their device.</p>
          <FormGroup >
            <Form.Group className="mb-3" controlId="name">
              <Form.Label className="fs-5">Name</Form.Label>
              <Form.Control type="text" name='name' placeholder="Jhon Deo" value={values.name} onChange={handleChange} />
            </Form.Group>
          </FormGroup>
          <FormGroup>
            <Form.Group className="mb-3" controlId="room">
              <Form.Label className="fs-5 text-start">Room Name</Form.Label>
              <Form.Control type="text" placeholder="buddy" name='room' value={values.room} onChange={handleChange} />
              <p className=" mt-1 fs-6" style={{color: 'lightgray'}}>Other players can join using the same room name on their device.</p>
            </Form.Group>
          </FormGroup>
          <Button variant="success" className="w-100" style={{backgroundColor: '#00ab66'}} onClick={() => submit()}>Create Room</Button>
        </Card>
      </div>
    </div>
  );
};

export default CreateRoom;
