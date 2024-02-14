import React from "react";

const Blogs = ({ text, severity }) => {
  return (
    <>
      <div className={severity === "success" ? "success_color" : "error_color"}>
        <span>{text}</span>
      </div>
    </>
  );
};

export default Blogs;

