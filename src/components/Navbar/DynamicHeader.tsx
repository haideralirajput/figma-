"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import HomeHeader from "./HomeNavbar";

const DynamicHeader = () => {
  const pathname = usePathname();
  return pathname === "/" ? <HomeHeader /> : <Navbar />;
};

export default DynamicHeader;
