import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Calendar, Bell, Download, Eye } from "lucide-react";

export default function Notices() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Academic", "Events", "Examinations", "Administrative", "Sports", "Holidays"];

  const notices = [
    {
      id: 1,
      title: "Annual Sports Day 2024 - Registration Open",
      category: "Sports",
      date: "2024-02-15",
      description: "Registration for Annual Sports Day is now open. All students are encouraged to participate in various athletic events.",
      urgent: true,
      hasAttachment: true
    },
    {
      id: 2,
      title: "Mid-term Examination Schedule Released",
      category: "Examinations",
      date: "2024-02-10",
      description: "The complete schedule for mid-term examinations has been published. Please check the examination timetable for your grade.",
      urgent: false,
      hasAttachment: true
    },
    {
      id: 3,
      title: "Parent-Teacher Meeting - February 2024",
      category: "Events",
      date: "2024-02-08",
      description: "Monthly parent-teacher meeting scheduled for February 25th. Please confirm your attendance with the class teacher.",
      urgent: false,
      hasAttachment: false
    },
    {
      id: 4,
      title: "Science Fair 2024 - Call for Projects",
      category: "Academic",
      date: "2024-02-05",
      description: "Students are invited to submit their science projects for the annual science fair. Submission deadline: March 1st, 2024.",
      urgent: false,
      hasAttachment: true
    },
    {
      id: 5,
      title: "School Closure - National Holiday",
      category: "Holidays",
      date: "2024-02-03",
      description: "School will remain closed on February 12th due to national holiday. Regular classes will resume on February 13th.",
      urgent: true,
      hasAttachment: false
    },
    {
      id: 6,
      title: "New Library Timings",
      category: "Administrative",
      date: "2024-02-01",
      description: "Library timings have been updated. New hours: Monday-Friday 8:00 AM to 6:00 PM, Saturday 9:00 AM to 4:00 PM.",
      urgent: false,
      hasAttachment: false
    },
    {
      id: 7,
      title: "Drama Club Auditions",
      category: "Events",
      date: "2024-01-28",
      description: "Auditions for the annual drama production will be held on February 20th. Interested students should register with the drama teacher.",
      urgent: false,
      hasAttachment: false
    },
    {
      id: 8,
      title: "Computer Lab Maintenance Schedule",
      category: "Administrative",
      date: "2024-01-25",
      description: "Computer labs will undergo maintenance during the first week of March. Alternative arrangements will be made for computer classes.",
      urgent: false,
      hasAttachment: true
    }
  ];

  const filteredNotices = notices.filter(notice => {
    const matchesSearch = notice.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         notice.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || notice.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getCategoryColor = (category: string) => {
    const colors = {
      Academic: "bg-education-blue text-white",
      Events: "bg-education-green text-white",
      Examinations: "bg-education-purple text-white",
      Administrative: "bg-education-orange text-white",
      Sports: "bg-red-500 text-white",
      Holidays: "bg-yellow-500 text-black"
    };
    return colors[category as keyof typeof colors] || "bg-gray-500 text-white";
  };

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="page-title">School Notices</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stay updated with the latest announcements, events, and important information from Excellence High School.
          </p>
        </div>

        {/* Search and Filter */}
        <Card className="content-section mb-8">
          <CardContent className="pt-6">
            <div className="flex flex-col md:flex-row gap-4 items-center">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  type="search"
                  placeholder="Search notices..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Notices Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredNotices.map((notice) => (
            <Card key={notice.id} className={`content-section ${notice.urgent ? 'border-red-500 border-2' : ''}`}>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge className={getCategoryColor(notice.category)}>
                        {notice.category}
                      </Badge>
                      {notice.urgent && (
                        <Badge variant="destructive" className="animate-pulse">
                          Urgent
                        </Badge>
                      )}
                      {notice.hasAttachment && (
                        <Badge variant="outline">
                          📎 Attachment
                        </Badge>
                      )}
                    </div>
                    <CardTitle className="text-lg">{notice.title}</CardTitle>
                    <CardDescription className="flex items-center gap-2 mt-2">
                      <Calendar className="h-4 w-4" />
                      {new Date(notice.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </CardDescription>
                  </div>
                  <Bell className={`h-5 w-5 ${notice.urgent ? 'text-red-500' : 'text-muted-foreground'}`} />
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{notice.description}</p>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline">
                    <Eye className="h-4 w-4 mr-2" />
                    Read More
                  </Button>
                  {notice.hasAttachment && (
                    <Button size="sm" variant="outline">
                      <Download className="h-4 w-4 mr-2" />
                      Download
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* No Results */}
        {filteredNotices.length === 0 && (
          <Card className="content-section text-center py-12">
            <CardContent>
              <Bell className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
              <h3 className="text-lg font-semibold mb-2">No notices found</h3>
              <p className="text-muted-foreground">
                No notices match your current search criteria. Try adjusting your search terms or category filter.
              </p>
            </CardContent>
          </Card>
        )}

        {/* Subscribe for Updates */}
        <Card className="content-section mt-8">
          <CardHeader>
            <CardTitle className="text-center">Stay Updated</CardTitle>
            <CardDescription className="text-center">
              Subscribe to receive email notifications for important school notices and announcements.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input type="email" placeholder="Enter your email address" className="flex-1" />
              <Button variant="educational">
                Subscribe
              </Button>
            </div>
            <p className="text-center text-sm text-muted-foreground mt-4">
              You can unsubscribe at any time. We respect your privacy.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}