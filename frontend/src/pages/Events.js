 import { Link } from "react-router-dom";

 const DUMMY_EVENTS = [
    {
        id: 'e1',
        title: 'Event 1',
        description: 'This is the first event.',
        date: '2023-10-01',
    },
    {
        id: 'e2',
        title: 'Event 2',
        description: 'This is the second event.',
        date: '2023-10-02',
    },
 ];

function Events() {
    return (
        <div>
            <h1>Edit Event</h1>
            <ul>
                {DUMMY_EVENTS.map((event) => (
                    <li key={event.id}>
                    <Link to={event.id}>{event.title}</Link>   
                        <p>{event.description}</p>
                        <p>{event.date}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Events;