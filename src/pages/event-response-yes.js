import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useState } from 'react';

export default function EventResponse() {

    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
    
        setValidated(true);
      };

    return (
        <div>
            <h1><b>Exciting!</b> Let's get you on the list...</h1><br />
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Control required type="text" placeholder="What's your name?" />
                    <Form.Control.Feedback type="invalid">Please enter your name.</Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Control required placeholder="What's your mobile number?" />
                    <Form.Control.Feedback type="invalid">Please enter your phone number.</Form.Control.Feedback>
                </Form.Group>
                <div className="d-grid gap-2">
                <Button variant="dark" size="lg" type="submit">
                    Let's go!
                </Button>
                </div>
            </Form>

        </div>
    );
}