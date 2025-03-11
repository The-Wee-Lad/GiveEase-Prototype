import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
<<<<<<< HEAD
    const [isOpen, setIsOpen] = useState(false);
    const [loginOpen, setLoginOpen] = useState(false);
    return (
        <nav className="bg-gray-800 p-4 text-white sticky top-0 z-100">
            <div className="lg:px-20 container mx-auto flex justify-between items-center">
                <h1 className="text-2xl font-bold">GiveEase</h1>
                <ul className="hidden md:flex gap-6 items-center text-lg font-semibold">
                    <li>
                        <a href="#" className="hover:underline">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline">
                            About
                        </a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline">
                            Contact
                        </a>
                    </li>
                    <li
                        className="relative"
                        onMouseEnter={() => setLoginOpen(true)}
                        onClick={() => setLoginOpen(!loginOpen)}
                    >
                        <button className="flex items-center hover:cursor-pointer bg-white text-blue-600 px-4 py-2 rounded">
                            Login
                        </button>
                        {loginOpen && (
                            <div className="absolute top-full left-0 bg-white shadow-lg rounded-lg mt-2 w-40 flex flex-col z-10">
                                <button className="text-blue-600 px-4 py-2 hover:bg-gray-200">
                                    <NavLink to={'/ngoLogin'}> NGO Login</NavLink>
                                </button>
                                <button className="text-green-600 px-4 py-2 hover:bg-gray-200">
                                <NavLink to={'/donarLogin'}> Donor Login</NavLink>
                                </button>
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
                <div className="md:hidden p-4 text-white flex flex-col items-center">
                    <a href="#" className="py-2 hover:underline">
                        Home
                    </a>
                    <a href="#" className="py-2 hover:underline">
                        About
                    </a>
                    <a href="#" className="py-2 hover:underline">
                        Contact
                    </a>
                    <div className="flex flex-col gap-2 mt-4">
                        <button className="bg-white text-blue-600 px-4 py-2 rounded hover:scale-105 hover:cursor-pointer">
                           <NavLink to={'/ngoLogin'}> NGO Login</NavLink>
                        </button>
                        <button className="bg-green-500 text-white px-4 py-2 rounded">
                           <NavLink to={'/donarLogin'}> Donor Login</NavLink>
                        </button>
                    </div>
                </div>
=======
  const [isOpen, setIsOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  return (
    <nav className="bg-gray-800 p-2 text-white sticky top-0 z-100">
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
            <a href="#" className="hover:underline">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              About
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Contact
            </a>
          </li>
          <li
            className="relative"
            onMouseEnter={() => setLoginOpen(true)}
            onClick={() => setLoginOpen(!loginOpen)}
            onMouseLeave={() => setLoginOpen(false)}
          >
            <button className="flex items-center hover:cursor-pointer bg-white text-blue-600 px-4 py-1 rounded">
              Login
            </button>
            {loginOpen && (
              <div className="absolute top-full left-0 bg-white shadow-lg rounded-lg mt-2 w-40 flex flex-col z-10">
                <button className="text-blue-600 px-4 py-2 hover:bg-gray-200">
                  NGO Login
                </button>
                <button className="text-green-600 px-4 py-2 hover:bg-gray-200">
                  Donor Login
                </button>
              </div>
>>>>>>> bdbb43ac20b55af4c8f0390038357769c26689a7
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
        <div className="md:hidden p-4 text-white flex flex-col items-center">
          <a href="#" className="py-2 hover:underline">
            Home
          </a>
          <a href="#" className="py-2 hover:underline">
            About
          </a>
          <a href="#" className="py-2 hover:underline">
            Contact
          </a>
          <div className="flex flex-col gap-2 mt-4">
            <button className="bg-white text-blue-600 px-4 py-2 rounded hover:scale-105 hover:cursor-pointer">
              NGO Login
            </button>
            <button className="bg-green-500 text-white px-4 py-2 rounded">
              Donor Login
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
