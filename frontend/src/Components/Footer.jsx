import React from "react";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Facebook, Twitter, Github } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 font-sans">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 space-y-10">
        
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between gap-10">
          
          {/* Brand Info */}
          <div className="space-y-0">
            <img
              src="/assets/DarkMode-Logo.png"
              alt="Light Mode Logo"
              className="w-[180px] h-[120px] object-contain items-start m-0"
            />
            <p className="text-md text-gray-400 max-w-sm">
              Empowering fashion brands with AI-driven ad generation. Your style, your story—automated.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <ul className="space-y-2 text-md">
              <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Follow Us</h4>
            <div className="flex space-x-4">
              <Button variant="outline" size="icon" className="bg-gray-800 hover:bg-gray-700 border-none text-gray-400 hover:text-white transition">
                <Facebook className="w-5 h-5" />
              </Button>
              <Button variant="outline" size="icon" className="bg-gray-800 hover:bg-gray-700 border-none text-gray-400 hover:text-white transition">
                <Twitter className="w-5 h-5" />
              </Button>
              <Button variant="outline" size="icon" className="bg-gray-800 hover:bg-gray-700 border-none text-gray-400 hover:text-white transition">
                <Github className="w-5 h-5" />
              </Button>
            </div>
          </div>

        </div>

        {/* Divider */}
        <Separator className="bg-gray-700" />

        {/* Bottom Text */}
        <div className="text-center text-sm text-gray-500">
          © {new Date().getFullYear()} AdVance. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
