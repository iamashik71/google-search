import React from "react";

function Avatar({ url, className }) {
  return (
    <img
      loading="lazy"
      className={`rounded-full h-10 cursor-pointer transasion transform duration-150 hover:scale-110 ${className}`}
      src={url}
      alt="Profile Photo"
    />
  );
}

export default Avatar;
