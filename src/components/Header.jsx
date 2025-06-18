import React, { useState } from "react";
import { WiSolarEclipse } from "react-icons/wi";
import { WiMoonWaxingCrescent4 } from "react-icons/wi";

import useThemeStore from "../store/useThemeStore";

const Header = () => {
  const { day, toggleDay } = useThemeStore();
  return (
    <div
      className={` ${
        day ? "bg-green-500 text-white p-4" : "bg-yellow-500 text-white p-4"
      } `}
    >
      <div className="relative flex items-center justify-center text-4xl">
        <div>Recipes</div>
        <button
          onClick={toggleDay}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-3xl"
        >
          {day ? <WiMoonWaxingCrescent4 /> : <WiSolarEclipse />}
        </button>
      </div>
    </div>
  );
};

export default Header;
