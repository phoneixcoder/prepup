import React from "react";

const Button = (props) => {
  return (
    <div className={`flex items-center bg-[#F2D059] py-2 px-4 rounded-lg cursor-pointer hover:scale-105 ${props.btnclass}`}>
      <a href={props.link} className="text-base text-black font-medium">
        {props.text}
      </a>
    </div>
  );
};

export default Button;
