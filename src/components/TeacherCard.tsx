import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, GraduationCap, Award, User } from "lucide-react";
import { motion } from "framer-motion";

interface TeacherCardProps {
  teacher: {
    id: number;
    name: string;
    photo?: string;
    designation: string;
    subject: string;
    department: string;
    education: string;
    experience: string;
    email: string;
    phone: string;
    specializations: string[];
    achievements: string[];
  };
  index: number;
}

export const TeacherCard = ({ teacher, index }: TeacherCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
    >
      <Card className="content-section group hover:shadow-educational transition-all duration-300 hover:-translate-y-1">
        <CardContent className="p-6">
          {/* Teacher Photo & Basic Info */}
          <div className="flex items-center space-x-4 mb-4">
            <div className="relative">
              {teacher.photo ? (
                <img
                  src={teacher.photo}
                  alt={teacher.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-education-green/20"
                />
              ) : (
                <div className="w-16 h-16 rounded-full bg-education-green/10 flex items-center justify-center">
                  <User className="h-8 w-8 text-education-green" />
                </div>
              )}
              <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-education-green rounded-full flex items-center justify-center">
                <GraduationCap className="h-3 w-3 text-white" />
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-primary mb-1">{teacher.name}</h3>
              <p className="text-sm text-education-purple font-medium">{teacher.designation}</p>
              <p className="text-xs text-muted-foreground">{teacher.department}</p>
            </div>
            <Badge variant="secondary" className="bg-education-green/10 text-education-green border-education-green/20">
              {teacher.subject}
            </Badge>
          </div>

          {/* Education & Experience */}
          <div className="space-y-3 mb-4">
            <div>
              <h4 className="text-xs font-semibold text-muted-foreground mb-1">EDUCATION</h4>
              <p className="text-sm">{teacher.education}</p>
            </div>
            <div>
              <h4 className="text-xs font-semibold text-muted-foreground mb-1">EXPERIENCE</h4>
              <p className="text-sm">{teacher.experience}</p>
            </div>
          </div>

          {/* Specializations */}
          <div className="mb-4">
            <h4 className="text-xs font-semibold text-muted-foreground mb-2">SPECIALIZATIONS</h4>
            <div className="flex flex-wrap gap-1">
              {teacher.specializations.map((spec, index) => (
                <Badge key={index} variant="outline" className="text-xs">
                  {spec}
                </Badge>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div className="mb-4">
            <h4 className="text-xs font-semibold text-muted-foreground mb-2">ACHIEVEMENTS</h4>
            <div className="space-y-1">
              {teacher.achievements.slice(0, 2).map((achievement, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <Award className="h-3 w-3 text-education-orange flex-shrink-0" />
                  <span className="text-xs">{achievement}</span>
                </div>
              ))}
              {teacher.achievements.length > 2 && (
                <span className="text-xs text-muted-foreground">
                  +{teacher.achievements.length - 2} more
                </span>
              )}
            </div>
          </div>

          {/* Contact Actions */}
          <div className="flex gap-2">
            <Button variant="outline" size="sm" className="flex-1">
              <Mail className="h-3 w-3 mr-1" />
              Email
            </Button>
            <Button variant="outline" size="sm" className="flex-1">
              <Phone className="h-3 w-3 mr-1" />
              Call
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};