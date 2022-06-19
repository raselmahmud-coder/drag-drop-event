import React, { useState } from "react";
const dates = ["1", "2", "3", "noDrop"];
const Dates = ({ date }) => {
  const [noDrop, setNoDrop] = useState("");
  const [dragData, setDragData] = useState({});
  const initialItems = [{ id: 1, group: "1", value: "drag 1" }];
  const [items, setItems] = useState(initialItems);

  const handleDragEnter = (e, group) => {
    if (group === "noDrop") {
      setNoDrop("noDrop");
    }
  };
  const handleDragOver = (e) => {
    e.preventDefault();
  };
  const handleDragLeave = (e) => {
    setNoDrop("");
  };

  const handleDrop = (e, group) => {
    setNoDrop("");
    const selected = dragData.id;
    if (group === "noDrop") {
      console.log("nuh uh");
    } else {
      changeCategory(selected, group);
    }
  };
  const changeCategory = (itemId, group) => {
    const newItems = [...items];
    newItems[itemId - 1].group = group;
    setItems([...newItems]);
  };
  const handleDragStart = (e, id, group) => {
    setDragData({ id: id, initialGroup: group });
  };

  return (
    <>
      <div
        // change styling if dragging into noDrop zone
        className="col bg-secondary p-2 m-2"
        // event handlers
        onDragEnter={(e) => handleDragEnter(e, date)}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={(e) => handleDrop(e, date)}
        key={date}
      >
        <h5> {date}</h5>
      </div>
    </>
  );
};

export default Dates;
