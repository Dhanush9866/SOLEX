import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X, LogOut } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { isAuthenticated, logout } = useAuth();

  const navItems = [
    { name: "Industries", path: "/industries" },
    { name: "Solutions", path: "/services" },
    
  ];

  const isActive = (path) => location.pathname === path;

  const handleLogout = () => {
    logout();
    navigate("/");
    setIsOpen(false);
  };

  return (
    <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">

           
            <span className="font-bold text-xl text-gray-900">Solnex</span>

           
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`px-4 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 transform hover:scale-105 ${
                  isActive(item.path)
                    ? "text-white bg-gradient-to-r from-blue-600 to-blue-700 shadow-lg shadow-blue-500/25 border border-blue-500/20"
                    : "text-gray-700 bg-gray-50/50 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 hover:text-blue-700 hover:shadow-md hover:shadow-blue-500/10 border border-transparent hover:border-blue-200"
                }`}
              >
                {item.name}
              </Link>
            ))}
            {isAuthenticated && (
              <Button
                variant="ghost"
                onClick={handleLogout}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors text-gray-700 hover:text-blue-300 hover:bg-gray-50 flex items-center space-x-2 group`}
              >
                <LogOut className="h-4 w-4 text-gray-700 group-hover:text-blue-300 transition-colors" />
                <span className="text-gray-700 group-hover:text-blue-300 transition-colors">Logout</span>
              </Button>
            )}
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center space-x-2">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col space-y-4 mt-8">
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      className={`px-4 py-3 rounded-lg text-sm font-semibold transition-all duration-300 ${
                        isActive(item.path)
                          ? "text-white bg-gradient-to-r from-blue-600 to-blue-700 shadow-lg shadow-blue-500/25 border border-blue-500/20"
                          : "text-gray-700 bg-gray-50/50 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 hover:text-blue-700 hover:shadow-md hover:shadow-blue-500/10 border border-transparent hover:border-blue-200"
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                  {isAuthenticated && (
                    <div className="flex flex-col space-y-2 pt-4 border-t border-gray-200">
                      <Button
                        variant="ghost"
                        onClick={handleLogout}
                        className={`px-3 py-2 rounded-md text-sm font-medium transition-colors text-gray-700 hover:text-blue-300 hover:bg-gray-50 w-full justify-start flex items-center space-x-2 group`}
                      >
                        <LogOut className="h-4 w-4 text-gray-700 group-hover:text-blue-300 transition-colors" />
                        <span className="text-gray-700 group-hover:text-blue-300 transition-colors">Logout</span>
                      </Button>
                    </div>
                  )}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
