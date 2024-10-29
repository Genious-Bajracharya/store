import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
export default function Footer() {
    return (
      <footer id='footer' className="bg-gray-800 text-gray-200 py-10 mt-16 ">
        <div className="container mx-auto px-4 sm:px-8 lg:px-16">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            
            <div className="text-center lg:text-left mb-4 lg:mb-0">
              <h2 className="text-2xl font-semibold text-white">Online Store</h2>
              <p className="text-gray-400"> Kathmandu, Nepal</p>
            </div>
  
            
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-4 lg:mb-0">
              <a href="/" className="hover:text-white">Home</a>
              <a href="/" className="hover:text-white">Products</a>
              <a href="/" className="hover:text-white">About</a>
              <a href="/" className="hover:text-white">Contact</a>
            </div>
  
           
            <div className="flex justify-center gap-4">
            <a
              href="https://www.linkedin.com/in/genious-bajracharya-573964211/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500"
            >
              <FaLinkedin className="h-6 w-6" />
            </a>
            <a
              href="https://github.com/Genious-Bajracharya"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
            >
              <FaGithub className="h-6 w-6" />
            </a>
            <a
              href="https://www.instagram.com/_genious.__/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500"
            >
              <FaInstagram className="h-6 w-6" />
            </a>
          </div>
        </div>
  
          <div className="text-center text-gray-500 mt-6 text-sm">
            &copy; {new Date().getFullYear()} Genious Bajracharya. All rights reserved.
          </div>
        </div>
      </footer>
    );
  }
  