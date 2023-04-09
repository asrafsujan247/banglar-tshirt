import React from "react";
import MySelf from "../MySelf/MySelf";
import Brother from "../Brother/Brother";

const Father = () => {
  return (
    <div>
      <h2>Father</h2>
      <section className="flex">
        <MySelf></MySelf>
        <Brother></Brother>
      </section>
    </div>
  );
};

export default Father;
