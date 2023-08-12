import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useState } from 'react';
import useForm from "../useForm";
import confetti from "canvas-confetti";

const FORM_ENDPOINT = "https://www.toptal.com/developers/postbin/1691846529020-0999436022248";

export default function EventResponseYes() {

    const additionalData = {
        sent: new Date().toISOString(),
    };

    const { handleSubmit, status, message } = useForm({
        additionalData,
    });

    const [validated, setValidated] = useState(false);

    var count = 200;
    var defaults = {
        origin: { y: 0.7 }
    };

    function fire(particleRatio, opts) {
        confetti(Object.assign({}, defaults, opts, {
            particleCount: Math.floor(count * particleRatio)
        }));
    }

    fire(0.25, {
        spread: 26,
        startVelocity: 55,
    });
    fire(0.2, {
        spread: 60,
    });
    fire(0.35, {
        spread: 100,
        decay: 0.91,
        scalar: 0.8
    });
    fire(0.1, {
        spread: 120,
        startVelocity: 25,
        decay: 0.92,
        scalar: 1.2
    });
    fire(0.1, {
        spread: 120,
        startVelocity: 45,
    });

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
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Control required type="text" placeholder="What's your name?" />
                    <Form.Control.Feedback type="invalid">Please enter your name.</Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Control required placeholder="What's your mobile number?" />
                    <Form.Control.Feedback type="invalid">Please enter your phone number.</Form.Control.Feedback>
                </Form.Group>
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