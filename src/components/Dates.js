import React, { useState } from "react";
import Title from "./Title";

const Dates = ({ data, card, moveCard }) => {
    console.log(card);
  const [isOver, setIsOver] = useState(false);
console.log(isOver);
  function handleDragOver(e) {
    if (e.dataTransfer.types[0] === "text/plain") {
      setIsOver(true);
      e.preventDefault();
    }
  }

  function handleDrop(e) {
    const dataJSON = e.dataTransfer.getData("text/plain");
    let data;
    try {
        data = JSON.parse(dataJSON);
        // console.log("hello data",data);
    } catch {}
    if (data && data.type === "card") {
        console.log("move data data111",data);
      moveCard();
    }
  }

  function handleDragLeave() {
    setIsOver(false);
  }
  return (
    <>
      <div
        className="bg-secondary col p-4 m-2"
        style={{ backgroundColor: isOver ? "#bbf" : "rgba(0,0,0,.12)" }}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        onDragLeave={handleDragLeave}
      >
        <h4>{data}</h4>
        <p>{card ? <Title /> : "Box-1"} gg</p>
      </div>
    </>
  );
};

export default Dates;
