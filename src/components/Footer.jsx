import React from "react";
import { SlList, SlHome, SlMagnifier, SlQuestion } from "react-icons/sl";
import { Link } from "react-router-dom";
import useThemeStore from "../store/useThemeStore";
const Footer = () => {
  const { day } = useThemeStore();
  return (
    <div
      className={` ${
        day ? "bg-green-500 text-white p-4" : "bg-yellow-500 text-white p-4"
      } `}
    >
      <div className="flex justify-evenly">
        <Link to="/home">
          <SlHome size={35} />
        </Link>
        <Link to="/search">
          <SlMagnifier size={35} />
        </Link>
        <Link to="/categories">
          <SlList size={35} />
        </Link>
        <Link to="/about">
          <SlQuestion size={35} />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
