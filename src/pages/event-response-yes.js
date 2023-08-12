import { Form, Button, ButtonGroup, ToggleButton } from "react-bootstrap";
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import useForm from "../useForm";
import doConfetti from "../helpers/confetti";

const FORM_ENDPOINT = "https://www.toptal.com/developers/postbin/1691846529020-0999436022248";

export default function EventResponseYes() {

    const eventId = useParams().eventId;

    const [plusoneValue, setPlusoneValue] = useState("none");
    const [validated, setValidated] = useState(false);

    const additionalData = {
        sent: new Date().toISOString(),
        eventId: eventId
    };

    const { handleSubmit, status, message } = useForm({
        additionalData,
    });

    useEffect(() => {
        doConfetti();
      }, []);

    // const handleSubmit = (event) => {
    //     const form = event.currentTarget;
    //     if (form.checkValidity() === false) {
    //         event.preventDefault();
    //         event.stopPropagation();
    //     }

    //     setValidated(true);
    // };

    return (
        <div>
            <h1><b>Exciting!</b> Let's get you on the list...</h1><br />
            <Form noValidate validated={validated} action={FORM_ENDPOINT} onSubmit={handleSubmit} method="POST">
                <Form.Group className="mb-3" controlId="name">
                    <Form.Control required name="name" type="text" placeholder="What's your name?" />
                    <Form.Control.Feedback type="invalid">Please enter your name.</Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3" controlId="mobile">
                    <Form.Control required name="mobile" placeholder="What's your mobile number?" />
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
          >
            Bringing a +1
          </ToggleButton>
      </ButtonGroup></div><br />
                {status !== "loading" && (
                <div className="d-grid gap-2">
                    <Button variant="dark" size="lg" type="submit">
                        Let's go!
                    </Button>
                </div>
                )}
            </Form>

        </div>
    );
}