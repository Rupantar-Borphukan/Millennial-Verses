import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getEventById } from '../services/api';
import '../App.css'

const EventDetail = () => {
  const { id } = useParams();
  const [event, setEvent] = useState(null);

  useEffect(() => {
    const fetchEvent = async () => {
      const data = await getEventById(id);
      setEvent(data);
    };
    fetchEvent();
  }, [id]);

  return event ? (
    <div>
      <h1>Knees Ups</h1>
      <p>Party all night with live jamming with most wanted singer</p>
      <p>Date: {event.date}</p>
      <p>Time: {event.time}</p>
      <p>Location: Beltola, Guwahati</p>
      <p>Attendees: 500</p>
    </div>
  ) : (
    <p>Loading...</p>
  );
};

export default EventDetail;
