import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa6";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="mt-40">
      <div className="grid md:grid-cols-5 ">
        <div className="col-span-5 md:col-span-2 mb-8 md:w-fit text-center md:text-left md:ml-10">
          <p className="text-green-700 font-bold text-3xl">
            Interio<span className="text-brown">Lab</span>
          </p>
          <div className="flex gap-3 mt-3 justify-center md:justify-start">
            <div></div>
            <FaFacebook className="text-blue-700 text-xl" />
            <FaTwitter className="text-blue-300 text-xl" />
            <FaLinkedin className="text-blue-900 text-xl" />
            <FaInstagram className="text-black text-xl" />
          </div>
        </div>
        <div className="col-span-3 grid grid-cols-3 mx-14 gap-5">
          <div>
            <p className="font-medium mb-7">Pages</p>
            <ul className="font-light">
              <li className="mb-3">
                <Link to="/">Home</Link>
              </li>
              <li className="mb-3">
                <Link to="/portfolio">Portfolio</Link>
              </li>
              <li className="mb-3">Our Team</li>
              <li className="mb-3">
                <Link to="/contact">Contact</Link>
              </li>
              <li className="mb-3">
                <Link to="/services">Services</Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-medium mb-7">Services</p>
            <ul className="font-light">
              <li className="mb-3">Kitchen</li>
              <li className="mb-3">Living Area</li>
              <li className="mb-3">Bathroom</li>
              <li className="mb-3">Dining Hall</li>
              <li className="mb-3">Bedroom</li>
            </ul>
          </div>
          <div className="order-first md:order-last">
            <p className="font-medium mb-7 ">Contact</p>
            <ul className="font-light">
              <li className="mb-5">XYZ, Sector 144, Noida, Uttar, Pradesh</li>
              <li className="mb-5 break-words">contact@interiorlab.com</li>
              <li className="mb-5">(123) 456-7890</li>
            </ul>
          </div>
        </div>
      </div>
      <p className="text-center my-10 font-light">
        Copyright &copy; Interiolab | Muhammad Ilhamsyah Putera
      </p>
    </footer>
  );
}

export default Footer;
