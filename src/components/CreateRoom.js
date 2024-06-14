import React from 'react'
import { Form, FormGroup } from 'react-bootstrap'

const CreateRoom = () => {
  return (
    <div className="image">
      <FormGroup> 
      <Form.Group className="mb-3" controlId="name">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Jhon Deo" />
      </Form.Group>
      </FormGroup>
    </div>
  )
}

export default CreateRoom