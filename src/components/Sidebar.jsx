import React from 'react';
import { FiHome, FiUser, FiSettings, FiLogOut } from 'react-icons/fi';
import Logo from "../../public/logo.png"
const Sidebar = () => {
  return (
    <div className="h-screen w-20 bg-gray-900 text-white flex flex-col items-center py-8">
      <div className="text-2xl mb-10">
        {/* Logo ou ícone principal da sidebar */}
        <img src={Logo} alt="Logo" className="h-12 w-12" />
      </div>
      <nav className="flex flex-col space-y-8 hover:cursor-pointer">
        <SidebarIcon icon={<FiHome size="28" />} text="Home" />
        <SidebarIcon icon={<FiUser size="28" />} text="Profile" />
        <SidebarIcon icon={<FiSettings size="28" />} text="Settings" />
        <SidebarIcon icon={<FiLogOut size="28" />} text="Logout" />
      </nav>
    </div>
  );
};

const SidebarIcon = ({ icon, text }) => (
  <div className="relative group flex justify-center">
    <div className="text-gray-400 group-hover:text-white transition duration-300">
      {icon}
    </div>
    <span className="absolute left-16 whitespace-nowrap bg-gray-800 text-white text-sm font-medium px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      {text}
    </span>
  </div>
);

export default Sidebar;
