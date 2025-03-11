import { useState } from "react";
import { Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [loginOpen, setLoginOpen] = useState(false);
    return (
        <nav className="bg-gray-800 p-2 text-white sticky top-0 z-50">
            <div className="lg:px-20 container mx-auto flex justify-between items-center">
                <div className="flex gap-x-1">
                    <img
                        src="Logo1.jpg"
                        alt="logo"
                        className="w-20 h-10 object-contain max-md:hidden rounded-lg"
                    />
                    <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-700 to-sky-500 bg-clip-text text-transparent">
                        GiveEase
                    </h1>
                </div>
                <ul className="hidden md:flex gap-6 items-center text-lg font-semibold">
                    <li>
                        <NavLink to="/" className="hover:underline">
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" className="hover:underline">
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" className="hover:underline">
                            Contact
                        </NavLink>
                    </li>
                    <li
                        className="relative"
                        onMouseEnter={() => setLoginOpen(true)}
                        onMouseLeave={() => setLoginOpen(false)}
                    >
                        <button className="flex items-center hover:cursor-pointer bg-white text-blue-600 px-4 py-1 rounded">
                            Login
                        </button>
                        {loginOpen && (
                            <div className="absolute top-full left-0 bg-white shadow-lg rounded-lg mt-2 w-40 flex flex-col z-10">
                                <NavLink
                                    to="/ngologin"
                                    className="text-blue-600 px-4 py-2 hover:bg-gray-200"
                                >
                                    NGO Login
                                </NavLink>
                                <NavLink
                                    to="/donorlogin"
                                    className="text-green-600 px-4 py-2 hover:bg-gray-200"
                                >
                                    Donor Login
                                </NavLink>
                            </div>
                        )}
                    </li>
                </ul>
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {isOpen && (
                <div className="md:hidden p-4 text-white flex flex-col items-center bg-gray-900">
                    <NavLink to="/" className="py-2 hover:underline">
                        Home
                    </NavLink>
                    <NavLink to="/about" className="py-2 hover:underline">
                        About
                    </NavLink>
                    <NavLink to="/contact" className="py-2 hover:underline">
                        Contact
                    </NavLink>
                    <div className="flex flex-col gap-2 mt-4">
                        <NavLink
                            to="/ngologin"
                            className="bg-white text-blue-600 px-4 py-2 rounded hover:scale-105"
                        >
                            NGO Login
                        </NavLink>
                        <NavLink
                            to="/donorlogin"
                            className="bg-green-500 text-white px-4 py-2 rounded"
                        >
                            Donor Login
                        </NavLink>
                    </div>
                </div>
            )}
        </nav>
    );
}
