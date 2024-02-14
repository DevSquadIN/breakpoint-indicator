import "../styles.css";
import React from "react";

export default BreakpointIndicator = () => {
  if (process.env.NODE_ENV === "production") return null;
  return (
    <div className="container">
      <div className="xs">xs</div>
      <div className="sm">sm</div>
      <div className="md">md</div>
      <div className="lg">lg</div>
      <div className="xl">xl</div>
      <div className="2xl">2xl</div>
    </div>
  );
};
