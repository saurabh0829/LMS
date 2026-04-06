import React from "react";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <footer className="  bg-gray-900 w-full md:px-36 mt-10">
      <div className="border-b border-slate-600 flex items-center mt-6 px-10 py-4">
        <div className="w-1/3 text-center px-6">
          <img src={assets.logo_dark} alt="dark logo" className="mb-6" />
          <p className="text-white ml-4 text-start">
            Lorem ipsum, dolor sit amet consectetur adipisicing
            elit.Repudiandae, officiis. Lorem ipsum dolor sit amet
            consectetur,adipisicing elit. Labore asperiores cum aliquam ipsum
            quas aspernatur distinctio id, voluptatem in delectus?
          </p>
        </div>
        <div className="text-slate-200 w-1/3 text-start px-6">
          <h2 className="mb-6 text-lg font-semibold">Company</h2>
          <ul className="flex md:flex-col w-full justify-between text-sm md:space-y-2">
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact us</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>
        <div className="w-1/3 text-slate-200 px-6 text-start">
          <h2 className="text-lg font-medium mb-8">
            Subscribe to our newsletter
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis,
            quasi.
          </p>
          <div className="flex gap-2 mt-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="border border-slate-500 rounded-sm bg-gray-700 text-slate-200 px-2"
            />
            <button className="bg-blue-800 text-slate-200 font-sm px-2 rounded">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <p className="text-slate-600 text-center py-2 text-xs">
        Copyright 2025 @ Edemy. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
