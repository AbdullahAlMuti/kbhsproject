import { useState } from "react";
import { Menu, X, Search, User } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import schoolLogo from "@/assets/school-logo.png";
import { NoticesTicker } from "./NoticesTicker";
import { LanguageToggle } from "./LanguageToggle";

const navigationItems = [
  { name: "Home", path: "/" },
  { name: "About School", path: "/about" },
  { name: "Head Teacher", path: "/headteacher" },
  { name: "Notices", path: "/notices" },
  { name: "Academic Info", path: "/academic" },
  { name: "Student Info", path: "/students" },
  { name: "Teachers & Staff", path: "/teachers" },
  { name: "Activities", path: "/activities" },
  { name: "Gallery", path: "/gallery" },
  { name: "Contact", path: "/contact" },
];

const quickLinks = [
  { name: "Login", path: "/login" },
  { name: "Admin", path: "/admin" },
  { name: "Attendance", path: "/attendance" },
  { name: "Results", path: "/results" },
  { name: "Guardian", path: "/guardian" },
  { name: "Alumni", path: "/alumni" },
];

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-background shadow-lg">
      {/* Notices Ticker */}
      <NoticesTicker />
      
      {/* Top Bar */}
      <div className="primary-gradient text-white">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center space-x-4">
              <span>📧 info@school.edu</span>
              <span>📞 +1234567890</span>
            </div>
            <div className="hidden md:flex items-center space-x-2">
              <LanguageToggle />
              {quickLinks.slice(0, 3).map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="hover:text-accent transition-colors px-2 py-1 rounded"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo and School Info */}
            <Link to="/" className="flex items-center space-x-4">
              <img src={schoolLogo} alt="School Logo" className="h-12 w-12" />
              <div>
                <h1 className="text-xl md:text-2xl font-bold text-primary">
                  Excellence High School
                </h1>
                <p className="text-sm text-muted-foreground">
                  Empowering Minds, Building Futures
                </p>
              </div>
            </Link>

            {/* Search Bar */}
            <div className="hidden md:flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  type="search"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 w-64"
                />
              </div>
              <Button variant="outline" size="sm">
                <User className="h-4 w-4 mr-2" />
                Portal
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-education-green text-white">
        <div className="container mx-auto px-4">
          <div className={`md:flex ${isMenuOpen ? 'block' : 'hidden'} md:block`}>
            <div className="flex flex-col md:flex-row md:space-x-1 py-2">
              {navigationItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`nav-link text-white hover:bg-white/10 rounded-md transition-colors ${
                    isActive(item.path) ? 'bg-white/20' : ''
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Quick Links Bar for Mobile */}
      {isMenuOpen && (
        <div className="md:hidden bg-education-purple text-white">
          <div className="container mx-auto px-4 py-2">
            <div className="grid grid-cols-2 gap-2">
              {quickLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-center py-2 px-3 rounded bg-white/10 hover:bg-white/20 transition-colors text-sm"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};