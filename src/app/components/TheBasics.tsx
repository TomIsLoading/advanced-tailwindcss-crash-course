import React from "react";

export const TheBasics = () => {
  return (
    <div className="w-full max-w-lg rounded-lg bg-white p-10 shadow-xl shadow-indigo-500/10">
      <h2 className="text-xl font-bold">@TomIsLoading</h2>
      <p className="mb-6 mt-3 leading-relaxed text-zinc-600">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
        consequuntur omnis, distinctio laboriosam fugiat illum incidunt
        temporibus consectetur cupiditate doloremque?
      </p>
      <div className="grid w-full grid-cols-2 overflow-hidden rounded-xl border border-indigo-500 font-medium">
        <button className="bg-indigo-500 p-3 text-white">Subscribe</button>
        <button className="bg-white p-3 text-indigo-500">Notifications</button>
      </div>
    </div>
  );
};
