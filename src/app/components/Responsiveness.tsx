import React from "react";
import { FiArrowUpRight, FiMenu } from "react-icons/fi";
import { SiGit } from "react-icons/si";

export const Responsiveness = () => {
  return (
    <nav className="fixed left-0 right-0 top-0 flex w-full items-center justify-between p-4">
      <div className="flex items-center gap-12">
        <SiGit className="text-4xl" />
        <div className="hidden items-center gap-6 md:flex">
          <a href="#">Product</a>
          <a href="#">Solutions</a>
          <a href="#">Blog</a>
          <a href="#">Pricing</a>
        </div>
      </div>

      <button className="hidden rounded-md bg-indigo-500 px-3 py-2 text-sm font-medium text-white md:block">
        Join Newsletter
      </button>

      <button className="block text-2xl md:hidden">
        <FiMenu />
      </button>
    </nav>
  );
};
