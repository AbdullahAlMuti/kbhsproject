import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, Trophy, Users, Music, Palette, Globe, Volleyball, Drama, Camera, Book } from "lucide-react";

export default function Activities() {
  const upcomingEvents = [
    {
      title: "Annual Sports Day",
      date: "March 15, 2024",
      time: "9:00 AM - 4:00 PM",
      location: "School Grounds",
      category: "Sports",
      description: "Inter-house sports competition featuring track and field, team sports, and individual events."
    },
    {
      title: "Science Exhibition",
      date: "March 22, 2024", 
      time: "10:00 AM - 3:00 PM",
      location: "Main Hall",
      category: "Academic",
      description: "Students showcase their innovative science projects and experiments."
    },
    {
      title: "Cultural Festival",
      date: "April 5, 2024",
      time: "6:00 PM - 9:00 PM", 
      location: "Auditorium",
      category: "Cultural",
      description: "Multi-cultural celebration featuring music, dance, and food from around the world."
    },
    {
      title: "Drama Production: Romeo & Juliet",
      date: "April 12, 2024",
      time: "7:00 PM - 9:30 PM",
      location: "School Theater",
      category: "Arts",
      description: "Annual drama club production featuring talented student actors."
    }
  ];

  const clubs = [
    {
      name: "Drama Club",
      icon: Drama,
      members: 25,
      description: "Annual productions, acting workshops, and theater appreciation",
      advisor: "Ms. Rodriguez",
      meeting: "Tuesdays & Thursdays, 3:30 PM",
      achievements: ["Regional Drama Competition Winners", "Best Original Script Award"]
    },
    {
      name: "Science Club",
      icon: Globe,
      members: 32,
      description: "Science fairs, experiments, and STEM competitions",
      advisor: "Dr. Johnson",
      meeting: "Wednesdays, 3:00 PM",
      achievements: ["State Science Olympiad Qualifiers", "Innovation Award Winners"]
    },
    {
      name: "Art Society",
      icon: Palette,
      members: 28,
      description: "Painting, sculpture, digital art, and gallery exhibitions",
      advisor: "Ms. Chen",
      meeting: "Fridays, 3:15 PM",
      achievements: ["Youth Art Exhibition Featured Artists", "Community Mural Project"]
    },
    {
      name: "Music Ensemble",
      icon: Music,
      members: 35,
      description: "Choir, band, orchestra, and musical performances",
      advisor: "Mr. Williams",
      meeting: "Mondays & Wednesdays, 4:00 PM",
      achievements: ["Regional Music Festival Gold Medal", "Holiday Concert Success"]
    },
    {
      name: "Photography Club",
      icon: Camera,
      members: 20,
      description: "Digital photography, darkroom techniques, and photo journalism",
      advisor: "Ms. Taylor",
      meeting: "Thursdays, 3:45 PM",
      achievements: ["School Yearbook Photography", "Local Photo Contest Winners"]
    },
    {
      name: "Debate Society",
      icon: Users,
      members: 24,
      description: "Public speaking, debates, and Model UN participation",
      advisor: "Mr. Anderson",
      meeting: "Tuesdays, 3:30 PM",
      achievements: ["Regional Debate Champions", "Model UN Distinguished Delegation"]
    }
  ];

  const sportsTeams = [
    {
      sport: "Basketball",
      icon: Volleyball,
      season: "Winter",
      teams: ["Varsity Boys", "Varsity Girls", "JV Boys", "JV Girls"],
      coach: "Coach Martinez",
      achievements: ["District Champions 2023", "State Tournament Qualifiers"],
      nextGame: "March 20 vs. Central High"
    },
    {
      sport: "Soccer",
      icon: Volleyball,
      season: "Fall",
      teams: ["Varsity Boys", "Varsity Girls", "JV Mixed"],
      coach: "Coach Thompson",
      achievements: ["Regional Semi-finalists", "Sportsmanship Award"],
      nextGame: "March 25 vs. North Academy"
    },
    {
      sport: "Track & Field",
      icon: Trophy,
      season: "Spring",
      teams: ["Varsity Co-ed", "JV Co-ed"],
      coach: "Coach Wilson",
      achievements: ["State Record Holder - 400m", "League Champions"],
      nextGame: "March 30 - Regional Meet"
    },
    {
      sport: "Volleyball",
      icon: Volleyball,
      season: "Fall",
      teams: ["Varsity Girls", "JV Girls"],
      coach: "Coach Davis",
      achievements: ["Conference Champions", "State Tournament Participants"],
      nextGame: "April 2 vs. East High"
    }
  ];

  const volunteerOpportunities = [
    {
      title: "Community Garden Project",
      organization: "Green City Initiative",
      timeCommitment: "2 hours/week",
      skills: "Gardening, Environmental awareness",
      contact: "Ms. Parker"
    },
    {
      title: "Reading Buddies",
      organization: "Local Elementary Schools",
      timeCommitment: "1 hour/week",
      skills: "Communication, Patience",
      contact: "Ms. Rodriguez"
    },
    {
      title: "Senior Center Visits",
      organization: "Sunshine Senior Center",
      timeCommitment: "3 hours/month",
      skills: "Interpersonal, Technology help",
      contact: "Mr. Johnson"
    },
    {
      title: "Animal Shelter Assistant",
      organization: "City Animal Shelter",
      timeCommitment: "4 hours/month",
      skills: "Animal care, Responsibility",
      contact: "Ms. Chen"
    }
  ];

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="page-title">Co-curricular Activities</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our diverse range of clubs, sports, events, and volunteer opportunities 
            that enrich student life and develop well-rounded individuals.
          </p>
        </div>

        <Tabs defaultValue="events" className="space-y-8">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
            <TabsTrigger value="events">Upcoming Events</TabsTrigger>
            <TabsTrigger value="clubs">Clubs & Societies</TabsTrigger>
            <TabsTrigger value="sports">Sports Teams</TabsTrigger>
            <TabsTrigger value="volunteer">Volunteer</TabsTrigger>
          </TabsList>

          {/* Upcoming Events Tab */}
          <TabsContent value="events" className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {upcomingEvents.map((event, index) => (
                <Card key={index} className="content-section">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-lg">{event.title}</CardTitle>
                        <CardDescription className="flex items-center gap-2 mt-2">
                          <Calendar className="h-4 w-4" />
                          {event.date} • {event.time}
                        </CardDescription>
                      </div>
                      <Badge 
                        variant="secondary"
                        className={
                          event.category === 'Sports' ? 'bg-education-green text-white' :
                          event.category === 'Academic' ? 'bg-education-blue text-white' :
                          event.category === 'Cultural' ? 'bg-education-purple text-white' :
                          'bg-education-orange text-white'
                        }
                      >
                        {event.category}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="text-sm text-muted-foreground">
                      📍 {event.location}
                    </div>
                    <p className="text-muted-foreground">{event.description}</p>
                    <div className="flex gap-2">
                      <Button size="sm" variant="educational">
                        Register
                      </Button>
                      <Button size="sm" variant="outline">
                        Learn More
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Event Calendar */}
            <Card className="content-section">
              <CardHeader>
                <CardTitle>Activity Calendar</CardTitle>
                <CardDescription>
                  View the complete calendar of school activities and events
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center py-8">
                <Calendar className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                <h3 className="text-lg font-semibold mb-2">Full Activity Calendar</h3>
                <p className="text-muted-foreground mb-4">
                  Access the complete calendar with all upcoming events, meetings, and activities.
                </p>
                <Button variant="educational">
                  View Full Calendar
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Clubs & Societies Tab */}
          <TabsContent value="clubs" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {clubs.map((club, index) => (
                <Card key={index} className="content-section">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <div className="p-2 rounded-lg primary-gradient">
                        <club.icon className="h-6 w-6 text-white" />
                      </div>
                      {club.name}
                    </CardTitle>
                    <CardDescription>{club.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="font-medium">Members:</span> {club.members}
                      </div>
                      <div>
                        <span className="font-medium">Advisor:</span> {club.advisor}
                      </div>
                    </div>
                    <div className="text-sm">
                      <span className="font-medium">Meetings:</span> {club.meeting}
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Recent Achievements</h4>
                      <div className="space-y-1">
                        {club.achievements.map((achievement, achIndex) => (
                          <div key={achIndex} className="flex items-center space-x-2">
                            <Trophy className="h-3 w-3 text-education-orange" />
                            <span className="text-xs">{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <Button variant="outline" className="w-full">
                      Join Club
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Start a New Club */}
            <Card className="content-section">
              <CardHeader>
                <CardTitle>Start a New Club</CardTitle>
                <CardDescription>
                  Have an idea for a new club or society? We encourage student initiative!
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Students can propose new clubs by gathering at least 10 interested members, 
                  finding a faculty advisor, and submitting a proposal to the Student Activities Office.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="educational">
                    <Book className="h-4 w-4 mr-2" />
                    Club Proposal Guidelines
                  </Button>
                  <Button variant="outline">
                    Submit Proposal
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Sports Teams Tab */}
          <TabsContent value="sports" className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {sportsTeams.map((team, index) => (
                <Card key={index} className="content-section">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-education-green">
                        <team.icon className="h-6 w-6 text-white" />
                      </div>
                      {team.sport}
                    </CardTitle>
                    <CardDescription>
                      {team.season} Season • Coach: {team.coach}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-medium mb-2">Teams</h4>
                      <div className="flex flex-wrap gap-2">
                        {team.teams.map((teamType, teamIndex) => (
                          <Badge key={teamIndex} variant="outline">
                            {teamType}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Achievements</h4>
                      <div className="space-y-1">
                        {team.achievements.map((achievement, achIndex) => (
                          <div key={achIndex} className="flex items-center space-x-2">
                            <Trophy className="h-3 w-3 text-education-orange" />
                            <span className="text-xs">{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="p-3 bg-muted/50 rounded-lg">
                      <h4 className="font-medium text-sm">Next Game</h4>
                      <p className="text-sm text-muted-foreground">{team.nextGame}</p>
                    </div>
                    <Button variant="outline" className="w-full">
                      Join Team
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Sports Facilities */}
            <Card className="content-section">
              <CardHeader>
                <CardTitle>Sports Facilities</CardTitle>
                <CardDescription>
                  State-of-the-art facilities supporting our athletic programs
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="text-center p-4 rounded-lg bg-muted/50">
                    <Volleyball className="h-8 w-8 mx-auto mb-2 text-education-green" />
                    <h4 className="font-semibold">Gymnasium</h4>
                    <p className="text-sm text-muted-foreground">Full-size basketball court</p>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-muted/50">
                    <Trophy className="h-8 w-8 mx-auto mb-2 text-education-blue" />
                    <h4 className="font-semibold">Athletic Fields</h4>
                    <p className="text-sm text-muted-foreground">Soccer and track field</p>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-muted/50">
                    <Users className="h-8 w-8 mx-auto mb-2 text-education-purple" />
                    <h4 className="font-semibold">Fitness Center</h4>
                    <p className="text-sm text-muted-foreground">Modern equipment</p>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-muted/50">
                    <Calendar className="h-8 w-8 mx-auto mb-2 text-education-orange" />
                    <h4 className="font-semibold">Sports Medicine</h4>
                    <p className="text-sm text-muted-foreground">Injury prevention & care</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Volunteer Tab */}
          <TabsContent value="volunteer" className="space-y-8">
            <Card className="content-section">
              <CardHeader>
                <CardTitle>Community Service & Volunteer Opportunities</CardTitle>
                <CardDescription>
                  Make a difference in your community while developing valuable life skills
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground">
                  Excellence High School encourages students to engage with their community through 
                  volunteer service. Students are required to complete 40 hours of community service 
                  before graduation, but many exceed this requirement.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {volunteerOpportunities.map((opportunity, index) => (
                    <div key={index} className="border rounded-lg p-4">
                      <h4 className="font-semibold text-lg mb-2">{opportunity.title}</h4>
                      <div className="space-y-2 text-sm">
                        <div>
                          <span className="font-medium">Organization:</span> {opportunity.organization}
                        </div>
                        <div>
                          <span className="font-medium">Time Commitment:</span> {opportunity.timeCommitment}
                        </div>
                        <div>
                          <span className="font-medium">Skills Developed:</span> {opportunity.skills}
                        </div>
                        <div>
                          <span className="font-medium">Contact:</span> {opportunity.contact}
                        </div>
                      </div>
                      <Button size="sm" variant="outline" className="mt-3">
                        Apply Now
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Service Learning */}
            <Card className="content-section">
              <CardHeader>
                <CardTitle>Service Learning Requirements</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-education-green mb-2">40</div>
                    <div className="text-sm text-muted-foreground">Required Hours</div>
                    <div className="text-xs text-muted-foreground">Before graduation</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-education-blue mb-2">15+</div>
                    <div className="text-sm text-muted-foreground">Partner Organizations</div>
                    <div className="text-xs text-muted-foreground">Community partnerships</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-education-purple mb-2">95%</div>
                    <div className="text-sm text-muted-foreground">Participation Rate</div>
                    <div className="text-xs text-muted-foreground">Student involvement</div>
                  </div>
                </div>
                <div className="mt-6 text-center">
                  <Button variant="educational">
                    Service Learning Handbook
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