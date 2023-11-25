import { NavLink } from "react-router-dom";
import { Menu } from "antd";
import Logo2 from "../assets/logs.png";
import {
  BarsOutlined,
  CloseOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import { useState, useEffect } from "react";

const SmallNav = () => {
  const [openNav, setOpenNav] = useState(false);
  const handleNavToggle = () => {
    setOpenNav(!openNav);
  };

  function getItem(label, key, icon, children, type) {
    return {
      key,
      icon,
      children,
      label,
      type,
    };
  }
  const smallNav = [
    getItem(
      <NavLink
        to="/"
        className="hover:text-red-500 transition duration-300 ease-in font-semibold"
      >
        <span className="flex gap-2">
          <span>Who Are We</span>
        </span>
      </NavLink>,
      "sub1",
      <PlusOutlined />,
      [
        getItem(<NavLink to="/about">About Us</NavLink>, "5"),
        getItem(<NavLink to="/">Mission Vision Goal</NavLink>, "6"),
        getItem(<NavLink to="/">Our Leadership</NavLink>, "7"),
        getItem(<NavLink to="/">Team Members</NavLink>, "8"),
        getItem(<NavLink to="/">Gallery</NavLink>, "9"),
      ]
    ),
    getItem(
      <NavLink
        to="/interventions"
        className={({ isActive }) =>
          isActive
            ? "hover:text-red-500 transition duration-300 ease-in font-semibold"
            : "text-sm font-semibold"
        }
      >
        Our Interventions
      </NavLink>,
      "10"
    ),
    getItem(
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? "hover:text-red-500 transition duration-300 ease-in font-semibold"
            : "text-sm font-semibold"
        }
      >
        News & Updates
      </NavLink>,
      "11"
    ),
    getItem(
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? "hover:text-red-500 transition duration-300 ease-in font-semibold"
            : "text-sm font-semibold"
        }
      >
        Become A Member
      </NavLink>,
      "12"
    ),
    getItem(
      <NavLink
        to="/contact"
        className={({ isActive }) =>
          isActive
            ? "hover:text-red-500 transition duration-300 ease-in  font-semibold"
            : "text-sm font-semibold"
        }
      >
        Contact
      </NavLink>,
      "13"
    ),
    getItem(
      <NavLink
        to="/"
        className="bg-red-900 text-white p-4 rounded font-semibold"
      >
        Donate Now
      </NavLink>,
      "14"
    ),
  ];
  return (
    <div className="h-max px-2 sticky top-0 z-10 bg-white py-3">
      <div className="flex justify-between p-4">
        <img src={Logo2} alt="image" style={{ width: 170 }} />
        <button onClick={handleNavToggle} className="text-2xl">
          {openNav ? <CloseOutlined /> : <BarsOutlined />}
        </button>
      </div>
      <div
        className={`flex justify-center menu-container h-max py-4 ${
          openNav ? "visible" : "invisible"
        }`}
      >
        {openNav && (
          <Menu
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            mode="inline"
            items={smallNav}
          />
        )}
      </div>
    </div>
  );
};

export default SmallNav;
