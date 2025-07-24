import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, Clock, Users, Award, Calendar, Download } from "lucide-react";

export default function Academic() {
  const grades = [
    { grade: "Grade 9", students: 180, subjects: 12, teachers: 15 },
    { grade: "Grade 10", students: 175, subjects: 12, teachers: 15 },
    { grade: "Grade 11", students: 160, subjects: 14, teachers: 18 },
    { grade: "Grade 12", students: 155, subjects: 14, teachers: 18 }
  ];

  const subjects = {
    core: [
      { name: "English Language & Literature", code: "ENG", description: "Comprehensive language arts program" },
      { name: "Mathematics", code: "MATH", description: "Advanced mathematics curriculum" },
      { name: "Science (Physics, Chemistry, Biology)", code: "SCI", description: "Integrated science program" },
      { name: "Social Studies", code: "SOC", description: "History, geography, and civics" },
      { name: "Physical Education", code: "PE", description: "Health and fitness program" }
    ],
    elective: [
      { name: "Computer Science", code: "CS", description: "Programming and digital literacy" },
      { name: "Arts & Crafts", code: "ART", description: "Creative arts and design" },
      { name: "Music", code: "MUS", description: "Vocal and instrumental music" },
      { name: "Foreign Languages", code: "LANG", description: "Spanish, French, and Mandarin" },
      { name: "Business Studies", code: "BUS", description: "Economics and entrepreneurship" }
    ]
  };

  const schedule = [
    { period: "1st Period", time: "8:00 - 8:45 AM", duration: "45 min" },
    { period: "2nd Period", time: "8:50 - 9:35 AM", duration: "45 min" },
    { period: "3rd Period", time: "9:40 - 10:25 AM", duration: "45 min" },
    { period: "Break", time: "10:25 - 10:45 AM", duration: "20 min" },
    { period: "4th Period", time: "10:45 - 11:30 AM", duration: "45 min" },
    { period: "5th Period", time: "11:35 AM - 12:20 PM", duration: "45 min" },
    { period: "Lunch", time: "12:20 - 1:20 PM", duration: "60 min" },
    { period: "6th Period", time: "1:20 - 2:05 PM", duration: "45 min" },
    { period: "7th Period", time: "2:10 - 2:55 PM", duration: "45 min" },
    { period: "8th Period", time: "3:00 - 3:45 PM", duration: "45 min" }
  ];

  const assessmentMethods = [
    { method: "Continuous Assessment", percentage: "40%", description: "Regular quizzes, assignments, and projects" },
    { method: "Mid-term Examinations", percentage: "30%", description: "Comprehensive mid-semester evaluations" },
    { method: "Final Examinations", percentage: "30%", description: "End-of-semester comprehensive tests" }
  ];

  const academicCalendar = [
    { event: "First Semester Begins", date: "September 1, 2024", type: "Academic" },
    { event: "Mid-term Examinations", date: "October 15-22, 2024", type: "Examination" },
    { event: "First Semester Ends", date: "December 20, 2024", type: "Academic" },
    { event: "Winter Break", date: "December 21, 2024 - January 5, 2025", type: "Holiday" },
    { event: "Second Semester Begins", date: "January 6, 2025", type: "Academic" },
    { event: "Final Examinations", date: "May 15-25, 2025", type: "Examination" },
    { event: "Graduation Ceremony", date: "June 15, 2025", type: "Event" },
    { event: "Summer Break Begins", date: "June 20, 2025", type: "Holiday" }
  ];

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="page-title">Academic Information</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive overview of our academic programs, curriculum, schedules, and educational excellence.
          </p>
        </div>

        <Tabs defaultValue="overview" className="space-y-8">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-5">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
            <TabsTrigger value="schedule">Schedule</TabsTrigger>
            <TabsTrigger value="assessment">Assessment</TabsTrigger>
            <TabsTrigger value="calendar">Calendar</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-8">
            {/* Academic Statistics */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {grades.map((grade, index) => (
                <Card key={index} className="content-section text-center">
                  <CardHeader>
                    <CardTitle className="text-2xl text-primary">{grade.grade}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center justify-center space-x-2">
                      <Users className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">{grade.students} Students</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <BookOpen className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">{grade.subjects} Subjects</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <Award className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">{grade.teachers} Teachers</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Academic Excellence */}
            <Card className="content-section">
              <CardHeader>
                <CardTitle className="text-2xl">Academic Excellence</CardTitle>
                <CardDescription>
                  Our commitment to providing world-class education
                </CardDescription>
              </CardHeader>
              <CardContent className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Our Approach</h3>
                  <p className="text-muted-foreground">
                    Excellence High School follows a comprehensive educational approach that combines 
                    traditional academic rigor with innovative teaching methods. Our curriculum is 
                    designed to develop critical thinking, creativity, and practical skills.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center space-x-2">
                      <div className="h-2 w-2 rounded-full bg-primary"></div>
                      <span>Student-centered learning environment</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="h-2 w-2 rounded-full bg-primary"></div>
                      <span>Integration of technology in education</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="h-2 w-2 rounded-full bg-primary"></div>
                      <span>Focus on practical application of knowledge</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="h-2 w-2 rounded-full bg-primary"></div>
                      <span>Regular assessment and feedback</span>
                    </li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Academic Standards</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 rounded-lg bg-muted/50">
                      <div className="text-3xl font-bold text-primary">95%</div>
                      <div className="text-sm text-muted-foreground">Pass Rate</div>
                    </div>
                    <div className="text-center p-4 rounded-lg bg-muted/50">
                      <div className="text-3xl font-bold text-primary">88%</div>
                      <div className="text-sm text-muted-foreground">College Acceptance</div>
                    </div>
                    <div className="text-center p-4 rounded-lg bg-muted/50">
                      <div className="text-3xl font-bold text-primary">4.2</div>
                      <div className="text-sm text-muted-foreground">Average GPA</div>
                    </div>
                    <div className="text-center p-4 rounded-lg bg-muted/50">
                      <div className="text-3xl font-bold text-primary">50+</div>
                      <div className="text-sm text-muted-foreground">Awards Won</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Curriculum Tab */}
          <TabsContent value="curriculum" className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Core Subjects */}
              <Card className="content-section">
                <CardHeader>
                  <CardTitle className="text-xl">Core Subjects</CardTitle>
                  <CardDescription>
                    Essential subjects required for all students
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {subjects.core.map((subject, index) => (
                      <div key={index} className="border rounded-lg p-4">
                        <div className="flex justify-between items-center mb-2">
                          <h4 className="font-semibold">{subject.name}</h4>
                          <Badge variant="secondary">{subject.code}</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">{subject.description}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Elective Subjects */}
              <Card className="content-section">
                <CardHeader>
                  <CardTitle className="text-xl">Elective Subjects</CardTitle>
                  <CardDescription>
                    Optional subjects to explore interests and talents
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {subjects.elective.map((subject, index) => (
                      <div key={index} className="border rounded-lg p-4">
                        <div className="flex justify-between items-center mb-2">
                          <h4 className="font-semibold">{subject.name}</h4>
                          <Badge variant="outline">{subject.code}</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">{subject.description}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Schedule Tab */}
          <TabsContent value="schedule" className="space-y-8">
            <Card className="content-section">
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  Daily Schedule
                </CardTitle>
                <CardDescription>
                  Standard class timings for all grades
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {schedule.map((item, index) => (
                    <div key={index} className={`flex justify-between items-center p-4 rounded-lg ${
                      item.period.includes('Break') || item.period.includes('Lunch') 
                        ? 'bg-muted/50' : 'bg-background border'
                    }`}>
                      <div>
                        <h4 className="font-medium">{item.period}</h4>
                        <p className="text-sm text-muted-foreground">{item.time}</p>
                      </div>
                      <Badge variant="outline">{item.duration}</Badge>
                    </div>
                  ))}
                </div>
                <div className="mt-6 text-center">
                  <Button variant="educational">
                    <Download className="h-4 w-4 mr-2" />
                    Download Full Timetable
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Assessment Tab */}
          <TabsContent value="assessment" className="space-y-8">
            <Card className="content-section">
              <CardHeader>
                <CardTitle className="text-xl">Assessment Methods</CardTitle>
                <CardDescription>
                  How student progress is evaluated and measured
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {assessmentMethods.map((method, index) => (
                    <div key={index} className="border rounded-lg p-6">
                      <div className="flex justify-between items-center mb-4">
                        <h3 className="text-lg font-semibold">{method.method}</h3>
                        <Badge variant="secondary" className="text-lg px-3 py-1">
                          {method.percentage}
                        </Badge>
                      </div>
                      <p className="text-muted-foreground">{method.description}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-6 bg-muted/30 rounded-lg">
                  <h3 className="text-lg font-semibold mb-4">Grading Scale</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">A</div>
                      <div className="text-sm">90-100%</div>
                      <div className="text-xs text-muted-foreground">Excellent</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">B</div>
                      <div className="text-sm">80-89%</div>
                      <div className="text-xs text-muted-foreground">Good</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-yellow-600">C</div>
                      <div className="text-sm">70-79%</div>
                      <div className="text-xs text-muted-foreground">Satisfactory</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-red-600">F</div>
                      <div className="text-sm">Below 70%</div>
                      <div className="text-xs text-muted-foreground">Needs Improvement</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Calendar Tab */}
          <TabsContent value="calendar" className="space-y-8">
            <Card className="content-section">
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  Academic Calendar 2024-2025
                </CardTitle>
                <CardDescription>
                  Important dates and events for the academic year
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {academicCalendar.map((event, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <h4 className="font-medium">{event.event}</h4>
                        <p className="text-sm text-muted-foreground">{event.date}</p>
                      </div>
                      <Badge 
                        variant="outline" 
                        className={
                          event.type === 'Academic' ? 'border-education-blue text-education-blue' :
                          event.type === 'Examination' ? 'border-education-purple text-education-purple' :
                          event.type === 'Holiday' ? 'border-education-orange text-education-orange' :
                          'border-education-green text-education-green'
                        }
                      >
                        {event.type}
                      </Badge>
                    </div>
                  ))}
                </div>
                <div className="mt-6 text-center">
                  <Button variant="educational">
                    <Download className="h-4 w-4 mr-2" />
                    Download Academic Calendar
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}