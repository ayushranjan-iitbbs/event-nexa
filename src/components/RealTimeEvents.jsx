"use client";

import { useEffect, useState } from "react";
import { io } from "socket.io-client";

let socket;

export default function RealTimeEvents() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("/api/socket"); // start socket.io server

    socket = io(undefined, {
      path: "/api/socket_io",
    });

    socket.on("connect", () => {
      console.log("🟢 Connected to Socket.IO");
    });

    socket.on("new_event", (event) => {
      setEvents((prev) => [event, ...prev]);
    });

    return () => socket.disconnect();
  }, []);

  return (
    <div>
      {events.map((e, idx) => (
        <div key={idx} className="bg-gray-800 p-4 rounded mb-4">
          <h2 className="text-lg font-bold">{e.title}</h2>
          <p>{e.description}</p>
          <img src={e.eventImage} alt="event" className="w-full h-40 object-cover mt-2" />
        </div>
      ))}
    </div>
  );
}
