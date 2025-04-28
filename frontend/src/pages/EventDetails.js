import React from 'react';
import { useParams } from 'react-router-dom';

function EventDetails() {
    const params = useParams();

    return (
        <>
            <h1>Create a New Event</h1>
            <p>Event ID: {params.eventId}</p>
        </>
    );
}

export default EventDetails;