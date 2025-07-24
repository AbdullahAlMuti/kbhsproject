import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Users, Award, BookOpen, Bell, GraduationCap } from "lucide-react";
import schoolBuilding from "@/assets/school-building.jpg";
import studentsClassroom from "@/assets/students-classroom.jpg";

export default function Home() {
  const stats = [
    { icon: Users, label: "Students", value: "1,200+" },
    { icon: BookOpen, label: "Teachers", value: "75+" },
    { icon: Award, label: "Awards", value: "50+" },
    { icon: GraduationCap, label: "Years", value: "38+" },
  ];

  const recentNotices = [
    { title: "Annual Sports Day - Registration Open", date: "2024-02-15", type: "Event" },
    { title: "Mid-term Examination Schedule Released", date: "2024-02-10", type: "Academic" },
    { title: "Parent-Teacher Meeting", date: "2024-02-08", type: "Meeting" },
    { title: "Science Fair 2024 - Call for Projects", date: "2024-02-05", type: "Competition" },
  ];

  const quickAccess = [
    { title: "Student Portal", description: "Access grades, assignments, and schedules", link: "/students", color: "bg-education-blue" },
    { title: "Teacher Resources", description: "Teaching materials and staff information", link: "/teachers", color: "bg-education-green" },
    { title: "Parent Gateway", description: "Monitor your child's progress", link: "/guardian", color: "bg-education-purple" },
    { title: "Alumni Network", description: "Connect with graduates", link: "/alumni", color: "bg-education-orange" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${schoolBuilding})` }}
        >
          <div className="absolute inset-0 hero-gradient opacity-90"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Welcome to Excellence High School
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Empowering minds, building futures, and creating tomorrow's leaders through 
            quality education and character development.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="hero" asChild>
              <Link to="/about">Discover Our School</Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10 text-white border-white hover:bg-white hover:text-primary" asChild>
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-4 rounded-full primary-gradient">
                    <stat.icon className="h-8 w-8 text-white" />
                  </div>
                </div>
                <h3 className="text-3xl font-bold text-primary mb-2">{stat.value}</h3>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Welcome Message */}
            <div className="lg:col-span-2 space-y-8">
              <Card className="content-section">
                <CardHeader>
                  <CardTitle className="text-2xl">About Excellence High School</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-6 items-center">
                    <div>
                      <p className="text-muted-foreground leading-relaxed">
                        Established in 1985, Excellence High School has been a beacon of quality education 
                        for over three decades. We are committed to nurturing young minds and developing 
                        well-rounded individuals who will contribute positively to society.
                      </p>
                      <p className="text-muted-foreground leading-relaxed mt-4">
                        Our dedicated faculty, modern facilities, and comprehensive curriculum ensure that 
                        every student receives the best possible education in a supportive and inspiring environment.
                      </p>
                      <Button className="mt-4" variant="educational" asChild>
                        <Link to="/about">Learn More About Us</Link>
                      </Button>
                    </div>
                    <div>
                      <img 
                        src={studentsClassroom} 
                        alt="Students in classroom" 
                        className="rounded-lg shadow-card-educational w-full h-64 object-cover"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Access Cards */}
              <div className="grid md:grid-cols-2 gap-6">
                {quickAccess.map((item, index) => (
                  <Card key={index} className="content-section hover:scale-105">
                    <CardHeader>
                      <div className={`w-12 h-12 rounded-lg ${item.color} flex items-center justify-center mb-4`}>
                        <GraduationCap className="h-6 w-6 text-white" />
                      </div>
                      <CardTitle className="text-lg">{item.title}</CardTitle>
                      <CardDescription>{item.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button variant="outline" asChild className="w-full">
                        <Link to={item.link}>Access Now</Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Recent Notices */}
              <Card className="content-section">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Bell className="h-5 w-5" />
                    Recent Notices
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentNotices.map((notice, index) => (
                      <div key={index} className="border-l-4 border-primary pl-4">
                        <div className="flex items-center justify-between mb-1">
                          <Badge variant="secondary" className="text-xs">
                            {notice.type}
                          </Badge>
                          <span className="text-xs text-muted-foreground">{notice.date}</span>
                        </div>
                        <h4 className="font-medium text-sm">{notice.title}</h4>
                      </div>
                    ))}
                  </div>
                  <Button variant="outline" className="w-full mt-4" asChild>
                    <Link to="/notices">View All Notices</Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Upcoming Events */}
              <Card className="content-section">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="h-5 w-5" />
                    Upcoming Events
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="text-center">
                        <div className="text-lg font-bold text-primary">15</div>
                        <div className="text-xs text-muted-foreground">FEB</div>
                      </div>
                      <div>
                        <h4 className="font-medium text-sm">Annual Sports Day</h4>
                        <p className="text-xs text-muted-foreground">School Grounds, 9:00 AM</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="text-center">
                        <div className="text-lg font-bold text-primary">20</div>
                        <div className="text-xs text-muted-foreground">FEB</div>
                      </div>
                      <div>
                        <h4 className="font-medium text-sm">Science Exhibition</h4>
                        <p className="text-xs text-muted-foreground">Main Hall, 10:00 AM</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="text-center">
                        <div className="text-lg font-bold text-primary">25</div>
                        <div className="text-xs text-muted-foreground">FEB</div>
                      </div>
                      <div>
                        <h4 className="font-medium text-sm">Parent Meeting</h4>
                        <p className="text-xs text-muted-foreground">Conference Room, 2:00 PM</p>
                      </div>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full mt-4" asChild>
                    <Link to="/activities">View All Events</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}