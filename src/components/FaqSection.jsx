"use client";

import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const faqs = [
  {
    question: "What is EventNexa?",
    answer: "EventNexa is a platform to organize, manage, and scale your events with modern tech.",
  },
  {
    question: "Can I host both physical and virtual events?",
    answer: "Yes, EventNexa supports hybrid, virtual, and in-person events with full flexibility.",
  },
  {
    question: "Is EventNexa free to use?",
    answer: "We offer both free and premium plans. You can start for free and upgrade as needed.",
  },
  {
    question: "How does EventNexa help in attendee engagement?",
    answer: "We provide tools like live chat, Q&A, polls, feedback forms, and more to boost engagement.",
  },
  {
    question: "Can I get analytics after my event ends?",
    answer: "Absolutely! We provide detailed event analytics and attendee insights after every event.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-900 text-white py-20 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-700 rounded-lg overflow-hidden transition-all"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center px-6 py-4 text-left focus:outline-none"
              >
                <span className="font-medium text-lg">{faq.question}</span>
                <span className="text-indigo-400 text-xl">
                  {openIndex === index ? <FaMinus /> : <FaPlus />}
                </span>
              </button>
              <div
                className={`px-6 pb-4 text-gray-300 transition-all duration-300 ease-in-out ${
                  openIndex === index ? "max-h-40 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
                }`}
              >
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
