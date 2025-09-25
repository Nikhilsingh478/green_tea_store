import { Calendar, Clock, User, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";

const blogPosts = [
  {
    id: 1,
    title: "The Ultimate Guide to Green Tea: Benefits and Brewing Tips",
    excerpt: "Discover the incredible health benefits of green tea and learn the art of brewing the perfect cup. From antioxidants to metabolism boosting properties...",
    content: "Green tea has been cherished for centuries, not just for its delicate flavor but for its remarkable health benefits. Rich in catechins and EGCG, green tea offers powerful antioxidant properties that can help protect your cells from damage...",
    author: "Dr. Priya Sharma",
    date: "2024-03-15",
    readTime: "8 min read",
    category: "Health & Wellness",
    image: "/api/placeholder/600/300",
    tags: ["Green Tea", "Health", "Antioxidants", "Brewing"]
  },
  {
    id: 2,
    title: "Ayurvedic Herbs in Modern Times: Traditional Wisdom Meets Science",
    excerpt: "Explore how ancient Ayurvedic herbs like Tulsi, Ashwagandha, and Turmeric are being validated by modern scientific research...",
    content: "Ayurveda, the ancient Indian system of medicine, has been using herbs for over 5,000 years. Today, modern science is catching up and validating many of these traditional practices...",
    author: "Raj Patel",
    date: "2024-03-12",
    readTime: "6 min read",
    category: "Ayurveda",
    image: "/api/placeholder/600/300",
    tags: ["Ayurveda", "Herbs", "Traditional Medicine", "Science"]
  },
  {
    id: 3,
    title: "Organic vs Conventional: Why Organic Tea Makes a Difference",
    excerpt: "Learn about the impact of organic farming on tea quality, environmental sustainability, and your health. Understanding certifications and what they mean...",
    content: "The difference between organic and conventional tea goes beyond just the absence of pesticides. Organic tea farming practices contribute to soil health, biodiversity, and produce tea with superior flavor profiles...",
    author: "Maya Krishnan",
    date: "2024-03-10",
    readTime: "5 min read",
    category: "Sustainability",
    image: "/api/placeholder/600/300",
    tags: ["Organic", "Sustainability", "Environment", "Quality"]
  },
  {
    id: 4,
    title: "Stress Relief Through Herbal Teas: Your Natural Wellness Toolkit",
    excerpt: "Chamomile, Lavender, and Lemon Balm - discover how these gentle herbs can help you unwind and find peace in your daily routine...",
    content: "In our fast-paced world, finding natural ways to manage stress is more important than ever. Herbal teas offer a gentle, effective way to promote relaxation and mental well-being...",
    author: "Dr. Anjali Mehta",
    date: "2024-03-08",
    readTime: "7 min read",
    category: "Wellness",
    image: "/api/placeholder/600/300",
    tags: ["Stress Relief", "Herbal Tea", "Wellness", "Mental Health"]
  },
  {
    id: 5,
    title: "The Journey from Garden to Cup: How Our Teas Are Sourced",
    excerpt: "Take a behind-the-scenes look at our sourcing process, from working directly with farmers to ensuring fair trade practices and quality control...",
    content: "Every cup of tea tells a story that begins in carefully tended gardens across India. Our commitment to direct sourcing means building lasting relationships with farmers and ensuring fair compensation...",
    author: "Organic India Team",
    date: "2024-03-05",
    readTime: "9 min read",
    category: "Sourcing",
    image: "/api/placeholder/600/300",
    tags: ["Sourcing", "Fair Trade", "Farmers", "Quality"]
  },
  {
    id: 6,
    title: "Seasonal Wellness: Choosing the Right Tea for Every Season",
    excerpt: "Learn how to align your tea choices with seasonal changes. From warming spices in winter to cooling herbs in summer...",
    content: "Ayurveda teaches us to live in harmony with the seasons, and our tea choices can be an important part of this practice. Each season brings its own energy and challenges...",
    author: "Kavita Singh",
    date: "2024-03-02",
    readTime: "6 min read",
    category: "Seasonal Wellness",
    image: "/api/placeholder/600/300",
    tags: ["Seasonal", "Ayurveda", "Wellness", "Balance"]
  }
];

export default function Blogs() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 py-16">
        <div className="container mx-auto container-padding">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/')}
            className="mb-6 hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Button>
          
          <div className="max-w-3xl">
            <h1 className="font-display text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Wellness & Tea Blog
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Discover the world of organic teas, wellness tips, and the ancient wisdom of Ayurveda. 
              Our experts share insights on living naturally and mindfully.
            </p>
          </div>
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="container mx-auto container-padding py-16">
        <div className="grid lg:grid-cols-2 gap-8">
          {blogPosts.map((post) => (
            <Card key={post.id} className="group cursor-pointer hover:shadow-organic transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm">
              <div className="aspect-[16/9] bg-gradient-to-br from-primary/10 to-secondary/10 rounded-t-lg overflow-hidden">
                <div className="w-full h-full bg-muted flex items-center justify-center">
                  <div className="text-center space-y-2">
                    <div className="w-16 h-16 bg-primary/20 rounded-full mx-auto flex items-center justify-center">
                      <span className="text-2xl">🍃</span>
                    </div>
                    <p className="text-sm text-muted-foreground">Blog Image</p>
                  </div>
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Badge variant="secondary" className="text-xs">
                    {post.category}
                  </Badge>
                  <div className="flex items-center text-xs text-muted-foreground gap-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {new Date(post.date).toLocaleDateString('en-US', { 
                        month: 'short', 
                        day: 'numeric', 
                        year: 'numeric' 
                      })}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {post.readTime}
                    </div>
                  </div>
                </div>
                
                <h3 className="font-display text-xl font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 line-clamp-3 leading-relaxed">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                      <User className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-sm font-medium">{post.author}</span>
                  </div>
                  
                  <Button variant="ghost" className="text-primary hover:text-primary/80">
                    Read More →
                  </Button>
                </div>
                
                <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-border">
                  {post.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Load More Button */}
        <div className="text-center mt-12">
          <Button variant="outline" className="px-8 py-3">
            Load More Articles
          </Button>
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5 py-16">
        <div className="container mx-auto container-padding text-center">
          <h2 className="font-display text-2xl lg:text-3xl font-bold mb-4">
            Stay Updated with Wellness Tips
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest articles on tea, wellness, and healthy living.
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border border-border bg-background"
            />
            <Button className="px-6 py-3">
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}