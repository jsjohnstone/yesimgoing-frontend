import { useParams, Outlet } from "react-router-dom";
import Emoji from 'react-emojis';
import PulseLoader from "react-spinners/PulseLoader";
import useAxios from 'axios-hooks'
import ErrorBlock from "../components/error";

export default function Event() {

    const eventId = useParams().eventId;

    const [{ data, loading, error }, refetch] = useAxios(
        `https://api.yesimgoing.to/events/${eventId}`
    )

    if (loading) return <PulseLoader color="black" />
    if (error) return <ErrorBlock />

    return (
        <div id="event">
            <div>
                <h2><Emoji emoji={data.icon} size="50" /></h2>
                <h1><b>{data.name}</b></h1>
                <h4><Emoji emoji="calendar" /> {data.date} @ {data.time}</h4>
                <h4><Emoji emoji="round-pushpin" /> {data.location}</h4>
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
    );
}