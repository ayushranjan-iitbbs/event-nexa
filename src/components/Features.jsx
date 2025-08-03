"use client";

const features = [
  {
    title: "Real-time Updates",
    desc: "All event lists and RSVPs update live using WebSockets. Everyone sees changes instantly.",
  },
  {
    title: "Live Comments",
    desc: "Registered users can comment on event pages with live updates for new replies.",
  },
  {
    title: "User Profiles",
    desc: "Editable user profiles with photo upload, skills/interests, and bio.",
  },
  {
    title: "Search & Filters",
    desc: "Filter events by category, date, location, or popularity with a responsive search bar.",
  },
  {
    title: "Role-based Access",
    desc: "Organizers can moderate comments and manage participation. Participants RSVP and engage.",
  },
  {
    title: "Social Authentication",
    desc: "Login with Google or GitHub, or use traditional email/password authentication.",
  },
];

export default function Features() {
  return (
    <section className="py-24 px-6 bg-[#0f1115] text-white">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-20">
        Why <span className="text-white">Event</span><span className="text-[#5ac8fa]">Nexa</span>?
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {features.map(({ title, desc }, index) => (
          <div
            key={index}
            className="bg-[#1c1f26] p-8 rounded-2xl border border-[#2d2f35] shadow-lg min-h-[260px] flex flex-col justify-start hover:border-[#5ac8fa] hover:shadow-[0_0_20px_#5ac8fa60] transition duration-300"
          >
            <h3 className="text-2xl font-semibold mb-4 text-[#5ac8fa]">{title}</h3>
            <p className="text-gray-300 text-base leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
