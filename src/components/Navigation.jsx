import { NavLink } from "react-router-dom";
import { Dropdown } from "antd";

import Logo from "../assets/logi.png";
import Logo2 from "../assets/logs.png";
import { DownOutlined } from "@ant-design/icons";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import SmallNav from "./SmallNav";
const Navigation = () => {
  const items = [
    {
      key: "1",
      label: <NavLink to="/about">About Us</NavLink>,
    },
    {
      key: "2",
      label: <NavLink to="/">Mission Vision Goal</NavLink>,
    },
    {
      key: "3",
      label: <NavLink to="/">Our Leadership</NavLink>,
    },
    {
      key: "4",
      label: <NavLink to="/">Team Members</NavLink>,
    },
    {
      key: "5",
      label: <NavLink to="/">Gallery</NavLink>,
    },
  ];
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [scrollY, setScrollY] = useState(0);
  const [isLogoAlt, setIsLogoAlt] = useState(false);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    // Function to update the window width
    const updateWindowWidth = () => {
      setWindowWidth(window.innerWidth);
    };

    // Add event listener for the resize event
    window.addEventListener("resize", updateWindowWidth);

    // Cleanup: Remove event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", updateWindowWidth);
    };
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      const newScrollY = window.scrollY;
      setScrollY(newScrollY);

      if (newScrollY >= 40 && newScrollY < 60) {
        setIsNavVisible(false);
        setIsLogoAlt(false);
      } else if (newScrollY >= 60) {
        setIsNavVisible(true);
        setIsLogoAlt(true);
      } else {
        setIsNavVisible(true);
        setIsLogoAlt(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* Navigation Bar for larger screens */}
      {!(windowWidth < 885) ? (
        <motion.div
          onScroll={() => setScrollY(window.innerHeight)}
          className={`flex gap-8 w-full justify-around items-center p-2 sticky top-0 z-50 bg-white `}
          animate={{ opacity: isNavVisible ? 1 : 0, y: isNavVisible ? 0 : -20 }}
          transition={{ duration: 0.3 }}
        >
          <motion.img
            src={isLogoAlt ? Logo2 : Logo}
            style={{ width: "130px" }}
            alt="Logo"
            animate={{
              opacity: isNavVisible ? 1 : 0,
              y: isNavVisible ? 0 : -20,
            }}
            transition={{ duration: 0.3 }}
          />

          <div className="flex items-center gap-3 z-50">
            <Dropdown menu={{ items }} overlayStyle={{width:'500px'}} placement="bottom">
              <NavLink
                to="/"
                end
                className="text-red-500 transition duration-300 ease-in font-semibold"
              >
                <span className="flex gap-2">
                  <span>Who Are We</span>
                  <DownOutlined />
                </span>
              </NavLink>
            </Dropdown>

            <NavLink
              to="/interventions"
              className={({ isActive }) =>
                isActive
                  ? "text-red-500 transition duration-300 ease-in font-semibold"
                  : "text-sm font-semibold"
              }
            >
              Our Interventions
            </NavLink>
            {/* Additional navigation links */}
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "hover:text-red-500 transition duration-300 ease-in font-semibold"
                  : "text-sm font-semibold"
              }
            >
              News & Updates
            </NavLink>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "hover:text-red-500 transition duration-300 ease-in font-semibold"
                  : "text-sm font-semibold"
              }
            >
              Become A Member
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "text-red-500 transition duration-300 ease-in  font-semibold"
                  : "text-sm font-semibold"
              }
            >
              Contact
            </NavLink>
            <NavLink
              to="/"
              className="bg-red-900 text-white p-4 rounded font-semibold"
            >
              Donate Now
            </NavLink>
          </div>
        </motion.div>
      ) : (
        <SmallNav />
      )}
    </>
  );
};

export default Navigation;
