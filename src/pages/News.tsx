
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const newsItems = [
  {
    id: 1,
    title: "ThinkFront Health Expands Digital Health Practice",
    date: "April 20, 2025",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    summary: "ThinkFront Health announces expansion of its digital health consulting services to meet growing demand.",
    category: "Company News"
  },
  {
    id: 2,
    title: "New Partnership with Leading Healthcare Network",
    date: "April 18, 2025",
    image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952",
    summary: "Strategic partnership formed to enhance healthcare delivery across the East Coast.",
    category: "Partnerships"
  },
  {
    id: 3,
    title: "Healthcare Innovation Summit 2025",
    date: "April 15, 2025",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    summary: "ThinkFront Health to host annual healthcare innovation summit featuring industry leaders.",
    category: "Events"
  }
];

const News = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  const filteredNews = newsItems.filter(item =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-mint-50 to-white pt-24">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Latest News</h1>
          <p className="text-lg text-gray-700">
            Stay updated with the latest news and announcements from ThinkFront Health
          </p>
        </div>

        <div className="max-w-xl mx-auto mb-12">
          <Input
            type="search"
            placeholder="Search news..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full"
          />
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredNews.map((item) => (
            <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <CardHeader>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-mint-600">{item.category}</span>
                  <span className="text-sm text-gray-500">{item.date}</span>
                </div>
                <CardTitle className="text-xl">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">{item.summary}</p>
                <Button variant="outline" className="w-full">Read More</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;
