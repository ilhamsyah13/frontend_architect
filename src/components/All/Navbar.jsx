import { useState } from "react";
import {
  AiOutlineShoppingCart,
  AiOutlineSearch,
  AiOutlineMenu,
} from "react-icons/ai";
import { Link } from "react-router-dom";

function Navbar() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <>
      <nav className="flex flex-row gap-8 justify-between p-7 items-center absolute w-full top-0 bg-ui-white">
        <div className="pl-5 grow md:order-1 order-2 text-center md:text-left ">
          <p className="text-green-700 font-bold text-3xl">
            Interio<span className="text-brown">Lab</span>
          </p>
        </div>
        <div className="md:order-2 order-1">
          <button
            className="hover:bg-brown p-3 rounded-2xl hover:text-ui-white block md:hidden"
            onClick={handleNav}
          >
            <AiOutlineMenu className="text-xl" />
          </button>
          <ul className="hidden md:flex gap-6 ">
            <li className="hover:text-brown border-b-2 border-transparent hover:border-brown hover:font-bold">
              <Link to="/frontend_architect">Home</Link>
            </li>
            <li className="hover:text-brown border-b-2 border-transparent hover:border-brown hover:font-bold">
              <Link to="/frontend_architect/services">Services</Link>
            </li>
            <li className="hover:text-brown border-b-2 border-transparent hover:border-brown hover:font-bold">
              <Link to="/frontend_architect/portfolio">Portfolio</Link>
            </li>
            <li className="hover:text-brown border-b-2 border-transparent hover:border-brown hover:font-bold">
              <Link to="/frontend_architect/blog">Blog</Link>
            </li>
            <li className="hover:text-brown border-b-2 border-transparent hover:border-brown hover:font-bold">
              <Link to="/frontend_architect/shop">Shop</Link>
            </li>
            <li className="hover:text-brown border-b-2 border-transparent hover:border-brown hover:font-bold">
              <Link to="/frontend_architect/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="order-last ">
          <ul className="flex gap-6">
            <li>
              <AiOutlineSearch className="text-2xl" />
            </li>
            <li>
              <AiOutlineShoppingCart className="text-2xl" />
            </li>
          </ul>
        </div>
      </nav>
      {nav && (
        <div className="relative top-20 block md:hidden">
          <ul className=" bg-ui-white p-8">
            <Link to="/frontend_architect">
              <li className="p-2 hover:bg-brown hover:text-ui-white">Home</li>
            </Link>
            <Link to="/frontend_architect/services">
              <li className="p-2 hover:bg-brown hover:text-ui-white">
                Services
              </li>
            </Link>
            <Link to="/frontend_architect/portfolio">
              <li className="p-2 hover:bg-brown hover:text-ui-white">
                Portfolio
              </li>
            </Link>
            <Link to="/frontend_architect/blog">
              <li className="p-2 hover:bg-brown hover:text-ui-white">Blog</li>
            </Link>
            <Link to="/shop">
              <li className="p-2 hover:bg-brown hover:text-ui-white">Shop</li>
            </Link>
            <Link to="/frontend_architect/contact">
              <li className="p-2 hover:bg-brown hover:text-ui-white">
                Contact
              </li>
            </Link>
          </ul>
        </div>
      )}
    </>
  );
}

export default Navbar;
