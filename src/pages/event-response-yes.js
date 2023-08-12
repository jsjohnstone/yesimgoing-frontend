import { Form, Button, ButtonGroup, ToggleButton } from "react-bootstrap";
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import useForm from "../helpers/useForm";
import doConfetti from "../helpers/confetti";
import axios from "axios";

export default function EventResponseYes() {

    const eventId = useParams().eventId;

    const FORM_ENDPOINT = `https://api.yesimgoing.to/responses/${eventId}`;

    const [plusoneValue, setPlusoneValue] = useState("none");
    const [validated, setValidated] = useState(false);

    const additionalData = {
        sent: new Date().toISOString(),
        eventId: eventId
    };

    useEffect(() => {
        doConfetti();
      }, []);

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === true) {
            setValidated(true);
            let article = {
                name: "Jamie",
                mobile: "0634343",
                plusone: "one"
            }
            axios.put(`https://api.yesimgoing.to/responses/${eventId}`, article)
            .then(response => this.setState({ updatedAt: response.data.updatedAt }));
        }

        

        
    };

    return (
        <div>
            <h1><b>Exciting!</b> Almost there...</h1><br />
            <Form noValidate validated={validated} action={FORM_ENDPOINT} onSubmit={handleSubmit} method="POST">
                <Form.Group className="mb-3" controlId="name">
                    <Form.Control required name="name" type="text" placeholder="What's your name?" style={{ border: '2px solid black' }} />
                    <Form.Control.Feedback type="invalid">Please enter your name.</Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3" controlId="mobile">
                    <Form.Control required name="mobile" placeholder="What's your mobile number?"  style={{ border: '2px solid black' }} />
                    <Form.Control.Feedback type="invalid">Please enter your phone number.</Form.Control.Feedback>
                </Form.Group>
                <div className="d-grid gap-2">
                <ButtonGroup className="mb-2">
          <ToggleButton
            id="plus1-none"
            type="radio"
            variant="outline-dark"
            name="plusone"
            value="none"
            checked={plusoneValue === "none"}
            onChange={(e) => setPlusoneValue(e.currentTarget.value)}
            style={{ border: '2px solid black' }}
          >
            Just me!
          </ToggleButton>
          <ToggleButton
            id="plus1-one"
            type="radio"
            variant="outline-dark"
            name="plusone"
            value="one"
            checked={plusoneValue === "one"}
            onChange={(e) => setPlusoneValue(e.currentTarget.value)}
            style={{ border: '2px solid black' }}
          >
            Bringing a +1
          </ToggleButton>
      </ButtonGroup></div><br />
                <div className="d-grid gap-2">
                    <Button variant="dark" size="lg" type="submit">
                        Let's go!
                    </Button>
                </div>
            </Form>

        </div>
    );
}