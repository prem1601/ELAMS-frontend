import { Link, useLocation } from "react-router-dom";
import { BsFillPersonFill } from "react-icons/bs";

import { navbarLinks } from "@/utils/Navbar";

const Header = () => {
  const { pathname } = useLocation();

  return (
    <header>
      <div className="h-16 bg-gray-800 text-white">
        <div className="flex items-center justify-between px-3 py-2 h-full">
          <h1 className="text-xl font-bold">
            <Link to="/">ELAMS</Link>
          </h1>
          <nav>
            <ul className="flex space-x-4 text-[15px]">
              {navbarLinks.map((link) => {
                const { id, path, name } = link;
                const isActiveClassName =
                  pathname === path
                    ? "bg-gray-100 px-2 rounded-md text-black"
                    : "";

                return (
                  <li key={id} className={isActiveClassName}>
                    <Link to={path}>{name}</Link>
                  </li>
                );
              })}
              <li>
                <BsFillPersonFill
                  size={25}
                  fill="darkblue"
                  className="bg-white rounded-full p-1"
                />
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
