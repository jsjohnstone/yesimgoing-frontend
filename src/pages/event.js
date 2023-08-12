import { useParams, Outlet } from "react-router-dom";
import Emoji from 'react-emojis';
import PulseLoader from "react-spinners/PulseLoader";
import useAxios from 'axios-hooks'
import { Card } from 'react-bootstrap';
import ErrorBlock from "../components/error";
import moment from "moment";

export default function Event() {

    const eventId = useParams().eventId;

    const [{ data, loading, error }, refetch] = useAxios(
        `https://api.yesimgoing.to/events/${eventId}`
    )

    if (loading) return <PulseLoader color="black" />
    if (error) return <ErrorBlock />

    return (
        <div id="event">
            <Card className="p-3" style={{ border: '2px solid black' }}>
            <Card.Body>
            <div>
                <h2><Emoji emoji={data.icon} size="50" /></h2>
                <h2><b>{data.name}</b></h2>
                <h4><Emoji emoji="calendar" /> {moment(data.date).format('ddd Do MMM YYYY')} @ {data.time}</h4>
                <h4><Emoji emoji="round-pushpin" /> {data.location}</h4>
            </div>
            </Card.Body>
            </Card>
            <br />
            <Outlet  context={[data]} />
        </div>
    );
}