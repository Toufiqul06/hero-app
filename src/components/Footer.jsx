import React from "react";
import logo from "../assets/logo.png"; 

const Footer = () => {
  return (
    <footer className="bg-[#001931] text-gray-300">
      <div className="max-w-7xl mx-auto px-5 py-10 flex flex-col md:flex-row justify-between items-center md:items-start gap-10">
        
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <img src={logo} alt="Hero.io Logo" className="w-20 mb-3" /> 
          <p className="font-bold text-lg">
            HERO.IO
            <br />
            Providing reliable tech since 1992
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-10 text-center md:text-left">
          <div>
            <h6 className="text-lg font-semibold mb-2">Services</h6>
            <ul className="space-y-1">
              <li><a href="#" className="hover:text-blue-600">Branding</a></li>
              <li><a href="#" className="hover:text-blue-600">Design</a></li>
              <li><a href="#" className="hover:text-blue-600">Marketing</a></li>
              <li><a href="#" className="hover:text-blue-600">Advertisement</a></li>
            </ul>
          </div>

          <div>
            <h6 className="text-lg font-semibold mb-2">Company</h6>
            <ul className="space-y-1">
              <li><a href="#" className="hover:text-blue-600">About us</a></li>
              <li><a href="#" className="hover:text-blue-600">Contact</a></li>
              <li><a href="#" className="hover:text-blue-600">Jobs</a></li>
              <li><a href="#" className="hover:text-blue-600">Press kit</a></li>
            </ul>
          </div>

          <div>
            <h6 className="text-lg font-semibold mb-2">Legal</h6>
            <ul className="space-y-1">
              <li><a href="#" className="hover:text-blue-600">Terms of use</a></li>
              <li><a href="#" className="hover:text-blue-600">Privacy policy</a></li>
              <li><a href="#" className="hover:text-blue-600">Cookie policy</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="text-center py-4 text-sm">
        <p>
          Copyright © {new Date().getFullYear()} — 
          <span className="font-semibold"> HERO.IO</span>. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
