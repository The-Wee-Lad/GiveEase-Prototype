import React from "react";
import {
    Facebook,
    Instagram,
    Linkedin,
    Twitter,
    Mail,
    Phone,
    MapPin,
    ArrowRight,
} from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-12 lg:px-40 px-6">
            <div className="container mx-auto flex flex-wrap justify-between items-start gap-8">
                <div className="w-full md:w-1/3 text-center md:text-left">
                    <h2 className="text-xl font-bold">GiveEase</h2>
                    <p className="text-gray-300 mt-2">   
                    GiveEase is a dynamic platform dedicated to supporting NGOs and social causes. It streamlines donations, showcases impactful programs, and fosters community engagement. With transparent operations, user reviews, and interactive features, GiveEase empowers individuals to contribute effectively, making philanthropy accessible and impactful for all.
                    </p>
                    <button className="mt-4 bg-green-500 hover:bg-green-600 text-white px-4 py-2 flex items-center gap-2 rounded mx-auto md:mx-0">
                        Contact Us Now <ArrowRight className="w-4 h-4" />
                    </button>
                </div>
                <div className="w-full md:w-1/3 flex justify-between text-center">
                    <div>
                        <h3 className="text-lg font-semibold">About Us</h3>
                        <ul className="mt-2 text-gray-400 space-y-2">
                            <li>Volunteer</li>
                            <li>Careers</li>
                            <li>Partner</li>
                            <li>Events</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold">Get Involved</h3>
                        <ul className="mt-2 text-gray-400 space-y-2">
                            <li>Mission Vision</li>
                            <li>Our Values</li>
                            <li>Impact Stories</li>
                            <li>Legal</li>
                        </ul>
                    </div>
                </div> 
            </div>
            <div className="flex justify-center mt-8">
                <div className="flex gap-6">
                    <Facebook className="w-8 h-8 text-gray-400 hover:text-white cursor-pointer" />
                    <Twitter className="w-8 h-8 text-gray-400 hover:text-white cursor-pointer" />
                    <Instagram className="w-8 h-8 text-gray-400 hover:text-white cursor-pointer" />
                    <Linkedin className="w-8 h-8 text-gray-400 hover:text-white cursor-pointer" />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
