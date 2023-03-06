import React, { useEffect, useState } from "react";
import {
  IoPersonCircleOutline,
  IoBagHandleOutline,
  IoSearchOutline,
  IoLogoApple,
} from "react-icons/io5";
import { globalConst } from "@util";
import { useDebounceScreenSize } from "@helper";
import { Hamburger } from "@components";

const Header = () => {
  const { width } = useDebounceScreenSize(150);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (!!width && width > 768) {
      setIsActive(false);
    }
  }, [width]);

  return (
    <main className="aisle__wrapper bg-black text-white">
      <nav
        className={`${
          isActive && "border-b"
        } relative flex flex-wrap items-center justify-between p-3 md:static`}
      >
        <Hamburger
          onClick={() => setIsActive((preValue) => !preValue)}
          active={isActive}
          className="block md:hidden"
        />
        <div id="appleLogo">
          <IoLogoApple size={globalConst.primarySize} />
        </div>
        {/* // TODO implement search box */}
        <div
          id="menuList"
          className={`absolute top-[-490px] z-[-10] h-auto opacity-0 transition-all md:static md:top-0 md:z-0 md:opacity-100 ${
            isActive &&
            "!top-[52px] left-0 !z-[10] !h-screen w-screen bg-black p-8 !opacity-100"
          }`}
        >
          <ul className="flex flex-col gap-5 md:flex-row">
            {/* // TODO add router for below list */}
            <li className="border-b pb-2 md:border-0 md:pb-0">Product</li>
            <li className="border-b pb-2 md:border-0 md:pb-0">Explore</li>
            <li className="border-b pb-2 md:border-0 md:pb-0">Support</li>
            <li className="border-b pb-2 md:border-0 md:pb-0">Business</li>
          </ul>
        </div>
        <div id="menuOptions">
          <ul className="flex gap-5">
            <li className="hidden md:block">
              <IoPersonCircleOutline size={globalConst.primarySize} />
            </li>
            <li className="hidden md:block">
              <IoSearchOutline size={globalConst.primarySize} />
            </li>
            <li>
              <IoBagHandleOutline size={globalConst.primarySize} />
            </li>
          </ul>
        </div>
      </nav>
    </main>
  );
};

export default Header;
