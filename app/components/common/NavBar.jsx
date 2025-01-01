import { Link } from "@remix-run/react";
import React from "react";
import { useThemeContext } from "~/context/ThemeContext";

const NavBar = () => {
  const { toggleTheme, isDark } = useThemeContext();
  const navData = [
    {
      label: "Home",
      link: "/",
    },
    {
      label: "About",
      link: "/about",
    },
    {
      label: "Services",
      link: "/services",
    },
    {
      label: "Blog",
      link: "/blog",
    },
    {
      label: "Contact",
      link: "/contact",
    },
  ];

  return (
    <header className="w-full h-16 flex items-center justify-between px-20 bg-gray-50/50 drop-shadow-md shadow-black dark:shadow-white/20">
      <div className="text-2xl font-extrabold flex items-center">
        <p>Max</p>
        <p className="bg-gradient-to-r from-blue-500 to-green-500 text-white py-0 rounded px-2">
          Blogs
        </p>
      </div>
      <div className="flex items-center gap-4">
        {navData?.map((item, index) => (
          <Link to={item?.link} key={index} className="text-sm font-medium">
            {item?.label}
          </Link>
        ))}
      </div>
      <div className="">
        <button
          onClick={toggleTheme}
          className={`w-14 h-8 flex items-center rounded-full p-1 ${
            isDark ? "bg-blue-500" : "bg-gray-300"
          } transition-colors duration-300`}
        >
          <div
            className={`h-6 w-6 bg-white rounded-full shadow-md transform ${
              isDark ? "translate-x-6" : "translate-x-0"
            } transition-transform duration-300`}
          ></div>
        </button>
      </div>
    </header>
  );
};

export default NavBar;
