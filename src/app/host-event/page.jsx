"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { FaUpload } from "react-icons/fa";

export default function HostEventPage() {
  const router = useRouter();
  const [form, setForm] = useState({
    title: "",
    artist: "",
    category: "Tech",
    description: "",
    location: "Online",
    date: "",
  });
  const [artistImage, setArtistImage] = useState(null);
  const [eventImage, setEventImage] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
const handleSubmit = async (e) => {
  e.preventDefault();

  const formData = new FormData();
  for (const key in form) {
    formData.append(key, form[key]);
  }
  formData.append("artistImage", artistImage);
  formData.append("eventImage", eventImage);

  try {
    await axios.post("/api/events", formData);
    router.push("/dashboard?created=1");
  } catch (err) {
    console.error("Event creation failed", err);
    alert("Something went wrong!");
  }
};

   
  return (
    <div className="h-screen bg-[#0e0f1a] text-white flex items-center justify-center px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-[#181a25] border border-[#2b2e3c] p-6 rounded-lg space-y-5"
      >
        <h2 className="text-2xl font-semibold text-center">🎤 Host Event</h2>

        {["title", "artist", "description"].map((field) => (
          <input
            key={field}
            type="text"
            name={field}
            placeholder={field[0].toUpperCase() + field.slice(1)}
            value={form[field]}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 text-sm rounded-md bg-[#232636] border border-[#343849] focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        ))}

        <div className="grid grid-cols-2 gap-3">
          <select
            name="category"
            onChange={handleChange}
            className="w-full px-3 py-2 text-sm rounded-md bg-[#232636] border border-[#343849]"
          >
            {["Tech", "Music", "Art", "Startup"].map((c) => (
              <option key={c}>{c}</option>
            ))}
          </select>
          <select
            name="location"
            onChange={handleChange}
            className="w-full px-3 py-2 text-sm rounded-md bg-[#232636] border border-[#343849]"
          >
            {["Online", "Delhi", "Mumbai", "Bangalore"].map((l) => (
              <option key={l}>{l}</option>
            ))}
          </select>
        </div>

        <input
          type="date"
          name="date"
          value={form.date}
          onChange={handleChange}
          className="w-full px-3 py-2 text-sm rounded-md bg-[#232636] border border-[#343849]"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {[["Artist Image", setArtistImage, artistImage], ["Event Image", setEventImage, eventImage]].map(
            ([label, setFn, value], idx) => (
              <div key={idx}>
                <label className="block mb-1 text-xs font-medium">{label}</label>
                <label className="flex items-center gap-2 px-3 py-2 bg-[#232636] rounded-md border border-[#343849] cursor-pointer hover:bg-[#2c3044] text-sm">
                  <FaUpload className="text-blue-400" />
                  <span className="truncate">{value ? value.name : `Choose ${label.split(" ")[0]}`}</span>
                  <input
                    type="file"
                    onChange={(e) => setFn(e.target.files[0])}
                    className="hidden"
                    required
                  />
                </label>
              </div>
            )
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 transition px-4 py-2 rounded-md text-sm font-medium"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
