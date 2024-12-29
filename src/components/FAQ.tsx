import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What is THack Hackathon?",
    answer: "THack Hackathon is a prestigious coding competition that aims to identify and recognize the top 100 coders. It's a platform where talented developers can showcase their skills, solve challenging problems, and compete for substantial prizes."
  },
  {
    question: "What happens during the hackathon?",
    answer: "During the 48-hour hackathon, participants will work on innovative projects, attend workshops, receive mentorship from industry experts, and compete for prizes worth ₹10,00,000. You'll also get networking opportunities with leading tech companies."
  },
  {
    question: "How do I participate?",
    answer: "To participate, click the 'Participate Now' button and complete the registration form. You'll need to maintain a competitive rank on our platform and demonstrate your coding abilities through various challenges."
  },
  {
    question: "What are the prizes?",
    answer: "The prize pool includes ₹10,00,000 in cash prizes, exclusive job opportunities, mentorship programs, and premium developer tools. Winners also get fast-track interviews with top tech companies."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-6xl font-black text-center mb-16">
            <span className="text-yellow-400">FAQ</span>
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="bg-zinc-900/50 border border-yellow-400/20"
              >
                <button
                  className="w-full px-6 py-4 text-left flex items-center justify-between"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <span className="text-xl font-bold">{faq.question}</span>
                  <ChevronDown 
                    className={`w-5 h-5 text-yellow-400 transition-transform ${
                      openIndex === index ? 'transform rotate-180' : ''
                    }`}
                  />
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-4 text-zinc-400">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}