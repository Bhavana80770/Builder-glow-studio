import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Menu,
  X,
  Heart,
  MessageCircle,
  FileText,
  UserPlus,
  LogIn,
  Stethoscope,
} from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Home", href: "/", icon: Heart },
    { name: "Chat", href: "/chat", icon: MessageCircle },
    { name: "Symptoms", href: "/symptoms", icon: FileText },
    { name: "Connect Doctor", href: "/doctor", icon: Stethoscope },
  ];

  const authNavigation = [
    { name: "Login", href: "/login", icon: LogIn },
    { name: "Sign Up", href: "/signup", icon: UserPlus },
  ];

  return (
    <div className="min-h-screen bg-sand">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-grayborder">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 justify-between items-center">
            {/* Logo */}
            <div className="flex items-center">
              <Link to="/" className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-herbal rounded-lg flex items-center justify-center">
                  <Heart className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-semibold text-indigo">
                  AarogyaMitra
                </span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {navigation.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={cn(
                      "flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors",
                      location.pathname === item.href
                        ? "text-herbal bg-herbal/10"
                        : "text-indigo hover:text-herbal hover:bg-herbal/5",
                    )}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{item.name}</span>
                  </Link>
                );
              })}
            </nav>

            {/* Desktop Auth Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <Link to="/login">
                <Button variant="outline" size="sm">
                  Login
                </Button>
              </Link>
              <Link to="/signup">
                <Button size="sm" className="bg-herbal hover:bg-herbal/90">
                  Sign Up
                </Button>
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-grayborder">
              {navigation.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={cn(
                      "flex items-center space-x-2 px-3 py-2 rounded-md text-base font-medium",
                      location.pathname === item.href
                        ? "text-herbal bg-herbal/10"
                        : "text-indigo hover:text-herbal hover:bg-herbal/5",
                    )}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <Icon className="w-5 h-5" />
                    <span>{item.name}</span>
                  </Link>
                );
              })}
              <div className="pt-4 border-t border-grayborder space-y-2">
                {authNavigation.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="flex items-center space-x-2 px-3 py-2 rounded-md text-base font-medium text-indigo hover:text-herbal hover:bg-herbal/5"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <Icon className="w-5 h-5" />
                      <span>{item.name}</span>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="bg-white border-t border-grayborder">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-6 h-6 bg-herbal rounded-md flex items-center justify-center">
                <Heart className="w-4 h-4 text-white" />
              </div>
              <span className="text-lg font-semibold text-indigo">
                AarogyaMitra
              </span>
            </div>
            <p className="text-sm text-indigo/70">
              Your trusted AI health companion for rural healthcare
            </p>
            <p className="text-xs text-indigo/50 mt-2">
              © 2024 AarogyaMitra. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
