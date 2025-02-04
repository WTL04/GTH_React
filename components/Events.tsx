"use client";
import { useEffect, useState } from "react";

export default function Events() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    async function fetchEvents() {
      // geting data from google sheet through API key
      const apiKey = "AIzaSyCzc_59NjfvKWV3lmc2Y-qyidduRJE9n3Q";
      const sheetId = "1q0REcdn6_wIMYuiHjCR_-CPXI7KBxQNj2_A6JqlXH2g";
      const range = "Future Events!B2:D"; //referencing future events
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
    <div className="bg-gray-100 pt-8">
      <h1 className="flex items-center justify-center text-5xl ">
        Upcoming Events
      </h1>

      {/* ADD ANIMATIONS */}
      <div className="flex flex-col space-y-6">
        {events.length === 0 ? (
          <p>Loading events...</p>
        ) : (
          <ul className="flex flex-col">
            {events.map((event, index) => (
              <li className="p-10 flex items-center justify-center" key={index}>
                {/*event.eventName, event.date, event.description*/}
                {/* creating an event card for all events */}
                <div className="w-3/5 bg-white shadow-lg rounded-lg p-4 mb-4 flex">
                  <div className="bg-indigo-950 w-32 h-32 object-cover rounded-lg mr-4 flex items-center justify-center">
                    <h3 className="text-3xl text-white text-center font-semibold">
                      {event.date}
                    </h3>
                  </div>
                  <div>
                    <div className="flex items-center mb-2">
                      <h2 className="text-xl font-semibold text-red">
                        {event.eventName}
                      </h2>
                    </div>
                    <p className="text-2xl">{event.description}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
