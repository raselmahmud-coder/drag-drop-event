import React, { useState } from "react";
import Dates from "./Dates";
import Title from "./Title";
import Weeks from "./Weeks";
const dates = ["1", "2", "3", "4", "5", "6", "noDrop"];

const Calender = () => {
  const [title, setTitle] = useState("");
  const getYear = new Date().getFullYear();
  const [index, setIndex] = useState(1);
  const initialItems = [{ id: 1, group: "1", value: "drag 1" }];
  const [noDrop, setNoDrop] = useState("");
  const [dragData, setDragData] = useState({});

  const [items, setItems] = useState(initialItems);
  function moveCard(i) {
    setIndex(i);
  }

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
  console.log("length", items);

  const handleDragEnter = (e, group) => {
    console.log("drag enter", group);

    if (group === "noDrop") {
      setNoDrop("noDrop");
    }
  };
  const handleDragOver = (e) => {
    // console.log("drag over");
    e.preventDefault();
  };

  // setNoDrop to nothing to return styling to normal
  const handleDragLeave = (e) => {
    console.log("drag leave");
    setNoDrop("");
  };
  const handleDrop = (e, group) => {
    const daa = items.filter((d) => d.group !== group);
    console.log("many group", daa);


    // console.log("drop here",group);
    /* for (const iterator of items) {
      if (iterator.value.length) {
      }

      console.log(iterator, "what is it", e.target.innerText);
    } */

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
      <h2 className="text-center">July {getYear}</h2>
      <section className="d-flex">
        <div className="col-md-3 me-4">
          <h5>Event drag and drop</h5>
          <form onSubmit={handleForm} className="my-5">
            <input type="text" name="title" placeholder="type a title" />
            <input type="submit" value="Add" />
          </form>

          {
            
            items.map((item) => (
              <div
                key={item.id}
                id={item.id}
                // change style if dragged over noDrop
                className={``}
                // MAKES THE ITEM DRAGGABLE!!!!
                draggable
                // event handler
                onDragStart={(e) => handleDragStart(e, item.id)}
              >
                <p className="text-danger">{item.value}</p>
              </div>
            ))
}
          
        </div>
        <div className="col-md-9">
          <Weeks />

          <section className="row row-cols-7">
            {dates.map((group) => (
              <div
                // change styling if dragging into noDrop zone
                className={`col bg-secondary p-2 m-2 ${
                  group === "noDrop" && noDrop === "noDrop" ? noDrop : "group"
                }`}
                // event handlers
                onDragEnter={(e) => handleDragEnter(e, group)}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={(e) => handleDrop(e, group)}
                key={group}
              >
                <p className="text-bold">{group}</p>
                <div>
                  {items
                    .filter((item) => item.group === group)
                    .map((item) => (
                      <div
                        key={item.id}
                        id={item.id}
                        // change style if dragged over noDrop
                        className={`${
                          group === "noDrop" && noDrop === "noDrop"
                            ? "notAllowed"
                            : "item"
                        }`}
                        // MAKES THE ITEM DRAGGABLE!!!!
                        draggable
                        // event handler
                        onDragStart={(e) => handleDragStart(e, item.id, group)}
                      >
                        <p className="text-danger">{item.value}</p>
                      </div>
                    ))}
                </div>
              </div>
            ))}
          </section>
        </div>
      </section>
    </>
  );
};

export default Calender;
