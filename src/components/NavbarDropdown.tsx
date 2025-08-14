import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
} from '@/components/ui/dropdown-menu';

interface NavItem {
  title: string;
  path?: string;
  items?: NavItem[];
}

interface NavbarDropdownProps {
  title: string;
  items: NavItem[];
  className?: string;
}

const NavbarDropdown: React.FC<NavbarDropdownProps> = ({ title, items, className = "" }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className={`text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors flex items-center ${className}`}>
        {title}
        <ChevronDown className="ml-1 h-3 w-3" />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="w-56">
        {items.map((item, index) => {
          if (item.items) {
            return (
              <DropdownMenuSub key={index}>
                <DropdownMenuSubTrigger>
                  {item.title}
                </DropdownMenuSubTrigger>
                <DropdownMenuSubContent>
                  {item.items.map((subItem, subIndex) => (
                    <DropdownMenuItem key={subIndex} asChild>
                      <Link to={subItem.path || '#'}>
                        {subItem.title}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuSubContent>
              </DropdownMenuSub>
            );
          }
          
          return (
            <DropdownMenuItem key={index} asChild>
              <Link to={item.path || '#'}>
                {item.title}
              </Link>
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default NavbarDropdown;