import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Camera, Play, Calendar, Users, Award, BookOpen, Music, Palette } from "lucide-react";
import schoolBuilding from "@/assets/school-building.jpg";
import studentsClassroom from "@/assets/students-classroom.jpg";
import { Lightbox } from "@/components/Lightbox";
import { motion } from "framer-motion";

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const categories = ["All", "Academic", "Sports", "Cultural", "Facilities", "Events"];

  const galleryItems = [
    {
      id: 1,
      title: "Science Fair 2024",
      category: "Academic",
      type: "image",
      thumbnail: schoolBuilding,
      description: "Students presenting innovative science projects",
      date: "February 2024",
      album: "Academic Events"
    },
    {
      id: 2,
      title: "Basketball Championship",
      category: "Sports", 
      type: "image",
      thumbnail: studentsClassroom,
      description: "Varsity team wins district championship",
      date: "January 2024",
      album: "Sports Highlights"
    },
    {
      id: 3,
      title: "Annual Drama Production",
      category: "Cultural",
      type: "video",
      thumbnail: schoolBuilding,
      description: "Student performance of Shakespeare's Romeo & Juliet",
      date: "December 2023",
      album: "Drama Club"
    },
    {
      id: 4,
      title: "New Computer Lab",
      category: "Facilities",
      type: "image",
      thumbnail: studentsClassroom,
      description: "State-of-the-art technology center opening",
      date: "September 2023",
      album: "Campus Facilities"
    },
    {
      id: 5,
      title: "Cultural Festival 2023",
      category: "Cultural",
      type: "image",
      thumbnail: schoolBuilding,
      description: "Celebrating diversity and international cultures",
      date: "November 2023",
      album: "Cultural Events"
    },
    {
      id: 6,
      title: "Graduation Ceremony",
      category: "Events",
      type: "video",
      thumbnail: studentsClassroom,
      description: "Class of 2023 commencement celebration",
      date: "June 2023",
      album: "Graduation 2023"
    },
    {
      id: 7,
      title: "Math Olympiad Winners",
      category: "Academic",
      type: "image",
      thumbnail: schoolBuilding,
      description: "Students honored for mathematical excellence",
      date: "March 2023",
      album: "Academic Achievements"
    },
    {
      id: 8,
      title: "Soccer Team Victory",
      category: "Sports",
      type: "image",
      thumbnail: studentsClassroom,
      description: "Regional soccer championship celebration",
      date: "October 2023",
      album: "Sports Highlights"
    }
  ];

  const albums = [
    {
      name: "Academic Events",
      count: 45,
      thumbnail: schoolBuilding,
      description: "Science fairs, competitions, and academic achievements"
    },
    {
      name: "Sports Highlights",
      count: 67,
      thumbnail: studentsClassroom,
      description: "Athletic competitions, team photos, and victories"
    },
    {
      name: "Cultural Events",
      count: 38,
      thumbnail: schoolBuilding,
      description: "Festivals, performances, and cultural celebrations"
    },
    {
      name: "Campus Facilities",
      count: 25,
      thumbnail: studentsClassroom,
      description: "School buildings, classrooms, and learning spaces"
    },
    {
      name: "Graduation 2023",
      count: 89,
      thumbnail: schoolBuilding,
      description: "Commencement ceremony and graduation memories"
    },
    {
      name: "Student Life",
      count: 156,
      thumbnail: studentsClassroom,
      description: "Daily activities, clubs, and student interactions"
    }
  ];

  const recentHighlights = [
    {
      title: "Winter Concert Performance",
      date: "December 2023",
      views: "2.5K",
      likes: "184",
      type: "video"
    },
    {
      title: "Science Lab Experiments",
      date: "January 2024",
      views: "1.8K",
      likes: "156",
      type: "image"
    },
    {
      title: "Art Exhibition Opening",
      date: "February 2024",
      views: "3.2K",
      likes: "298",
      type: "image"
    },
    {
      title: "Student Council Elections",
      date: "September 2023",
      views: "1.4K",
      likes: "112",
      type: "video"
    }
  ];

  const filteredItems = selectedCategory === "All" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  const lightboxImages = filteredItems.map(item => ({
    src: item.thumbnail,
    title: item.title,
    description: item.description,
    type: item.type as 'image' | 'video'
  }));

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="page-title">School Gallery</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our vibrant school community through photos and videos capturing 
            academic achievements, sports victories, cultural events, and daily school life.
          </p>
        </motion.div>

        <Tabs defaultValue="gallery" className="space-y-8">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
            <TabsTrigger value="gallery">Photo Gallery</TabsTrigger>
            <TabsTrigger value="albums">Albums</TabsTrigger>
            <TabsTrigger value="videos">Videos</TabsTrigger>
            <TabsTrigger value="highlights">Highlights</TabsTrigger>
          </TabsList>

          {/* Photo Gallery Tab */}
          <TabsContent value="gallery" className="space-y-8">
            {/* Filter Categories */}
            <Card className="content-section">
              <CardContent className="pt-6">
                <div className="flex flex-wrap gap-2 justify-center">
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
              </CardContent>
            </Card>

            {/* Gallery Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card 
                    className="content-section group cursor-pointer hover:scale-105"
                    onClick={() => openLightbox(index)}
                  >
                    <div className="relative overflow-hidden rounded-t-lg">
                      <img 
                        src={item.thumbnail} 
                        alt={item.title}
                        className="w-full h-48 object-cover transition-transform group-hover:scale-110"
                      />
                      {item.type === "video" && (
                        <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                          <Play className="h-12 w-12 text-white" />
                        </div>
                      )}
                      <div className="absolute top-2 right-2">
                        <Badge 
                          variant="secondary" 
                          className={
                            item.category === 'Academic' ? 'bg-education-blue text-white' :
                            item.category === 'Sports' ? 'bg-education-green text-white' :
                            item.category === 'Cultural' ? 'bg-education-purple text-white' :
                            item.category === 'Facilities' ? 'bg-education-orange text-white' :
                            'bg-gray-500 text-white'
                          }
                        >
                          {item.category}
                        </Badge>
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-semibold mb-2">{item.title}</h3>
                      <p className="text-sm text-muted-foreground mb-2">{item.description}</p>
                      <div className="flex justify-between items-center text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {item.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Camera className="h-3 w-3" />
                          {item.type}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center">
              <Button variant="educational">
                Load More Photos
              </Button>
            </div>
          </TabsContent>

          {/* Albums Tab */}
          <TabsContent value="albums" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {albums.map((album, index) => (
                <Card key={index} className="content-section group cursor-pointer hover:scale-105">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img 
                      src={album.thumbnail} 
                      alt={album.name}
                      className="w-full h-48 object-cover transition-transform group-hover:scale-110"
                    />
                    <div className="absolute bottom-2 right-2">
                      <Badge variant="secondary" className="bg-black/70 text-white">
                        {album.count} photos
                      </Badge>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-lg mb-2">{album.name}</h3>
                    <p className="text-sm text-muted-foreground">{album.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Videos Tab */}
          <TabsContent value="videos" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryItems.filter(item => item.type === "video").map((video) => (
                <Card key={video.id} className="content-section group cursor-pointer">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img 
                      src={video.thumbnail} 
                      alt={video.title}
                      className="w-full h-48 object-cover transition-transform group-hover:scale-110"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                      <Play className="h-16 w-16 text-white" />
                    </div>
                    <div className="absolute bottom-2 left-2">
                      <Badge variant="secondary" className="bg-red-600 text-white">
                        Video
                      </Badge>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold mb-2">{video.title}</h3>
                    <p className="text-sm text-muted-foreground mb-2">{video.description}</p>
                    <div className="flex justify-between items-center text-xs text-muted-foreground">
                      <span>{video.date}</span>
                      <span>{video.album}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="content-section">
              <CardHeader>
                <CardTitle>Video Categories</CardTitle>
                <CardDescription>
                  Explore videos by category
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="text-center p-4 rounded-lg bg-muted/50">
                    <BookOpen className="h-8 w-8 mx-auto mb-2 text-education-blue" />
                    <h4 className="font-semibold">Academic</h4>
                    <p className="text-sm text-muted-foreground">12 videos</p>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-muted/50">
                    <Award className="h-8 w-8 mx-auto mb-2 text-education-green" />
                    <h4 className="font-semibold">Sports</h4>
                    <p className="text-sm text-muted-foreground">18 videos</p>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-muted/50">
                    <Music className="h-8 w-8 mx-auto mb-2 text-education-purple" />
                    <h4 className="font-semibold">Performances</h4>
                    <p className="text-sm text-muted-foreground">15 videos</p>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-muted/50">
                    <Palette className="h-8 w-8 mx-auto mb-2 text-education-orange" />
                    <h4 className="font-semibold">Events</h4>
                    <p className="text-sm text-muted-foreground">25 videos</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Highlights Tab */}
          <TabsContent value="highlights" className="space-y-8">
            <Card className="content-section">
              <CardHeader>
                <CardTitle>Recent Highlights</CardTitle>
                <CardDescription>
                  Most popular and recent content from our school community
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentHighlights.map((highlight, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center space-x-4">
                        <div className="p-2 rounded-lg bg-primary/10">
                          {highlight.type === "video" ? (
                            <Play className="h-6 w-6 text-primary" />
                          ) : (
                            <Camera className="h-6 w-6 text-primary" />
                          )}
                        </div>
                        <div>
                          <h4 className="font-medium">{highlight.title}</h4>
                          <p className="text-sm text-muted-foreground">{highlight.date}</p>
                        </div>
                      </div>
                      <div className="text-right text-sm text-muted-foreground">
                        <div>{highlight.views} views</div>
                        <div>{highlight.likes} likes</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="content-section text-center">
                <CardContent className="pt-6">
                  <Camera className="h-12 w-12 mx-auto mb-4 text-education-blue" />
                  <h3 className="text-2xl font-bold text-primary mb-2">2,500+</h3>
                  <p className="text-muted-foreground">Photos</p>
                </CardContent>
              </Card>
              <Card className="content-section text-center">
                <CardContent className="pt-6">
                  <Play className="h-12 w-12 mx-auto mb-4 text-education-green" />
                  <h3 className="text-2xl font-bold text-primary mb-2">150+</h3>
                  <p className="text-muted-foreground">Videos</p>
                </CardContent>
              </Card>
              <Card className="content-section text-center">
                <CardContent className="pt-6">
                  <Users className="h-12 w-12 mx-auto mb-4 text-education-purple" />
                  <h3 className="text-2xl font-bold text-primary mb-2">50K+</h3>
                  <p className="text-muted-foreground">Views</p>
                </CardContent>
              </Card>
            </div>

            <Card className="content-section">
              <CardHeader>
                <CardTitle>Submit Your Photos</CardTitle>
                <CardDescription>
                  Share your school memories with the community
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="text-muted-foreground">
                  Students, parents, and staff are welcome to submit photos from school events 
                  and activities to be featured in our gallery.
                </p>
                <Button variant="educational">
                  <Camera className="h-4 w-4 mr-2" />
                  Submit Photos
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Lightbox */}
        <Lightbox
          isOpen={lightboxOpen}
          onClose={() => setLightboxOpen(false)}
          images={lightboxImages}
          currentIndex={currentImageIndex}
          onNavigate={setCurrentImageIndex}
        />
      </div>
    </div>
  );
}