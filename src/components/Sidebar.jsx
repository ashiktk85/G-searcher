import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  FiHome, 
  FiUsers, 
  FiSettings, 
  FiChevronLeft,
  FiChevronRight
} from 'react-icons/fi';
import { BiSolidBookmarkStar } from "react-icons/bi";

const Sidebar = ({ onCollapseChange }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (onCollapseChange) {
      onCollapseChange(isCollapsed);
    }
  }, [isCollapsed, onCollapseChange]);

  const menuItems = [
    {
      path: '/dashboard',
      icon: FiHome,
      label: 'Dashboard'
    },
    {
      path: '/users',
      icon: BiSolidBookmarkStar,
      label: 'Saved'
    },
    {
      path: '/settings',
      icon: FiSettings,
      label: 'Settings'
    }
  ];

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <div
      className={`bg-[#133a5b] text-white transition-all duration-300 ease-in-out ${
        isCollapsed ? 'w-20' : 'w-64'
      } min-h-screen fixed left-0 top-0 z-40`}
    >
 
      <div className="flex items-center justify-between p-4 border-b border-gray-700">
        {!isCollapsed && (
          <h2 className="text-xl font-bold text-white">Avoria</h2>
        )}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="p-2 rounded-lg hover:bg-gray-800 transition-colors"
          aria-label="Toggle sidebar"
        >
          {isCollapsed ? (
            <FiChevronRight className="w-5 h-5" />
          ) : (
            <FiChevronLeft className="w-5 h-5" />
          )}
        </button>
      </div>

      {/* Menu Items */}
      <nav className="mt-4">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const active = isActive(item.path);
          
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center px-4 py-3 mx-2 rounded-lg transition-colors hover:bg-gray-800 hover:text-white py-2 ${
                active ? 'bg-blue-600 text-white' : 'text-gray-300'
              }`}
              title={isCollapsed ? item.label : ''}
            >
              <Icon className={`${isCollapsed ? 'w-6 h-6' : 'w-5 h-5 mr-3'}`} />
              {!isCollapsed && (
                <span className="font-medium">{item.label}</span>
              )}
            </Link>
          );
        })}
      </nav>

      {!isCollapsed && (
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-700">
          <p className="text-xs text-gray-400 text-center">
            © 2024 Google Search App
          </p>
        </div>
      )}
    </div>
  );
};

export default Sidebar;

