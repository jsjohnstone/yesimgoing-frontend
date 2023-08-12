import { Button } from 'react-bootstrap';
import { Link } from "react-router-dom";

export default function EventResponse() {

    return (
                <div>
                    <h1><b>So, tell me: are you going?</b></h1>
                    <br />
                    <Link to={`yes`}><Button variant="dark" size="lg">Yes, I'm going!</Button></Link>
                    <Link to={`no`}><Button variant="link">No, I can't make it</Button></Link>


                </div>
    );
}