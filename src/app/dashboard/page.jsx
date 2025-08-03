"use client";

import { useEffect, useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { FiUser } from "react-icons/fi";
import { format } from "date-fns";
import axios from "axios";

const filters = {
  category: ["Tech", "Music", "Art", "Startup"],
  location: ["Online", "Delhi", "Mumbai", "Bangalore"],
  popularity: ["Most Popular", "Trending", "New"],
  date: ["Today", "This Week", "This Month"],
};

const SearchParamBanner = () => {
  const searchParams = useSearchParams();
  const created = searchParams.get("created");

  if (created === "1") {
    return (
      <div className="p-4 bg-green-600 text-white rounded-md text-sm">
        ✅ Event created successfully!
      </div>
    );
  }

  return null;
};

const Dashboard = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("Upcoming");
  const [yourEventType, setYourEventType] = useState("Hosted");
  const [events, setEvents] = useState([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const res = await axios.get("/api/events");
      setEvents(res.data);
    } catch (err) {
      console.error("Failed to load events:", err);
    }
  };

  const renderFilters = () =>
    Object.entries(filters).map(([label, options]) => (
      <select
        key={label}
        className="bg-[#1e1e2a] text-white text-sm rounded px-4 py-2 border border-[#333] focus:outline-none"
      >
        {options.map((opt) => (
          <option key={opt} className="bg-[#1e1e2a] text-white">
            {opt}
          </option>
        ))}
      </select>
    ));

  const renderEvents = () => {
    let filtered = [...events];

    if (activeTab === "Upcoming") {
      filtered = filtered.filter((e) => new Date(e.date) >= new Date());
    } else if (activeTab === "Past") {
      filtered = filtered.filter((e) => new Date(e.date) < new Date());
    }

    return filtered.map((event, i) => (
      <div
        key={event._id || i}
        className="bg-[#1e1e2a] rounded-xl p-4 border border-[#333] shadow-sm"
      >
        <div
          className="h-40 bg-cover bg-center rounded-md mb-3"
          style={{ backgroundImage: `url(${event.eventImage})` }}
        />
        <h3 className="text-lg font-semibold text-white mb-1">{event.title}</h3>
        <p className="text-sm text-gray-400 mb-2">
          {format(new Date(event.date), "PPPp")}
        </p>
        {activeTab === "Upcoming" && (
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm">
            Register Now
          </button>
        )}
      </div>
    ));
  };

  if (!mounted) return null;

  return (
    <div className="bg-[#0f0f1b] min-h-screen px-6 py-10 text-white space-y-10">
      <Suspense fallback={null}>
        <SearchParamBanner />
      </Suspense>

      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full md:w-auto">
          {renderFilters()}
        </div>
        <div className="flex items-center gap-4">
          <button
            onClick={() => router.push("/host-event")}
            className="bg-[#1e1e2a] text-white px-5 py-2 rounded-md border border-[#333] hover:bg-[#2a2a3b]"
          >
            + Host Now
          </button>
          <button
            onClick={() => router.push("/profile")}
            className="p-2 rounded-full bg-[#1e1e2a] border border-[#333] hover:bg-[#2a2a3b]"
          >
            <FiUser size={20} />
          </button>
        </div>
      </div>

      <div className="bg-[#1e1e2a] rounded-xl p-10 shadow-md text-center">
        <h2 className="text-3xl font-bold mb-3 text-white">
          Welcome to <span className="bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text">EventNexa</span>!
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Discover and host amazing events across categories. Stay engaged with
          your passions and explore new communities.
        </p>
      </div>

      <div className="space-y-6">
        <div className="flex gap-4">
          {["Upcoming", "Past", "Your"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2 rounded-md font-medium text-sm transition ${
                activeTab === tab
                  ? "bg-[#4f46e5] text-white"
                  : "bg-[#1e1e2a] border border-[#333] hover:bg-[#2a2a3b] text-white"
              }`}
            >
              {tab} Events
            </button>
          ))}
        </div>

        {activeTab === "Your" && (
          <div className="flex gap-4 mt-4">
            {["Hosted", "Participated"].map((type) => (
              <button
                key={type}
                onClick={() => setYourEventType(type)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition ${
                  yourEventType === type
                    ? "bg-blue-600 text-white"
                    : "bg-[#1e1e2a] border border-[#333] hover:bg-[#2a2a3b] text-white"
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {renderEvents()}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
