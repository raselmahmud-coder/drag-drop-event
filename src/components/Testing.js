import React, { useState } from "react";
// import './Testign.scss'
const Testing = () => {
  // Initial groups to drag between
  const dates = ["1", "2", "3", "noDrop"];
  // Initial items to be dragged
  const initialItems = [{ id: 1, group: "1", value: "drag 1" }];
  // Sets the state of the items.
  // Can be used to add items
  const [items, setItems] = useState(initialItems);
  // Data about a things id, origin, and destination
  const [dragData, setDragData] = useState({});
  // Are we hovering over the noDrop div?
  const [noDrop, setNoDrop] = useState("");

  const reset = () => {
    setItems(initialItems);
  };

  // onDragStart we setDragData.
  // useState instead of e.dataTransfer so we can transfer more data
  const handleDragStart = (e, id, group) => {
    setDragData({ id: id, initialGroup: group });
  };

  // If we enter the noDrop zone the state will be updated
  // Used for styling.
  const handleDragEnter = (e, group) => {
    if (group === "noDrop") {
      setNoDrop("noDrop");
    }
  };

  // DND will not work without this.
  const handleDragOver = (e) => {
    e.preventDefault();
  };

  // setNoDrop to nothing to return styling to normal
  const handleDragLeave = (e) => {
    setNoDrop("");
  };

  // 1. makes copy of items (newItems)
  // 2. changes category of the item to its new group
  // 3. setItem to our NewItems
  const changeCategory = (itemId, group) => {
    const newItems = [...items];
    newItems[itemId - 1].group = group;
    setItems([...newItems]);
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
  // const [title, setTitle] = useState("");
  const handleForm = (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const newItem = {
      id: items.length + 1,
      group: "1",
      value: `${title} ${items.length + 1}`,
    };
    const newItems = [...items, newItem];
    setItems(newItems);
    // setTitle(title);
    // e.target.reset();
  };
  return (
    <>
      <div>
        {/* Add to / Reset state */}
        <button onClick={reset}>Reset</button>
        <form onSubmit={handleForm} className="my-5">
          <input type="text" name="title" placeholder="type a title" />
          <input type="submit" value="Add" />
        </form>
      </div>
      <div className="groups">
        <div style={{border:'2px solid red'}}>
          <h6>default place {initialItems[0].group}</h6>
        </div>

        {/* iterate over groups */}
        {dates.map((date) => (
          <div
            // change styling if dragging into noDrop zone
            className={`${
              date === "noDrop" && noDrop === "noDrop" ? noDrop : "group"
            }`}
            // event handlers
            onDragEnter={(e) => handleDragEnter(e, date)}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={(e) => handleDrop(e, date)}
            key={date}
          >
            <h1 className="text-danger">{date}</h1>
            <div>
              {items
                .filter((item) => item.group === date)
                .map((item) => (
                  <div
                    key={item.id}
                    id={item.id}
                    // change style if dragged over noDrop
                    className={`${
                      date === "noDrop" && noDrop === "noDrop"
                        ? "notAllowed"
                        : "item"
                    }`}
                    // MAKES THE ITEM DRAGGABLE!!!!
                    draggable
                    // event handler
                    onDragStart={(e) => handleDragStart(e, item.id, date)}
                  >
                    {/* The name of each item */}
                    <h3>{item.value}</h3>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Testing;
