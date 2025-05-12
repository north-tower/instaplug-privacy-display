
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="text-center max-w-xl px-4">
        <h1 className="text-4xl font-bold mb-4">Welcome to Instaplug</h1>
        <p className="text-xl text-gray-600 mb-8">Your mobile application by Aeres Technologies Limited</p>
        
        <div className="mt-8">
          <Link 
            to="/privacy-policy" 
            className="text-blue-600 hover:text-blue-800 underline"
          >
            View Privacy Policy
          </Link>
        </div>
      </div>
      
      <footer className="w-full p-4 mt-auto text-center text-sm text-gray-500">
        <p>© 2025 Aeres Technologies Limited. All rights reserved.</p>
        <Link 
          to="/privacy-policy" 
          className="text-gray-500 hover:text-gray-700 underline ml-2"
        >
          Privacy Policy
        </Link>
      </footer>
    </div>
  );
};

export default Index;
