// src/components/NavbarDropdown.tsx
import React from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
} from "@/components/ui/dropdown-menu";

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

// considera “externo” lo absoluto y lo que empiece por /blog
const isExternalLike = (p?: string) =>
  !!p && (/^https?:\/\//i.test(p) || p.startsWith("/blog"));

const ExternalDropdownItem: React.FC<{ title: string; href: string }> = ({
  title,
  href,
}) => (
  <DropdownMenuItem
    onSelect={(e) => {
      e.preventDefault();
      window.location.assign(href);
    }} // navegación “dura”
  >
    {title}
  </DropdownMenuItem>
);

const InternalDropdownItem: React.FC<{ title: string; to: string }> = ({
  title,
  to,
}) => (
  <DropdownMenuItem asChild>
    <Link to={to}>{title}</Link>
  </DropdownMenuItem>
);

const SafeItem: React.FC<{ item: NavItem }> = ({ item }) => {
  const href = item.path || "#";
  return isExternalLike(href) ? (
    <ExternalDropdownItem title={item.title} href={href} />
  ) : (
    <InternalDropdownItem title={item.title} to={href} />
  );
};

const NavbarDropdown: React.FC<NavbarDropdownProps> = ({
  title,
  items,
  className = "",
}) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className={`text-gray-800 hover:text-blue-600 px-3 py-2 text-md font-medium transition-colors flex items-center ${className}`}
      >
        {title}
        <ChevronDown className="ml-1 h-3 w-3" />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="w-56">
        {items.map((item, index) =>
          item.items?.length ? (
            <DropdownMenuSub key={index}>
              <DropdownMenuSubTrigger>{item.title}</DropdownMenuSubTrigger>
              <DropdownMenuSubContent>
                {item.items.map((subItem, i) => (
                  <SafeItem key={i} item={subItem} />
                ))}
              </DropdownMenuSubContent>
            </DropdownMenuSub>
          ) : (
            <SafeItem key={index} item={item} />
          )
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default NavbarDropdown;
