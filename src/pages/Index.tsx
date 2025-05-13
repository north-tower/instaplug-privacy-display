
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Shield } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-custom">
      <div className="text-center max-w-xl px-6 py-12 animate-fade-in">
        <div className="flex justify-center mb-6">
          <div className="size-16 rounded-full bg-tertiary/20 flex items-center justify-center">
            <Shield className="size-8 text-tertiary" />
          </div>
        </div>
        
        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
          Welcome to Instaplug
        </h1>
        
        <p className="text-xl text-gray-600 mb-12 max-w-lg mx-auto">
          Your mobile application by Aeres Technologies Limited designed with security and privacy in mind
        </p>
        
        <Card className="bg-secondary/80 backdrop-blur-sm shadow-lg border-gray-100 hover:shadow-xl transition-all duration-300 mb-8">
          <CardContent className="p-8">
            <p className="text-gray-700 mb-6">
              At Instaplug, we value your privacy and are committed to protecting your personal information.
              Read our privacy policy to learn more about how we handle your data.
            </p>
            
            <Link to="/privacy-policy">
              <Button className="bg-tertiary hover:bg-tertiary/90 transition-all text-white">
                View Privacy Policy
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
      
      <footer className="w-full p-6 mt-auto text-center bg-primary/50 backdrop-blur-sm">
        <Separator className="mb-6" />
        <div className="flex flex-col md:flex-row justify-between items-center max-w-4xl mx-auto px-4">
          <p className="text-gray-500 mb-4 md:mb-0">
            © 2025 Aeres Technologies Limited. All rights reserved.
          </p>
          <Link 
            to="/privacy-policy" 
            className="text-tertiary hover:text-tertiary/80 underline-offset-4 hover:underline transition-colors"
          >
            Privacy Policy
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default Index;
