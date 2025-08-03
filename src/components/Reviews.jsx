"use client";

import { motion } from "framer-motion";

const reviews = [
  { name: "Aarav Mehta", role: "Hackathon Organizer", quote: "EventNexa made managing our 500+ participant hackathon seamless!" },
  { name: "Priya Sharma", role: "Student Developer", quote: "Finding relevant tech events and live chat made the experience awesome." },
  { name: "Rahul Das", role: "Community Manager", quote: "Real-time updates and filters are game changers for event hosting." },
  { name: "Simran Kaur", role: "Tech Enthusiast", quote: "User profiles and social auth made it feel like a real social app!" },
  { name: "Mohit Verma", role: "Event Organizer", quote: "Live comment system and RSVP sync helped us engage better." },
  { name: "Sneha Iyer", role: "Open Source Contributor", quote: "Loved how easy it was to find dev meetups with good filters!" },
  { name: "Vikram Joshi", role: "Startup Founder", quote: "Role-based access for team organizers is a brilliant feature." },
  { name: "Ananya Jain", role: "Community Volunteer", quote: "Smooth onboarding with Google sign-in was a breeze." },
  { name: "Kunal Bhatia", role: "Design Lead", quote: "The interface is clean, and transitions feel natural." },
  { name: "Meera Reddy", role: "Engineering Student", quote: "Feels like the modern way to explore and join events!" },
];

export default function Reviews() {
  const duplicated = [...reviews, ...reviews]; // for infinite effect

  return (
    <section className="py-20 bg-gray-900 text-white overflow-hidden">
      <h2 className="text-4xl font-bold text-center mb-10 text-[#5ac8fa]">
        What Our Users Say
      </h2>

      <div className="relative overflow-hidden">
        <motion.div
          className="flex gap-6 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 60,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {duplicated.map((review, idx) => (
            <div
              key={idx}
              className="bg-gray-800 border border-gray-700 p-6 rounded-xl w-96 min-w-[24rem] flex-shrink-0 shadow hover:shadow-lg transition"
            >
              <h4 className="text-lg font-semibold text-[#5ac8fa]">{review.name}</h4>
              <p className="text-sm text-white mb-2">{review.role}</p>
              <p className="text-sm italic text-gray-300">“{review.quote}”</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
