"use client";
import React from "react";

/* props type*/
interface ButtonProps {
  type: "outline" | "filled";
  className?: string;
  onClick?: () => void;
  children: React.ReactNode;
}

function Button({
  className = "",
  type = "filled",
  onClick,
  children,
}: ButtonProps) {
  {
    /*conditional rendering based on type of button*/
  }
  if (type === "outline") {
    return (
      <div className="bg-gradient rounded-md">
        <button
          className={`${className} mx-[2px] my-[1.2px] bg-white`}
          onClick={onClick}
        >
          {children}
        </button>
      </div>
    );
  }

  if (type === "filled") {
    return (
      <button className={className} onClick={onClick}>
        {children}
      </button>
    );
  }
}

export default Button;
