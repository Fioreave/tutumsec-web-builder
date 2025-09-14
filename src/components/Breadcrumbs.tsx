import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  const allItems = [{ label: "Home", href: "/" }, ...items];

  return (
    <nav aria-label="Breadcrumb" className="py-4">
      <ol className="flex items-center space-x-2 text-sm text-muted-foreground">
        {allItems.map((item, index) => (
          <li key={index} className="flex items-center">
            {index === 0 && <Home className="w-4 h-4 mr-1" />}
            {item.href && index < allItems.length - 1 ? (
              <Link
                to={item.href}
                className="hover:text-foreground transition-colors"
              >
                {item.label}
              </Link>
            ) : (
              <span
                className={
                  index === allItems.length - 1
                    ? "text-foreground font-medium"
                    : ""
                }
              >
                {item.label}
              </span>
            )}
            {index < allItems.length - 1 && (
              <ChevronRight className="w-4 h-4 mx-2" />
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
