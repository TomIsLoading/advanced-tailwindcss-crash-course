import React from "react";
import { FiArrowRight, FiBell, FiUser } from "react-icons/fi";

export const Modifiers = () => {
  return (
    <div className="w-full max-w-lg rounded-lg bg-white p-10 shadow-xl shadow-indigo-500/10">
      {/* <HoverAndActive /> */}
      {/* <FirstLastEvenOdd /> */}
      {/* <Group /> */}
      <PsuedoElements />
    </div>
  );
};

const HoverAndActive = () => (
  <div className="grid w-full grid-cols-2 overflow-hidden rounded-xl border border-indigo-500 font-medium">
    <button className="bg-indigo-500 p-3 text-white transition-colors hover:bg-indigo-600">
      Subscribe
    </button>
    <button className="bg-white p-3 text-indigo-500 transition-colors active:bg-indigo-100">
      Notifications
    </button>
  </div>
);

const FirstLastEvenOdd = () => {
  // Tailwind also includes modifiers for other structural
  // pseudo-classes like :only-child, :first-of-type, :empty, and more.
  return (
    <ul>
      <li className="p-4 first:text-indigo-500 odd/custom-class:bg-zinc-100">
        Tom Smith
      </li>
      <li className="p-4 first:text-indigo-500 odd/custom-class:bg-zinc-100">
        Jane Doe
      </li>
      <li className="p-4 first:text-indigo-500 odd/custom-class:bg-zinc-100">
        Sam Smith
      </li>
      <li className="p-4 first:text-indigo-500 odd/custom-class:bg-zinc-100">
        Ben Anderson
      </li>
    </ul>
  );
};

const Group = () => {
  return (
    <div className="group flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="grid size-12 place-content-center rounded-full bg-neutral-900 text-xl text-neutral-50">
          <FiUser />
        </div>
        <span className="opacity-0 transition-opacity group-hover:opacity-100">
          @tomisloading
        </span>
      </div>
      <button className="group/follow flex items-center gap-2 rounded-md bg-indigo-600 px-4 py-2 text-white shadow-lg transition-all hover:-translate-y-0.5 active:translate-y-0 active:bg-indigo-700 active:shadow-inner">
        Follow
        <FiArrowRight className="transition-transform group-hover/follow:-rotate-45 group-active/follow:rotate-0" />
      </button>
    </div>
  );
};

const PsuedoElements = () => {
  return (
    <a
      href="#"
      className={`
        relative mx-auto block w-fit rounded-full p-4 text-2xl text-indigo-500 transition-colors before:absolute
        before:-right-2 before:-top-2 before:grid before:size-6 before:place-content-center
        before:rounded-full before:bg-red-500 before:text-xs before:text-white
        before:content-["6"] hover:bg-indigo-50
    `}
    >
      <FiBell />
    </a>
  );
};
