import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { User, BookOpen, Trophy, Calendar, GraduationCap, Users, Award, Target } from "lucide-react";
import studentsClassroom from "@/assets/students-classroom.jpg";

export default function Students() {
  const studentStats = [
    { icon: Users, label: "Total Students", value: "1,200", color: "text-education-blue" },
    { icon: GraduationCap, label: "Grade 12 Students", value: "155", color: "text-education-green" },
    { icon: Award, label: "Honor Students", value: "95", color: "text-education-purple" },
    { icon: Trophy, label: "Student Awards", value: "45", color: "text-education-orange" }
  ];

  const topPerformers = [
    { name: "Emma Johnson", grade: "Grade 12", gpa: "4.0", achievement: "Valedictorian" },
    { name: "Michael Chen", grade: "Grade 11", gpa: "3.98", achievement: "Science Olympiad Winner" },
    { name: "Sarah Williams", grade: "Grade 12", gpa: "3.95", achievement: "Math Competition Champion" },
    { name: "David Rodriguez", grade: "Grade 10", gpa: "3.92", achievement: "Debate Team Captain" },
    { name: "Lisa Thompson", grade: "Grade 11", gpa: "3.90", achievement: "Art Exhibition Winner" }
  ];

  const gradeDistribution = [
    { grade: "Grade 9", students: 320, percentage: "26.7%" },
    { grade: "Grade 10", students: 305, percentage: "25.4%" },
    { grade: "Grade 11", students: 285, percentage: "23.8%" },
    { grade: "Grade 12", students: 290, percentage: "24.1%" }
  ];

  const studentServices = [
    {
      title: "Academic Support",
      description: "Tutoring, study groups, and academic counseling",
      icon: BookOpen,
      features: ["One-on-one tutoring", "Study hall supervision", "Academic planning", "Course selection guidance"]
    },
    {
      title: "Student Counseling",
      description: "Personal and career guidance services",
      icon: User,
      features: ["Career counseling", "Personal development", "College preparation", "Mental health support"]
    },
    {
      title: "Extracurricular Activities",
      description: "Clubs, sports, and special interest groups",
      icon: Trophy,
      features: ["Sports teams", "Academic clubs", "Arts programs", "Community service"]
    },
    {
      title: "Leadership Programs",
      description: "Student government and leadership development",
      icon: Target,
      features: ["Student council", "Peer mentoring", "Leadership training", "Event planning"]
    }
  ];

  const upcomingEvents = [
    { event: "Student Council Elections", date: "February 20, 2024", type: "Governance" },
    { event: "Science Fair Judging", date: "February 25, 2024", type: "Academic" },
    { event: "Spring Sports Tryouts", date: "March 1, 2024", type: "Sports" },
    { event: "College Fair", date: "March 10, 2024", type: "Career" },
    { event: "Arts Showcase", date: "March 15, 2024", type: "Cultural" }
  ];

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="page-title">Student Information</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive information about our student body, academic performance, 
            and support services available to help every student succeed.
          </p>
        </div>

        {/* Hero Image */}
        <div className="mb-12">
          <img 
            src={studentsClassroom} 
            alt="Students in Classroom" 
            className="w-full h-64 md:h-96 object-cover rounded-lg shadow-educational"
          />
        </div>

        <Tabs defaultValue="overview" className="space-y-8">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="performance">Performance</TabsTrigger>
            <TabsTrigger value="services">Services</TabsTrigger>
            <TabsTrigger value="activities">Activities</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-8">
            {/* Student Statistics */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {studentStats.map((stat, index) => (
                <Card key={index} className="content-section text-center">
                  <CardContent className="pt-6">
                    <div className="flex justify-center mb-4">
                      <div className="p-3 rounded-full bg-muted">
                        <stat.icon className={`h-8 w-8 ${stat.color}`} />
                      </div>
                    </div>
                    <h3 className="text-3xl font-bold text-primary mb-2">{stat.value}</h3>
                    <p className="text-muted-foreground">{stat.label}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Grade Distribution */}
            <Card className="content-section">
              <CardHeader>
                <CardTitle className="text-2xl">Student Distribution by Grade</CardTitle>
                <CardDescription>
                  Current enrollment across all grade levels
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    {gradeDistribution.map((grade, index) => (
                      <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                        <div>
                          <h4 className="font-semibold">{grade.grade}</h4>
                          <p className="text-sm text-muted-foreground">{grade.students} students</p>
                        </div>
                        <Badge variant="secondary" className="text-lg px-3 py-1">
                          {grade.percentage}
                        </Badge>
                      </div>
                    ))}
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Key Highlights</h3>
                    <ul className="space-y-3">
                      <li className="flex items-center space-x-2">
                        <div className="h-2 w-2 rounded-full bg-education-green"></div>
                        <span>Balanced enrollment across all grades</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="h-2 w-2 rounded-full bg-education-blue"></div>
                        <span>Average class size: 25 students</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="h-2 w-2 rounded-full bg-education-purple"></div>
                        <span>Student-teacher ratio: 16:1</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="h-2 w-2 rounded-full bg-education-orange"></div>
                        <span>98% attendance rate</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Performance Tab */}
          <TabsContent value="performance" className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Top Performers */}
              <Card className="content-section">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2">
                    <Trophy className="h-5 w-5" />
                    Top Academic Performers
                  </CardTitle>
                  <CardDescription>
                    Students excelling in academic achievement
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {topPerformers.map((student, index) => (
                      <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                        <div>
                          <h4 className="font-semibold">{student.name}</h4>
                          <p className="text-sm text-muted-foreground">{student.grade}</p>
                          <p className="text-xs text-muted-foreground">{student.achievement}</p>
                        </div>
                        <div className="text-right">
                          <Badge variant="secondary" className="text-lg">
                            GPA: {student.gpa}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Academic Performance Stats */}
              <Card className="content-section">
                <CardHeader>
                  <CardTitle className="text-xl">Academic Performance</CardTitle>
                  <CardDescription>
                    Overall academic achievements and statistics
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-4 rounded-lg bg-muted/50">
                        <div className="text-3xl font-bold text-education-green">3.65</div>
                        <div className="text-sm text-muted-foreground">Average GPA</div>
                      </div>
                      <div className="text-center p-4 rounded-lg bg-muted/50">
                        <div className="text-3xl font-bold text-education-blue">95%</div>
                        <div className="text-sm text-muted-foreground">Pass Rate</div>
                      </div>
                      <div className="text-center p-4 rounded-lg bg-muted/50">
                        <div className="text-3xl font-bold text-education-purple">88%</div>
                        <div className="text-sm text-muted-foreground">College Bound</div>
                      </div>
                      <div className="text-center p-4 rounded-lg bg-muted/50">
                        <div className="text-3xl font-bold text-education-orange">45</div>
                        <div className="text-sm text-muted-foreground">National Awards</div>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <h4 className="font-semibold">Recent Achievements</h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-center space-x-2">
                          <Award className="h-4 w-4 text-education-green" />
                          <span>State Math Competition Winners</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <Award className="h-4 w-4 text-education-blue" />
                          <span>Science Olympiad Regional Champions</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <Award className="h-4 w-4 text-education-purple" />
                          <span>Debate Tournament Finalists</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <Award className="h-4 w-4 text-education-orange" />
                          <span>Art Competition Multiple Winners</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Services Tab */}
          <TabsContent value="services" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {studentServices.map((service, index) => (
                <Card key={index} className="content-section">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <service.icon className="h-5 w-5 text-primary" />
                      {service.title}
                    </CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-2">
                          <div className="h-2 w-2 rounded-full bg-primary"></div>
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button variant="outline" className="w-full mt-4">
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Activities Tab */}
          <TabsContent value="activities" className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Upcoming Events */}
              <Card className="content-section">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="h-5 w-5" />
                    Upcoming Student Events
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {upcomingEvents.map((event, index) => (
                      <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                        <div>
                          <h4 className="font-medium">{event.event}</h4>
                          <p className="text-sm text-muted-foreground">{event.date}</p>
                        </div>
                        <Badge variant="outline">{event.type}</Badge>
                      </div>
                    ))}
                  </div>
                  <Button variant="educational" className="w-full mt-4">
                    View All Events
                  </Button>
                </CardContent>
              </Card>

              {/* Student Resources */}
              <Card className="content-section">
                <CardHeader>
                  <CardTitle>Student Resources</CardTitle>
                  <CardDescription>
                    Essential tools and resources for student success
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button variant="outline" className="w-full justify-start">
                    <BookOpen className="h-4 w-4 mr-2" />
                    Student Handbook
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Calendar className="h-4 w-4 mr-2" />
                    Academic Calendar
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <User className="h-4 w-4 mr-2" />
                    Student Portal Login
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Trophy className="h-4 w-4 mr-2" />
                    Scholarship Information
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <GraduationCap className="h-4 w-4 mr-2" />
                    College Preparation
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}