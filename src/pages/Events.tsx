
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

const events = [
  {
    id: 1,
    title: "Healthcare Innovation Summit 2025",
    date: "May 15-16, 2025",
    location: "Boston Convention Center",
    image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04",
    description: "Join industry leaders for two days of insights into healthcare innovation.",
    type: "Conference"
  },
  {
    id: 2,
    title: "Digital Health Transformation Workshop",
    date: "May 20, 2025",
    location: "Virtual Event",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    description: "Interactive workshop on implementing digital health solutions.",
    type: "Workshop"
  },
  {
    id: 3,
    title: "Healthcare Leadership Symposium",
    date: "June 5, 2025",
    location: "New York Marriott Marquis",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    description: "Executive forum on healthcare leadership strategies.",
    type: "Symposium"
  }
];

const Events = () => {
  const [filter, setFilter] = useState("all");
  
  const filteredEvents = filter === "all" 
    ? events 
    : events.filter(event => event.type.toLowerCase() === filter.toLowerCase());

  return (
    <div className="min-h-screen bg-gradient-to-br from-health-50 to-mint-50 pt-24">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Upcoming Events</h1>
          <p className="text-lg text-gray-700">
            Join us at our upcoming events and stay connected with healthcare industry leaders
          </p>
        </div>

        <div className="flex justify-center gap-4 mb-12">
          <Button
            variant={filter === "all" ? "default" : "outline"}
            onClick={() => setFilter("all")}
          >
            All Events
          </Button>
          <Button
            variant={filter === "conference" ? "default" : "outline"}
            onClick={() => setFilter("conference")}
          >
            Conferences
          </Button>
          <Button
            variant={filter === "workshop" ? "default" : "outline"}
            onClick={() => setFilter("workshop")}
          >
            Workshops
          </Button>
          <Button
            variant={filter === "symposium" ? "default" : "outline"}
            onClick={() => setFilter("symposium")}
          >
            Symposiums
          </Button>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredEvents.map((event) => (
            <Card key={event.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-48 object-cover"
              />
              <CardHeader>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-health-600">{event.type}</span>
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar className="w-4 h-4 mr-1" />
                    {event.date}
                  </div>
                </div>
                <CardTitle className="text-xl">{event.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-2">{event.description}</p>
                <p className="text-sm text-gray-600 mb-4">📍 {event.location}</p>
                <Button className="w-full bg-health-600 hover:bg-health-700">Register Now</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;
