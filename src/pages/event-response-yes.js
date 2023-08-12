import { Form, Button, ButtonGroup, ToggleButton, Container } from "react-bootstrap";
import { useState, useEffect, } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import { useOutletContext } from "react-router-dom"
import doConfetti from "../helpers/confetti";
import axios from "axios";
import { PulseLoader } from "react-spinners";
import Emoji from 'react-emojis';
import { AddToCalendarButton } from 'add-to-calendar-button-react';


export default function EventResponseYes() {

    const [data] = useOutletContext()
    const eventId = useParams().eventId;

    const FORM_ENDPOINT = `https://api.yesimgoing.to/responses/${eventId}`;

    const [validated, setValidated] = useState(false);
    const [userName, setUserName] = useState()
    const [userMobile, setUserMobile] = useState()
    const [userPlusone, setUserPlusone] = useState(false)
    const [formState, setFormState] = useState("form")

    const handleSubmit = e => {
        const form = e.currentTarget;

        if (form.checkValidity() === false) {
            e.preventDefault()
            e.stopPropagation();
            setValidated(true);
        } else {
            e.preventDefault()
            setValidated(true);
            setFormState("loading")
            axios
                .post(`https://api.yesimgoing.to/responses/${eventId}`, {
                    name: userName,
                    mobile: userMobile,
                    plusone: userPlusone
                })
                .then(response => {
                    setFormState("done")
                    doConfetti();
                })
                .catch(error => {
                    setFormState("error")
                    console.log('error:' + error)
                })
        }
    }

    if (formState == "done") return (
        <div>
            <h1><b><Emoji emoji="party-popper" size="50" /> Nice! {(userPlusone) ? "You (plus your +1) are going!" : "You're going!"}</b></h1>
            Thanks for your RSVP - you've been added to the list. Make sure to add the event to your calendar!
            <br /><br />
            <Container style={{
                flex: 1,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                <AddToCalendarButton
                    name={data.name}
                    startDate={data.date}
                    location={data.location}
                    options={['Apple', 'Google', 'Yahoo', 'iCal']}
                    inline
                    listStyle="modal"
                    lightMode="bodyScheme"

                ></AddToCalendarButton></Container><br />
                If you can no longer attend, let the organiser know!
        </div>
    )

    if (formState == "error") return (
        <div>
            <h1><b><Emoji emoji="cross-mark" size="50" /> Something went wrong...</b></h1>
            Try refresh the page and try again please!
        </div>
    )

    if(formState == "loading") return (
        <div>
            <br /><br />
            <PulseLoader color="black" />
            Just a moment...
            <br /><br />
        </div>
    )

    return (
        <div>
            <h1><b>Exciting!</b> Almost there...</h1><br />
            <Form noValidate validated={validated} action={FORM_ENDPOINT} onSubmit={handleSubmit} method="POST">
                <Form.Group className="mb-3" controlId="name">
                    <Form.Control
                        required
                        name="name"
                        type="text"
                        placeholder="What's your name?"
                        style={{ border: '2px solid black' }}
                        onChange={e => setUserName(e.target.value)}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="mobile">
                    <Form.Control
                        required
                        name="mobile"
                        placeholder="What's your mobile number?"
                        style={{ border: '2px solid black' }}
                        onChange={e => setUserMobile(e.target.value)}
                    />
                </Form.Group>
                <div className="d-grid gap-2">
                    <ButtonGroup className="mb-2">
                        <ToggleButton
                            id="plus1-none"
                            type="radio"
                            variant="outline-dark"
                            name="plusone"
                            value="none"
                            checked={userPlusone === false}
                            onChange={e => setUserPlusone(false)}
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
                            checked={userPlusone === true}
                            onChange={e => setUserPlusone(true)}
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