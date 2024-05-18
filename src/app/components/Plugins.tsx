import React from "react";

export const Plugins = () => {
  return (
    <div className="shadow-base-200 w-full max-w-5xl rounded-lg bg-white p-10 shadow-xl">
      <article
        className="prose prose-zinc"
        //   Add "prose-invert" for dark mode
      >
        <h1>Garlic bread with cheese: What the science tells us</h1>
        <p>
          For years parents have espoused the health benefits of eating garlic
          bread with cheese to their children, with the food earning such an
          iconic status in our culture that kids will often dress up as warm,
          cheesy loaf for Halloween.
        </p>
        <blockquote>
          This is a quote. It's prestyled and I didn't need to add anything to
          it.
        </blockquote>
        <p>
          But a recent study shows that the celebrated appetizer may be linked
          to a series of rabies cases springing up around the country.
        </p>
      </article>
    </div>
  );
};
