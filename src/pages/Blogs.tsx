import { Calendar, Clock, User, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import teaGardenImage from "@/assets/blog-tea-garden.jpg";
import wellnessImage from "@/assets/blog-wellness.jpg";
import ceremonyImage from "@/assets/blog-ceremony.jpg";
import antioxidantsImage from "@/assets/blog-antioxidants.jpg";
import organicImage from "@/assets/blog-organic.jpg";

const blogPosts = [
  {
    id: 1,
    title: "The Benefits of Green Tea for Daily Wellness",
    excerpt: "Discover how incorporating organic green tea into your daily routine can boost your immunity, improve mental clarity, and support overall health.",
    content: "Green tea has been celebrated for centuries for its remarkable health benefits. Rich in antioxidants, particularly catechins and EGCG, green tea supports cardiovascular health, boosts metabolism, and may help protect against certain chronic diseases.",
    author: "Dr. Priya Sharma",
    date: "2024-03-15",
    readTime: "5 min read",
    category: "Wellness",
    image: wellnessImage,
    tags: ["Green Tea", "Health", "Antioxidants", "Wellness"]
  },
  {
    id: 2,
    title: "Sustainable Tea Farming: Our Commitment to the Environment",
    excerpt: "Learn about our eco-friendly farming practices and how we're working with local communities to create a sustainable tea ecosystem.",
    content: "At Organic India, sustainability isn't just a buzzword—it's at the core of everything we do. Our commitment extends from seed to cup, ensuring that every step of our tea production process respects both the environment and the communities we work with.",
    author: "Rajesh Kumar",
    date: "2024-03-10",
    readTime: "7 min read",
    category: "Sustainability",
    image: teaGardenImage,
    tags: ["Sustainability", "Organic", "Farming", "Environment"]
  },
  {
    id: 3,
    title: "The Art of Tea Blending: Creating Perfect Flavor Profiles",
    excerpt: "Go behind the scenes with our tea masters as they craft unique blends that balance flavor, aroma, and wellness benefits.",
    content: "Tea blending is both an art and a science. Our master blenders combine traditional knowledge passed down through generations with modern understanding of flavor chemistry to create teas that not only taste exceptional but also deliver targeted health benefits.",
    author: "Meera Patel",
    date: "2024-03-05",
    readTime: "6 min read",
    category: "Tea Culture",
    image: ceremonyImage,
    tags: ["Tea Blending", "Craftsmanship", "Flavor", "Culture"]
  },
  {
    id: 4,
    title: "Mindful Moments: Creating Your Perfect Tea Ritual",
    excerpt: "Transform your daily tea time into a mindful practice that reduces stress and enhances your connection to the present moment.",
    content: "In our fast-paced world, the simple act of preparing and drinking tea can become a powerful mindfulness practice. Creating a tea ritual helps us slow down, connect with our senses, and find moments of peace in our busy days.",
    author: "Ananya Singh",
    date: "2024-02-28",
    readTime: "4 min read",
    category: "Mindfulness",
    image: ceremonyImage,
    tags: ["Mindfulness", "Ritual", "Stress Relief", "Meditation"]
  },
  {
    id: 5,
    title: "Antioxidant Power: Understanding Green Tea's Health Benefits",
    excerpt: "Dive deep into the science behind green tea's antioxidant properties and how they contribute to long-term health and vitality.",
    content: "Green tea contains powerful antioxidants called polyphenols, particularly EGCG, which help protect cells from damage. These compounds support heart health, brain function, and may even help in weight management and cancer prevention.",
    author: "Dr. Vikram Reddy",
    date: "2024-02-20",
    readTime: "8 min read",
    category: "Health Science",
    image: antioxidantsImage,
    tags: ["Antioxidants", "Science", "EGCG", "Health"]
  },
  {
    id: 6,
    title: "From Farm to Cup: Our Organic Certification Journey",
    excerpt: "Explore the rigorous standards and processes behind our organic certification and what it means for you as a consumer.",
    content: "Our organic certification isn't just a label—it represents a commitment to purity, sustainability, and quality. From soil management to processing, every step is carefully monitored to ensure our teas meet the highest organic standards.",
    author: "Sunita Verma",
    date: "2024-02-15",
    readTime: "6 min read",
    category: "Quality",
    image: organicImage,
    tags: ["Organic", "Certification", "Quality", "Standards"]
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
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
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