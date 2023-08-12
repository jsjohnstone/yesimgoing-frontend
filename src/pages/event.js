import moment from "moment";
import { useParams, Outlet } from "react-router-dom";
import Emoji from 'react-emojis';

export default function Event() {
    const eventId = useParams().eventId;

    const event = {
        name: "Adam and Jamie's Housewarming",
        date: moment().format('ddd, Do MMMM YYYY'),
        time: moment().format('h:mm a'),
        location: "Norbury, London SW16",
        status: 'active'
    };

    return (
        <div className="p-2 m-2 d-flex align-items-center justify-content-center text-center min-vh-100">

            <div id="event">
                <div>
                    <h2><Emoji emoji="house-with-garden"  size="50"/></h2>
                    <h1><b>{event.name}</b></h1>
                    <h3><Emoji emoji="calendar" /> {event.date} @ {event.time}</h3>
                    <h3><Emoji emoji="round-pushpin" /> {event.location}</h3>
                </div>
                <br />
                <hr style={{
                    color: 'black',
                    backgroundColor: 'black',
                    height: 5
                }} />
                <br />
                <Outlet />
            </div>
        </div>
    );
}