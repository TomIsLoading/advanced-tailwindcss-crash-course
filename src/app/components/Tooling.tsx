import { cva, type VariantProps } from "class-variance-authority";
import React from "react";
import { FiBell } from "react-icons/fi";
import { twMerge } from "tailwind-merge";

export const Tooling = () => {
  return (
    <div className="flex w-full max-w-lg justify-center rounded-lg bg-white p-10 shadow-xl shadow-indigo-500/10">
      <TWMergeExample className="bg-indigo-500" />
      {/* <CVAButton className="mx-auto" intent="primary" size="medium">
        My CVA Button
      </CVAButton> */}
    </div>
  );
};

const TWMergeExample = ({ className }: { className?: string }) => {
  return (
    <div
      className={twMerge(
        "w-fit rounded-full bg-zinc-900 p-6 text-2xl text-white",
        className
      )}
    >
      <FiBell />
    </div>
  );
};

const button = cva(["rounded", "font-medium"], {
  variants: {
    intent: {
      primary: [
        "bg-indigo-500",
        "text-white",
        "border-transparent",
        "hover:bg-indigo-600",
      ],
      secondary: [
        "bg-white",
        "text-gray-800",
        "border-gray-400",
        "hover:bg-gray-100",
      ],
    },
    size: {
      small: ["text-sm", "py-1", "px-2"],
      medium: ["text-base", "py-2", "px-4"],
    },
  },
  compoundVariants: [{ intent: "primary", size: "medium", class: "uppercase" }],
  defaultVariants: {
    intent: "primary",
    size: "medium",
  },
});

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {}

export const CVAButton: React.FC<ButtonProps> = ({
  className,
  intent,
  size,
  ...props
}) => <button className={button({ intent, size, className })} {...props} />;
