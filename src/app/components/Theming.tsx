import React from "react";

export const Theming = () => {
  return (
    <div className="shadow-base-200 w-full max-w-lg rounded-lg bg-white p-10 shadow-xl">
      <h2 className="text-xl font-bold">@TomIsLoading</h2>
      <p className="mb-6 mt-3 leading-relaxed text-zinc-600">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
        consequuntur omnis, distinctio laboriosam fugiat illum incidunt
        temporibus consectetur cupiditate doloremque?
      </p>
      <div className="border-brand grid w-full grid-cols-2 overflow-hidden rounded-xl border font-medium">
        <button className="bg-brand p-3 text-white">Subscribe</button>
        <button className="text-brand bg-white p-3">Notifications</button>
      </div>
    </div>
  );
};
