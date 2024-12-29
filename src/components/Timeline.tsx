import React from 'react';

export default function Timeline() {
  const events = [
    {
      date: "March 15",
      time: "5:00 PM",
      title: "Check-in & Registration",
      description: "Get your badges and swag"
    },
    {
      date: "March 15",
      time: "7:00 PM",
      title: "Opening Ceremony",
      description: "Keynote speakers and theme announcement"
    },
    {
      date: "March 15",
      time: "8:00 PM",
      title: "Hacking Begins",
      description: "Start building your projects"
    },
    {
      date: "March 17",
      time: "8:00 AM",
      title: "Submissions Due",
      description: "Submit your projects"
    },
    {
      date: "March 17",
      time: "1:00 PM",
      title: "Demo Fair",
      description: "Present your projects to judges"
    },
    {
      date: "March 17",
      time: "4:00 PM",
      title: "Closing Ceremony",
      description: "Winners announced and prizes awarded"
    }
  ];

  return (
    <section id="timeline" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Event Timeline</h2>
        
        <div className="max-w-4xl mx-auto">
          {events.map((event, index) => (
            <div key={index} className="flex gap-8 mb-8">
              <div className="w-32 text-right">
                <div className="text-emerald-500 font-bold">{event.date}</div>
                <div className="text-zinc-400">{event.time}</div>
              </div>
              
              <div className="relative flex-1 bg-zinc-900 rounded-lg p-6">
                <div className="absolute left-0 top-1/2 -translate-x-4 -translate-y-1/2 w-2 h-2 rounded-full bg-emerald-500"></div>
                <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                <p className="text-zinc-400">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}