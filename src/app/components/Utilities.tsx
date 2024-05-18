import React from "react";
import {
  FiAward,
  FiBell,
  FiDownload,
  FiEdit,
  FiSave,
  FiSettings,
  FiUser,
} from "react-icons/fi";
import { SiAirbnb } from "react-icons/si";

export const Utilities = () => {
  return (
    <div className="w-full max-w-lg rounded-lg bg-white p-10 shadow-xl shadow-indigo-500/10">
      <SizeExample />
      {/* <SpaceBetweenExample /> */}
      {/* <SROnlyExample /> */}
      {/* <DividerExample /> */}
      {/* <RingExample /> */}
      {/* <AnimationExample /> */}
    </div>
  );
};

const SizeExample = () => {
  return (
    <div className="grid size-12 place-content-center bg-indigo-600 text-white">
      <FiAward />
    </div>
  );
};

const SpaceBetweenExample = () => {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">Skibbidy boop</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis nam
        molestiae cumque tempora recusandae ipsum praesentium et numquam id
        accusamus?
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo porro
        rerum odio beatae accusantium laudantium praesentium maxime eaque
        voluptate aliquid, doloribus tempora corporis blanditiis dolore
        doloremque, mollitia id reprehenderit dignissimos. Ducimus vero corrupti
        quae ipsa!
      </p>
    </div>
  );
};

const SROnlyExample = () => {
  return (
    <div className="flex items-center justify-between rounded-lg bg-white px-4">
      <SiAirbnb className="text-2xl" />

      <div className="flex gap-4">
        <button>
          <FiSettings />
          <span className="sr-only">Settings</span>
        </button>
        <button>
          <FiUser />
          <span className="sr-only">Account</span>
        </button>
      </div>
    </div>
  );
};

const DividerExample = () => {
  return (
    <div className="mx-auto flex w-fit divide-x divide-zinc-300 overflow-hidden rounded-lg bg-white text-neutral-900">
      <button className="flex items-center justify-center gap-2 px-4 py-2 transition-colors hover:bg-zinc-100">
        <span>Edit</span>
        <FiEdit />
      </button>
      <button className="flex items-center justify-center gap-2 px-4 py-2 transition-colors hover:bg-zinc-100">
        <span>Save</span>
        <FiSave />
      </button>
      <button className="flex items-center justify-center gap-2 px-4 py-2 transition-colors hover:bg-zinc-100">
        <span>Export</span>
        <FiDownload />
      </button>
    </div>
  );
};

const RingExample = () => {
  return (
    <form className="flex items-center justify-between">
      <label className="relative block w-full">
        <input
          type="email"
          className="peer w-full rounded border border-neutral-900 p-2 text-sm ring-2 ring-neutral-200 ring-offset-2 transition-shadow focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 focus:ring-offset-0"
        />
        <span className="absolute left-2 top-0 -translate-y-1/2 scale-100 bg-white px-0.5 text-xs font-medium transition-transform peer-focus:scale-0">
          Email
        </span>
      </label>
    </form>
  );
};

const AnimationExample = () => {
  return (
    <div className="flex items-center justify-between rounded-lg bg-white px-4">
      <SiAirbnb className="text-2xl" />

      <button className="relative">
        <FiBell />
        <span className="sr-only">Notifications</span>

        <span className="absolute -top-1 right-0 h-2 w-2 animate-ping rounded-full bg-red-500" />
      </button>
    </div>
  );
};
