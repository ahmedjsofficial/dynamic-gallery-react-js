import React from "react";

export default function Event({ items }) {
  return (
    <>
      {items?.map((val, ind) => (
        <div key={ind}>
          {/* <h1>{val.id}</h1> */}
          <h1>{val.title}</h1>
          <h2>{val.description}</h2>
          <h1>category: {val.category}</h1>
          <h1>date: {val.date}</h1>
          <hr />
        </div>
      ))}
    </>
  );
}
