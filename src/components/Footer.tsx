import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from "lucide-react";
import schoolLogo from "@/assets/school-logo.png";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* School Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img src={schoolLogo} alt="School Logo" className="h-10 w-10" />
              <div>
                <h3 className="text-xl font-bold">Excellence High School</h3>
                <p className="text-sm text-gray-400">Est. 1985</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm">
              Committed to providing quality education and nurturing young minds 
              to become future leaders and responsible citizens.
            </p>
            <div className="flex space-x-3">
              <Facebook className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
              <Twitter className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
              <Instagram className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <Link to="/about" className="block text-gray-300 hover:text-white transition-colors">
                About School
              </Link>
              <Link to="/academic" className="block text-gray-300 hover:text-white transition-colors">
                Academic Info
              </Link>
              <Link to="/notices" className="block text-gray-300 hover:text-white transition-colors">
                Notices
              </Link>
              <Link to="/gallery" className="block text-gray-300 hover:text-white transition-colors">
                Gallery
              </Link>
              <Link to="/contact" className="block text-gray-300 hover:text-white transition-colors">
                Contact Us
              </Link>
            </div>
          </div>

          {/* Student Portal */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Student Portal</h4>
            <div className="space-y-2">
              <Link to="/login" className="block text-gray-300 hover:text-white transition-colors">
                Student Login
              </Link>
              <Link to="/results" className="block text-gray-300 hover:text-white transition-colors">
                Result Section
              </Link>
              <Link to="/attendance" className="block text-gray-300 hover:text-white transition-colors">
                Digital Attendance
              </Link>
              <Link to="/guardian" className="block text-gray-300 hover:text-white transition-colors">
                Guardian Corner
              </Link>
              <Link to="/alumni" className="block text-gray-300 hover:text-white transition-colors">
                Alumni Network
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-gray-400 mt-0.5" />
                <div>
                  <p className="text-gray-300 text-sm">123 Education Street</p>
                  <p className="text-gray-300 text-sm">Learning City, LC 12345</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-gray-400" />
                <p className="text-gray-300 text-sm">+1 (234) 567-8900</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-gray-400" />
                <p className="text-gray-300 text-sm">info@excellencehigh.edu</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Excellence High School. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link to="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};