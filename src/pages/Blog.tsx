
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const blogPosts = [
  {
    id: 1,
    title: "The Future of Healthcare Technology",
    category: "Technology",
    date: "April 15, 2025",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    excerpt: "Exploring emerging technologies that are transforming healthcare delivery and patient care.",
    author: "Dr. Sarah Johnson"
  },
  {
    id: 2,
    title: "Optimizing Hospital Operations",
    category: "Operations",
    date: "April 10, 2025",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    excerpt: "Key strategies for improving efficiency and reducing costs in healthcare facilities.",
    author: "Michael Chen"
  },
  {
    id: 3,
    title: "Digital Health Transformation",
    category: "Digital",
    date: "April 5, 2025",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
    excerpt: "How healthcare organizations can successfully navigate digital transformation.",
    author: "Robert Thompson"
  }
];

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  const filteredPosts = blogPosts.filter(post =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-health-50 to-white pt-24">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Healthcare Insights</h1>
          <p className="text-lg text-gray-700">
            Expert perspectives on healthcare consulting, technology, and industry trends
          </p>
        </div>

        <div className="max-w-xl mx-auto mb-12">
          <Input
            type="search"
            placeholder="Search articles..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full"
          />
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredPosts.map((post) => (
            <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <CardHeader>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-health-600">{post.category}</span>
                  <span className="text-sm text-gray-500">{post.date}</span>
                </div>
                <CardTitle className="text-xl">{post.title}</CardTitle>
                <CardDescription className="text-gray-600">By {post.author}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">{post.excerpt}</p>
                <Button variant="outline" className="w-full">Read More</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
