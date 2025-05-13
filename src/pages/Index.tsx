import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Shield, Twitter, Linkedin, Github } from "lucide-react";

const Index = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-primary">
      {/* Abstract SVG Background */}
      <svg className="absolute inset-0 w-full h-full z-0" viewBox="0 0 1440 600" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill="#e3f2fd" fillOpacity="0.7" d="M0,160L60,154.7C120,149,240,139,360,154.7C480,171,600,213,720,229.3C840,245,960,235,1080,218.7C1200,203,1320,181,1380,170.7L1440,160L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z" />
        <circle cx="1200" cy="100" r="120" fill="#f59e0b" fillOpacity="0.15" />
        <circle cx="200" cy="500" r="80" fill="#f59e0b" fillOpacity="0.10" />
      </svg>

      <div className="relative z-10 text-center max-w-2xl px-8 py-16 animate-fade-in">
        <div className="flex justify-center mb-8">
          <div className="size-20 rounded-full bg-tertiary flex items-center justify-center shadow-lg">
            <Shield className="size-10 text-white" />
          </div>
        </div>
        <h1 className="text-6xl font-extrabold mb-6 text-gray-900 tracking-tight leading-tight">
          Welcome to <span className="text-tertiary">Instaplug</span>
        </h1>
        <p className="text-2xl text-gray-700 mb-10 max-w-xl mx-auto font-medium">
          Your mobile application by Aeres Technologies Limited, designed with security and privacy in mind.
        </p>
        <Card className="bg-white/90 shadow-2xl border-0 rounded-3xl hover:scale-105 transition-transform duration-300 mb-10">
          <CardContent className="p-10">
            <p className="text-gray-800 mb-8 text-lg">
              At Instaplug, we value your privacy and are committed to protecting your personal information. Read our privacy policy to learn more about how we handle your data.
            </p>
            <Link to="/privacy-policy">
              <Button className="bg-tertiary hover:bg-tertiary/90 text-white px-8 py-3 text-lg rounded-full shadow-md transition-all">
                View Privacy Policy
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>

      <footer className="relative z-10 w-full p-8 mt-auto text-center bg-secondary/80 backdrop-blur-lg shadow-inner">
        <Separator className="mb-8" />
        <div className="flex flex-col md:flex-row justify-between items-center max-w-5xl mx-auto px-4 gap-4">
          <p className="text-gray-600 text-base">
            © 2025 Aeres Technologies Limited. All rights reserved.
          </p>
          <div className="flex items-center gap-6 mb-4 md:mb-0">
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-tertiary transition-colors">
              <Twitter className="size-6" />
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-tertiary transition-colors">
              <Linkedin className="size-6" />
            </a>
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-tertiary transition-colors">
              <Github className="size-6" />
            </a>
          </div>
          <Link
            to="/privacy-policy"
            className="text-tertiary hover:text-tertiary/80 underline-offset-4 hover:underline transition-colors text-base"
          >
            Privacy Policy
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default Index;
