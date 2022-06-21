import React, { useState } from "react";

const Title = ({ titleInfo }) => {
  const [isDragging, setIsDragging] = useState(false);
  function handleDragStart(e) {
    setIsDragging(true);
    const data = JSON.stringify({ type: "card" });
    e.dataTransfer.setData("text/plain", data);
  }

  function handleDragEnd(e) {
    setIsDragging(false);
    e.dataTransfer.clearData();
  }
  return (
    <>
      <span
        className="text-success"
        style={{
          cursor: "move",
          backgroundColor: isDragging ? "#fbb" : "palegoldenrod",
        }}
        draggable
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
      >
        {titleInfo}
      </span>
    </>
  );
};

export default Title;
