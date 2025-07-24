import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Users, GraduationCap, Award, BookOpen, Search, Filter, Plus } from "lucide-react";
import { TeacherCard } from "@/components/TeacherCard";
import { motion } from "framer-motion";

export default function Teachers() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("All");
  const [selectedSubject, setSelectedSubject] = useState("All");

  const teacherStats = [
    { icon: Users, label: "Total Faculty", value: "75", color: "text-education-blue" },
    { icon: GraduationCap, label: "Advanced Degrees", value: "68", color: "text-education-green" },
    { icon: Award, label: "Years Experience", value: "12", color: "text-education-purple" },
    { icon: BookOpen, label: "Departments", value: "8", color: "text-education-orange" }
  ];

  const departments = [
    "All", "Mathematics", "Science", "English", "Social Studies", 
    "Arts", "Physical Education", "Computer Science", "Languages"
  ];

  const subjects = [
    "All", "Mathematics", "Physics", "Chemistry", "Biology", "English Literature",
    "History", "Geography", "Art", "Music", "Physical Education", "Computer Science"
  ];

  // Mock teacher data - this would come from backend in real implementation
  const teachers = [
    {
      id: 1,
      name: "Dr. Jennifer Adams",
      photo: "",
      designation: "Head of Science Department",
      subject: "Chemistry",
      department: "Science",
      education: "Ph.D. in Chemistry, Harvard University",
      experience: "15 years",
      email: "j.adams@school.edu",
      phone: "+1234567890",
      specializations: ["Organic Chemistry", "Lab Safety", "Research Methodology"],
      achievements: ["Teacher of the Year 2023", "Science Fair Judge", "Published Researcher", "Student Mentorship Award"]
    },
    {
      id: 2,
      name: "Mr. Robert Martinez",
      photo: "",
      designation: "Senior Mathematics Teacher",
      subject: "Mathematics",
      department: "Mathematics",
      education: "M.Ed. in Mathematics Education, MIT",
      experience: "12 years",
      email: "r.martinez@school.edu",
      phone: "+1234567891",
      specializations: ["Calculus", "Advanced Algebra", "Competition Math"],
      achievements: ["Math Team Coach", "Curriculum Developer", "Technology Integration Award"]
    },
    {
      id: 3,
      name: "Ms. Amanda Clarke",
      photo: "",
      designation: "English Literature Teacher",
      subject: "English Literature",
      department: "English",
      education: "M.A. in English Literature, Stanford University",
      experience: "10 years",
      email: "a.clarke@school.edu",
      phone: "+1234567892",
      specializations: ["Modern Literature", "Creative Writing", "Critical Analysis"],
      achievements: ["Writing Workshop Leader", "Student Publication Advisor", "Literary Contest Judge"]
    },
    {
      id: 4,
      name: "Prof. Michael Johnson",
      photo: "",
      designation: "Physics Department Head",
      subject: "Physics",
      department: "Science",
      education: "Ph.D. in Physics, CalTech",
      experience: "18 years",
      email: "m.johnson@school.edu",
      phone: "+1234567893",
      specializations: ["Quantum Physics", "Laboratory Design", "Science Fair Coordination"],
      achievements: ["Outstanding Educator Award", "Science Department Excellence", "Research Publication Leader"]
    },
    {
      id: 5,
      name: "Ms. Sarah Williams",
      photo: "",
      designation: "Biology Teacher",
      subject: "Biology",
      department: "Science",
      education: "M.S. in Biology, University of California",
      experience: "8 years",
      email: "s.williams@school.edu",
      phone: "+1234567894",
      specializations: ["Molecular Biology", "Environmental Science", "Biotechnology"],
      achievements: ["Environmental Club Advisor", "Science Olympiad Coach", "Green Initiative Leader"]
    },
    {
      id: 6,
      name: "Mr. David Chen",
      photo: "",
      designation: "History Department Head",
      subject: "History",
      department: "Social Studies",
      education: "M.A. in History, Yale University",
      experience: "14 years",
      email: "d.chen@school.edu",
      phone: "+1234567895",
      specializations: ["World History", "American History", "Historical Research"],
      achievements: ["History Fair Coordinator", "Model UN Advisor", "Cultural Exchange Program Leader"]
    },
    {
      id: 7,
      name: "Ms. Lisa Thompson",
      photo: "",
      designation: "Art Department Head",
      subject: "Visual Arts",
      department: "Arts",
      education: "M.F.A. in Fine Arts, Rhode Island School of Design",
      experience: "11 years",
      email: "l.thompson@school.edu",
      phone: "+1234567896",
      specializations: ["Digital Art", "Traditional Painting", "Art History"],
      achievements: ["Art Exhibition Coordinator", "Student Gallery Curator", "Best Arts Program Award"]
    },
    {
      id: 8,
      name: "Coach Mark Wilson",
      photo: "",
      designation: "Athletic Director",
      subject: "Physical Education",
      department: "Physical Education",
      education: "M.S. in Sports Science, University of Florida",
      experience: "16 years",
      email: "m.wilson@school.edu",
      phone: "+1234567897",
      specializations: ["Sports Management", "Fitness Training", "Team Coaching"],
      achievements: ["State Championship Coach", "Athletic Excellence Award", "Sports Safety Certification"]
    },
    {
      id: 9,
      name: "Ms. Emily Rodriguez",
      photo: "",
      designation: "Computer Science Teacher",
      subject: "Computer Science",
      department: "Computer Science",
      education: "M.S. in Computer Science, Stanford University",
      experience: "9 years",
      email: "e.rodriguez@school.edu",
      phone: "+1234567898",
      specializations: ["Programming", "Web Development", "Artificial Intelligence"],
      achievements: ["Coding Club Advisor", "Tech Innovation Award", "Student App Development Mentor"]
    }
  ];

  const filteredTeachers = teachers.filter(teacher => {
    const matchesSearch = teacher.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         teacher.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         teacher.department.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesDepartment = selectedDepartment === "All" || teacher.department === selectedDepartment;
    const matchesSubject = selectedSubject === "All" || teacher.subject === selectedSubject;
    
    return matchesSearch && matchesDepartment && matchesSubject;
  });

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="page-title">Teachers & Staff Directory</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Meet our dedicated faculty and staff who are committed to providing 
            exceptional education and supporting every student's academic journey.
          </p>
        </motion.div>

        <Tabs defaultValue="directory" className="space-y-8">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-3">
            <TabsTrigger value="directory">Faculty Directory</TabsTrigger>
            <TabsTrigger value="departments">Departments</TabsTrigger>
            <TabsTrigger value="overview">Overview</TabsTrigger>
          </TabsList>

          {/* Faculty Directory Tab */}
          <TabsContent value="directory" className="space-y-8">
            {/* Search and Filters */}
            <Card className="content-section">
              <CardContent className="pt-6">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1 relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                    <Input
                      type="search"
                      placeholder="Search teachers by name, subject, or department..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                  <Select value={selectedDepartment} onValueChange={setSelectedDepartment}>
                    <SelectTrigger className="w-full md:w-48">
                      <SelectValue placeholder="Department" />
                    </SelectTrigger>
                    <SelectContent>
                      {departments.map((dept) => (
                        <SelectItem key={dept} value={dept}>{dept}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <Select value={selectedSubject} onValueChange={setSelectedSubject}>
                    <SelectTrigger className="w-full md:w-48">
                      <SelectValue placeholder="Subject" />
                    </SelectTrigger>
                    <SelectContent>
                      {subjects.map((subject) => (
                        <SelectItem key={subject} value={subject}>{subject}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <Button variant="outline" className="gap-2">
                    <Filter className="h-4 w-4" />
                    Filter
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Teachers Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTeachers.map((teacher, index) => (
                <TeacherCard key={teacher.id} teacher={teacher} index={index} />
              ))}
            </div>

            {/* Results Count */}
            <div className="text-center text-muted-foreground">
              Showing {filteredTeachers.length} of {teachers.length} faculty members
            </div>

            {/* Add New Teacher Button (for admin) */}
            <div className="text-center">
              <Button variant="educational" className="gap-2">
                <Plus className="h-4 w-4" />
                Add New Faculty Member
              </Button>
            </div>
          </TabsContent>

          {/* Departments Tab */}
          <TabsContent value="departments" className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {departments.slice(1).map((dept, index) => {
                const deptTeachers = teachers.filter(t => t.department === dept);
                const deptHead = deptTeachers.find(t => t.designation.includes("Head"));
                
                return (
                  <motion.div
                    key={dept}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="content-section">
                      <CardHeader>
                        <CardTitle className="text-lg">{dept} Department</CardTitle>
                        <CardDescription>
                          {deptHead ? `Led by ${deptHead.name}` : "Department Head TBA"} • {deptTeachers.length} Faculty Members
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div>
                          <h4 className="font-semibold mb-2">Faculty Members</h4>
                          <div className="space-y-1">
                            {deptTeachers.map((teacher) => (
                              <div key={teacher.id} className="flex justify-between items-center text-sm">
                                <span>{teacher.name}</span>
                                <Badge variant="outline" className="text-xs">
                                  {teacher.subject}
                                </Badge>
                              </div>
                            ))}
                          </div>
                        </div>
                        <Button variant="outline" className="w-full" size="sm">
                          View Department Details
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </TabsContent>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-8">
            {/* Teacher Statistics */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {teacherStats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="content-section text-center">
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
                </motion.div>
              ))}
            </div>

            {/* Faculty Excellence */}
            <Card className="content-section">
              <CardHeader>
                <CardTitle className="text-2xl">Faculty Excellence</CardTitle>
                <CardDescription>
                  Our commitment to educational excellence through exceptional faculty
                </CardDescription>
              </CardHeader>
              <CardContent className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Qualifications & Experience</h3>
                  <p className="text-muted-foreground">
                    Our faculty consists of highly qualified educators with advanced degrees 
                    and extensive experience in their respective fields.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center space-x-2">
                      <div className="h-2 w-2 rounded-full bg-primary"></div>
                      <span>91% hold Master's degrees or higher</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="h-2 w-2 rounded-full bg-primary"></div>
                      <span>Average teaching experience: 12 years</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="h-2 w-2 rounded-full bg-primary"></div>
                      <span>Ongoing professional development programs</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="h-2 w-2 rounded-full bg-primary"></div>
                      <span>Regular peer collaboration and mentoring</span>
                    </li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Recognition & Awards</h3>
                  <div className="grid grid-cols-1 gap-4">
                    <div className="p-4 rounded-lg bg-muted/50">
                      <h4 className="font-semibold text-education-green">Teacher of the Year</h4>
                      <p className="text-sm text-muted-foreground">5 recipients in the last 3 years</p>
                    </div>
                    <div className="p-4 rounded-lg bg-muted/50">
                      <h4 className="font-semibold text-education-blue">Innovation Awards</h4>
                      <p className="text-sm text-muted-foreground">Excellence in teaching methods</p>
                    </div>
                    <div className="p-4 rounded-lg bg-muted/50">
                      <h4 className="font-semibold text-education-purple">Research Publications</h4>
                      <p className="text-sm text-muted-foreground">Ongoing educational research</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}