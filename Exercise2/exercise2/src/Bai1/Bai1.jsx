import { data } from "./data";
import React, { useState } from "react";
import "./Bai1.css";

function Bai1() {
  function Aside() {
    const [isHover, setIsHover] = useState(false);
    return (
      <div
        style={{
          justifyContent: "center",
          flexDirection: "column",
          width: "30%",
        }}
      >
        <div
          onMouseEnter={() => {
            setIsHover(true);
          }}
          onMouseLeave={() => {
            setIsHover(false);
          }}
          className="divHover"
          style={{
            backgroundColor: isHover ? "red" : "blue",
            width: 450,
            alignSelf: "center",
            height: 300,
          }}
        ></div>
        <div>Content</div>
      </div>
    );
  }
  function Content() {
    return (
      <div
        style={{
          width: 1000,
        }}
      >
        <ul
          style={{
            overflow: "auto",
            width: "100%",
            height: 240,
          }}
        >
          {data.map((item) => (
            <li key={item.id}>
              <div className="view"></div>
              <div className="item">{item.name}</div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  return (
    <div
      style={{
        padding: 20,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          lineHeight: 0.3,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <h2 style={{ lineHeight: 1.5 }}>Title</h2>
        <h4>Description</h4>
        <h4>Description</h4>
      </div>
      <div
        style={{
          flexDirection: "row",
          display: "flex",
          width: "100%",
        }}
      >
        <div>
          <Aside />
        </div>
        <div>
          <Content />
        </div>
      </div>
    </div>
  );
}

export default Bai1;
