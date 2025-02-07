"use client";
import { useEffect, useState } from "react";

export default function EventsCardView() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    async function fetchEvents() {
      // geting data from google sheet through API key
      const apiKey = process.env.NEXT_PUBLIC_APIKEY;
      const sheetId = process.env.NEXT_PUBLIC_SHEETID;
      const range = "Future Events!B2:D"; //referencing future events
      const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${range}?key=${apiKey}`;
      console.log(process.env.APIKEY);
      console.log(process.env.SHEETID);

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
      <h1 className="flex items-center justify-center font-bold text-5xl ">
        Special Events
      </h1>

      {/* ADD ANIMATIONS */}
      <div className="flex justify-center items-center ">
        {events.length === 0 ? (
          <p>Loading events...</p>
        ) : (
          <ul className="flex flex-wrap justify-center gap-6 w-full">
            {events.map((event, index) => (
              <li className="p-6" key={index}>
                {/*event.eventName, event.date, event.description*/}
                {/* creating an event card for all events */}
                <div className="w-80 bg-white border border-gray-200 rounded-lg shadow-sm">
                  <div className="bg-indigo-950 rounded-t-lg p-20">
                    <h1 className="text-3xl font-bold flex flex-col justify-center items-center text-white">
                      {event.date}
                    </h1>
                  </div>
                  <div className="p-5">
                    {/* changing text color depending on text*/}
                    <h5
                      className={`mb-2 text-2xl font-bold tracking-tight ${
                        event.eventName === "NO SINH HOẠT"
                          ? "text-red-600"
                          : "text-black"
                      }`}
                    >
                      {event.eventName}
                    </h5>
                    <p className="mb-3 font-normal text-gray-700">
                      {event.description}
                    </p>
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
