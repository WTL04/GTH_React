"use client";
import { useEffect, useState } from "react";

export default function Events() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    async function fetchEvents() {
      // geting data from google sheet through API key
      const apiKey = "AIzaSyCzc_59NjfvKWV3lmc2Y-qyidduRJE9n3Q"; // Replace with your API key
      const sheetId = "1q0REcdn6_wIMYuiHjCR_-CPXI7KBxQNj2_A6JqlXH2g"; // Replace with your sheet ID
      const range = "Sheet1!A2:C"; // Adjust based on your sheet structure

      const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${range}?key=${apiKey}`;

      const response = await fetch(url);
      const data = await response.json();

      // map the data
      const eventsData = data.values.map(([date, eventName, description]) => ({
        date,
        eventName,
        description,
      }));

      setEvents(eventsData);
    }

    fetchEvents();
  }, []);

  return (
    <div>
      <h1>Upcoming Events</h1>
      <div className="flex flex-col border-2 border-indigo-600">
        {events.length === 0 ? (
          <p>Loading events...</p>
        ) : (
          <ul className="flex flex-col">
            {events.map((event, index) => (
              <li className="border-2 border-indigo-600" key={index}>
                <h3>{event.eventName}</h3>
                <p>
                  <strong>Date:</strong> {event.date}
                </p>
                <p>
                  {" "}
                  <strong>Event:</strong>
                  {event.description}
                </p>
                <br /> {/* line break each item */}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
