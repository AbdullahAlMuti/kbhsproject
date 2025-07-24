import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Target, Award, BookOpen, Heart, Globe } from "lucide-react";
import schoolBuilding from "@/assets/school-building.jpg";

export default function About() {
  const values = [
    { icon: Target, title: "Excellence", description: "Striving for the highest standards in education and character development." },
    { icon: Heart, title: "Compassion", description: "Fostering empathy, kindness, and understanding in all our interactions." },
    { icon: Globe, title: "Global Mindset", description: "Preparing students to be responsible global citizens." },
    { icon: BookOpen, title: "Lifelong Learning", description: "Instilling a love for continuous learning and growth." },
  ];

  const achievements = [
    { year: "2023", title: "National Excellence Award", description: "Recognized for outstanding academic performance" },
    { year: "2022", title: "Best STEM Program", description: "State-level recognition for innovative science education" },
    { year: "2021", title: "Community Service Award", description: "Honored for exceptional community engagement" },
    { year: "2020", title: "Digital Innovation", description: "Pioneer in educational technology integration" },
  ];

  const facilities = [
    "Modern Science Laboratories",
    "Well-equipped Computer Labs",
    "Extensive Library with Digital Resources",
    "Sports Complex and Gymnasium",
    "Arts and Music Studios",
    "Cafeteria and Health Center",
    "Smart Classrooms with Interactive Boards",
    "Outdoor Learning Spaces"
  ];

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="page-title">About Excellence High School</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover our rich history, core values, and commitment to providing exceptional 
            education that prepares students for success in an ever-changing world.
          </p>
        </div>

        {/* Hero Image */}
        <div className="mb-12">
          <img 
            src={schoolBuilding} 
            alt="School Building" 
            className="w-full h-96 object-cover rounded-lg shadow-educational"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* School History */}
            <Card className="content-section">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <Users className="h-6 w-6" />
                  Our Story
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Founded in 1985, Excellence High School began as a small community institution with a big vision: 
                  to provide world-class education that nurtures both academic excellence and character development. 
                  Over the past 38 years, we have grown from a modest beginning to become one of the region's 
                  most respected educational institutions.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Our journey has been marked by continuous innovation, dedicated faculty, and the unwavering 
                  support of our community. We have consistently evolved our teaching methods, embraced 
                  technology, and expanded our programs to meet the changing needs of our students and society.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Today, Excellence High School stands as a testament to what can be achieved when vision, 
                  dedication, and community come together. We are proud of our graduates who have gone on 
                  to make significant contributions in various fields around the world.
                </p>
              </CardContent>
            </Card>

            {/* Mission & Vision */}
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="content-section">
                <CardHeader>
                  <CardTitle className="text-xl text-primary">Our Mission</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    To provide a comprehensive, innovative, and inclusive educational experience that empowers 
                    students to achieve academic excellence, develop critical thinking skills, and become 
                    responsible global citizens who contribute positively to society.
                  </p>
                </CardContent>
              </Card>

              <Card className="content-section">
                <CardHeader>
                  <CardTitle className="text-xl text-primary">Our Vision</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    To be a leading educational institution recognized for excellence in teaching, learning, 
                    and character development, where every student is inspired to reach their full potential 
                    and equipped to thrive in an interconnected world.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Core Values */}
            <Card className="content-section">
              <CardHeader>
                <CardTitle className="text-2xl">Core Values</CardTitle>
                <CardDescription>
                  The principles that guide everything we do at Excellence High School
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  {values.map((value, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="p-2 rounded-lg primary-gradient">
                        <value.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-2">{value.title}</h3>
                        <p className="text-muted-foreground text-sm">{value.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Facts */}
            <Card className="content-section">
              <CardHeader>
                <CardTitle>Quick Facts</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Established</span>
                  <span className="font-semibold">1985</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Students</span>
                  <span className="font-semibold">1,200+</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Faculty</span>
                  <span className="font-semibold">75+</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Campus Size</span>
                  <span className="font-semibold">15 acres</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Accreditation</span>
                  <span className="font-semibold">Grade A+</span>
                </div>
              </CardContent>
            </Card>

            {/* Achievements */}
            <Card className="content-section">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-5 w-5" />
                  Recent Achievements
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {achievements.map((achievement, index) => (
                    <div key={index} className="border-l-4 border-primary pl-4">
                      <div className="flex items-center gap-2 mb-1">
                        <Badge variant="secondary">{achievement.year}</Badge>
                      </div>
                      <h4 className="font-medium">{achievement.title}</h4>
                      <p className="text-sm text-muted-foreground">{achievement.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Facilities */}
            <Card className="content-section">
              <CardHeader>
                <CardTitle>School Facilities</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {facilities.map((facility, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="h-2 w-2 rounded-full bg-primary"></div>
                      <span className="text-sm">{facility}</span>
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