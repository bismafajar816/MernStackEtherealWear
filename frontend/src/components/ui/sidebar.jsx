import React, { useState } from 'react';
import { Calendar, Home as HomeIcon, Inbox, Search, Settings, ShoppingCart, User, List, Package } from 'lucide-react';

const items = [
  { title: 'Home', url: '#', icon: HomeIcon },
  { title: 'Categories', url: '#', icon: List },
  { title: 'Cart', url: '#', icon: ShoppingCart },
  { title: 'Order', url: '#', icon: Package },
  { title: 'Account', url: '#', icon: User },
];

const CollapsibleSidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className={`flex flex-col ${isCollapsed ? 'w-16' : 'w-64'} h-screen bg-gray-800 transition-all duration-300`}>
      {/* Sidebar Button at the Top */}
      <button
        onClick={toggleSidebar}
        className="p-4 bg-gray-900 text-white font-bold text-lg flex items-center justify-center"
      >
        LAAM
      </button>

      {/* Sidebar Menu */}
      <div className="sidebar-content mt-4 flex flex-col w-full">
        {items.map((item) => (
          <div key={item.title} className="sidebar-item flex items-center p-2">
            <a href={item.url} className="flex items-center space-x-2 text-white">
              <item.icon />
              {!isCollapsed && <span>{item.title}</span>}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CollapsibleSidebar;