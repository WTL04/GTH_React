"use client";

import { useEffect, useState } from "react";
import LeaderCard from "../components/LeaderCard";

interface Leader {
  title: string;
  name: string;
  role: string;
}

export default function AboutLeaders() {
  const [images, setImages] = useState<string[]>([]);
  const [leaders, setLeaders] = useState<Leader[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        // Fetch images from API
        const imagePromise = fetch("/api/headshots").then((response) =>
          response.json(),
        );

        // pulling API from HT Roaster, getting names
        const apiKey = process.env.NEXT_PUBLIC_APIKEY;
        const sheetId = process.env.NEXT_PUBLIC_SHEETID;
        const namesRange = "HT Roster!A2:C"; // Make sure range matches the columns you're expecting
        const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${namesRange}?key=${apiKey}`;
        const eventPromise = fetch(url).then((response) => response.json());

        // Run both fetches in parallel
        const [imageData, eventData] = await Promise.all([
          imagePromise,
          eventPromise,
        ]);

        // Process the results
        setImages(imageData);

        const leaderData: Leader[] = eventData.values.map(
          ([title, name, role]: string[]) => ({
            title,
            name,
            role,
          }),
        );
        setLeaders(leaderData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);
  return (
    <>
      <div>
        <h1 className="flex item-center justify-center text-5xl font-bold mt-80">
          Meet The Team
        </h1>

        <div className="flex flex-wrap item-center justify-center">
          {leaders.map((leader, index) => (
            <div className="flex flex-row" key={index}>
              {/* leader.title, leader.name, leader.role*/}
              <LeaderCard
                image={images[index]}
                rank={leader.role}
                name={(leader.title, leader.name)}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
