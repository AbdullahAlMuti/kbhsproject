import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, Calendar, Award, BookOpen, Users } from "lucide-react";
import headteacherImage from "@/assets/headteacher.jpg";

export default function HeadTeacher() {
  const qualifications = [
    "Ph.D. in Educational Leadership - Harvard University",
    "M.Ed. in Curriculum Development - Stanford University", 
    "B.Ed. in Secondary Education - University of California",
    "Certified Educational Administrator"
  ];

  const achievements = [
    { year: "2023", title: "National Educational Leadership Award" },
    { year: "2022", title: "Outstanding Principal of the Year" },
    { year: "2021", title: "Innovation in Education Award" },
    { year: "2020", title: "Community Leadership Recognition" }
  ];

  const experience = [
    { position: "Head Teacher", institution: "Excellence High School", duration: "2018 - Present" },
    { position: "Vice Principal", institution: "Metro International School", duration: "2015 - 2018" },
    { position: "Department Head", institution: "Riverside Academy", duration: "2012 - 2015" },
    { position: "Senior Teacher", institution: "Greenwood High", duration: "2008 - 2012" }
  ];

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="page-title">Head Teacher's Message</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Leading with vision, inspiring excellence, and building the future of education.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Welcome Message */}
            <Card className="content-section">
              <CardHeader>
                <CardTitle className="text-2xl">Welcome Message</CardTitle>
                <CardDescription>A personal note from our Head Teacher</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-3 gap-6 items-start">
                  <div className="md:col-span-1">
                    <img 
                      src={headteacherImage} 
                      alt="Head Teacher" 
                      className="w-full rounded-lg shadow-card-educational"
                    />
                    <div className="text-center mt-4">
                      <h3 className="font-semibold text-lg">Dr. Sarah Johnson</h3>
                      <p className="text-muted-foreground">Head Teacher</p>
                      <div className="flex justify-center space-x-2 mt-2">
                        <Button size="sm" variant="outline">
                          <Mail className="h-4 w-4 mr-2" />
                          Email
                        </Button>
                        <Button size="sm" variant="outline">
                          <Calendar className="h-4 w-4 mr-2" />
                          Schedule
                        </Button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="md:col-span-2 space-y-4">
                    <p className="text-muted-foreground leading-relaxed">
                      Dear Students, Parents, and Community Members,
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      It is my great privilege to serve as the Head Teacher of Excellence High School. 
                      For over two decades, I have been passionate about education and committed to 
                      creating an environment where every student can thrive academically, socially, 
                      and emotionally.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      At Excellence High School, we believe that education is not just about acquiring 
                      knowledge, but about developing critical thinking skills, fostering creativity, 
                      and building character. Our dedicated faculty and staff work tirelessly to provide 
                      a comprehensive educational experience that prepares our students for success in 
                      the 21st century.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      We are committed to maintaining the highest standards of academic excellence while 
                      ensuring that our school remains a safe, inclusive, and supportive community for all. 
                      Together, we are building the foundation for our students' bright futures.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      <strong>Warm regards,<br />Dr. Sarah Johnson</strong>
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Educational Philosophy */}
            <Card className="content-section">
              <CardHeader>
                <CardTitle className="text-xl">Educational Philosophy</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  I firmly believe that every child has unlimited potential waiting to be unlocked. 
                  My educational philosophy centers on the principle that effective learning occurs 
                  when we create an environment that challenges students intellectually while 
                  supporting them emotionally and socially.
                </p>
                
                <div className="grid md:grid-cols-3 gap-4 mt-6">
                  <div className="text-center p-4 rounded-lg bg-muted/50">
                    <Users className="h-8 w-8 mx-auto mb-2 text-primary" />
                    <h4 className="font-semibold">Student-Centered</h4>
                    <p className="text-sm text-muted-foreground">Putting student needs at the heart of everything we do</p>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-muted/50">
                    <BookOpen className="h-8 w-8 mx-auto mb-2 text-primary" />
                    <h4 className="font-semibold">Innovative Learning</h4>
                    <p className="text-sm text-muted-foreground">Embracing modern teaching methods and technology</p>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-muted/50">
                    <Award className="h-8 w-8 mx-auto mb-2 text-primary" />
                    <h4 className="font-semibold">Excellence</h4>
                    <p className="text-sm text-muted-foreground">Striving for the highest standards in all aspects</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Leadership Experience */}
            <Card className="content-section">
              <CardHeader>
                <CardTitle className="text-xl">Professional Experience</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {experience.map((exp, index) => (
                    <div key={index} className="border-l-4 border-primary pl-6 relative">
                      <div className="absolute left-[-8px] top-0 w-4 h-4 bg-primary rounded-full"></div>
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-semibold text-lg">{exp.position}</h4>
                        <Badge variant="secondary">{exp.duration}</Badge>
                      </div>
                      <p className="text-muted-foreground">{exp.institution}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Contact Information */}
            <Card className="content-section">
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-sm font-medium">Email</p>
                    <p className="text-sm text-muted-foreground">principal@excellencehigh.edu</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-sm font-medium">Direct Line</p>
                    <p className="text-sm text-muted-foreground">+1 (234) 567-8901</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Calendar className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-sm font-medium">Office Hours</p>
                    <p className="text-sm text-muted-foreground">Mon-Fri: 8:00 AM - 5:00 PM</p>
                  </div>
                </div>
                <Button className="w-full mt-4" variant="educational">
                  Schedule Appointment
                </Button>
              </CardContent>
            </Card>

            {/* Qualifications */}
            <Card className="content-section">
              <CardHeader>
                <CardTitle>Qualifications</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {qualifications.map((qualification, index) => (
                    <div key={index} className="flex items-start space-x-2">
                      <BookOpen className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                      <p className="text-sm">{qualification}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Awards & Recognition */}
            <Card className="content-section">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-5 w-5" />
                  Awards & Recognition
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {achievements.map((achievement, index) => (
                    <div key={index} className="border-l-4 border-primary pl-3">
                      <div className="flex items-center gap-2 mb-1">
                        <Badge variant="secondary" className="text-xs">{achievement.year}</Badge>
                      </div>
                      <p className="text-sm font-medium">{achievement.title}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}