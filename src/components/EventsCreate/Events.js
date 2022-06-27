import React, { useState } from "react";
import "./style.css";

const Events = () => {
  const [items, setItems] = useState([]);

  const [className, setClassName] = useState(false);

  // console.log("get", items);
  function addToDo(e) {
    e.preventDefault();
    const value = e.target.task.value;
    const id = Math.random().toString(36).slice(2);

    // console.log(id, "p id");

    setItems((prevState) => {
      return [...prevState, { value: value, id: id }];
    });

    // const divCreate = document.createElement("span");
    /* divCreate.className = "item";
        divCreate.setAttribute("draggable", "true");
        divCreate.innerText = value; */

    /* for (const iterator of addNew) {
      // console.log("hello iterator",iterator)
      iterator.appendChild(divCreate);
    } */
    //   e.target.reset()
    // console.log(items,"items here");
    // console.log("how many item", item);

    /* const items = document.querySelectorAll(".item");
    items.forEach((item) => {
      item.addEventListener("dragstart", dragStart);
      item.addEventListener("dragend", dragEnd);
    }); */
    /*  columns.forEach((column) => {
      column.addEventListener("dragover", dragOver);
      column.addEventListener("dragenter", dragEnter);
      column.addEventListener("dragleave", dragLeave);
      column.addEventListener("drop", dragDrop);
    }); */

    /* let count = [];
for (const item of items) {

      count.push(item.tagName='span');
      
    }
    console.log(count,'count')  */

    /*  function getFeedBack(feedBack) {
      
      if (feedBack) {
        for (const column of columns) {
        if(column.firstChild.nextSibling.innerText == 'All Tasks'){
          continue
        }
        console.log(column.firstChild.nextSibling.innerText)
        if(column.childElementCount >= 2){
         console.log("you have add two or more")
        }
        
      }
      }
    } */
  }

  function dragStart(e) {
    // e.preventDefault();
    // setClassName(true);
    e.dataTransfer.setData("Text", e.target.id);

    const children = document.getElementsByClassName("child")
    for (const child of children) {
      console.log( e.target)
      if (child.className === "child") {
        child.style.border = "";
      }
    }

  }

  function dragOver(e) {
    e.preventDefault();
    // console.log("drag over");
   
 
  }
  function dragEnter(e) {
    if (e.target.className === "child") {
      e.target.style.border = "3px dotted red";
    }
  }
  function getDragLeft(e) {
    // console.log("drag left", e.target.className);
    if (
      e.target.className === "child" ||
      e.target.className === "col-md-3" ||
      e.target.className === "item"
    ) {
      e.target.style.border = "";
    }
    // e.preventDefault();
    const length = e.target?.children?.length - 1;
    const location = e.target?.children;
    // console.log("location", location[0]?.innerText);
    /*  for (const column of columns) {
      if (location[0]?.innerText == "All Tasks") {
        continue;
      }
      if (length <= 3) {
        this.className = "column";
      }
    } */
  }

  function dragDrop(e) {
    // e?.target?.appendChild(document.getElementById(data));

    // console.log("drag dropped",dragItem.getElementsByTagName("span"));
    const length = e.target?.children?.length;
    const location = e.target?.children;
    // console.log("location Drop", location[0]);
    // console.log("Drag Drop", length);
    // console.log("children",e.target?.children)
    if (!location[0]) {
      return false;
    } else {
      e.preventDefault();
      const data = e.dataTransfer.getData("Text");
      e?.target?.appendChild(document.getElementById(data));
      console.log(e.target.className);
    }
  }

  function dragEnd(e) {
    // console.log("drag ended", e);
    setClassName(false);
  }
  const monthsDays = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <>
      <h3 className="text-center my-5">June 22, 2022</h3>
      <div className="row">
        <section
          className="col-md-3"
          id="addNew"
          onDragOver={dragOver}
          onDragEnter={dragEnter}
          onDragLeave={getDragLeft}
          onDrop={dragDrop}
        >
          <h4>Create an Event</h4>
          <form id="form" onSubmit={addToDo}>
            <input className="formInline" type="text" name="task" required />
            <input className="formInline" type="submit" value="Add" />
          </form>
          {items.map((item, key) => (
            <span
              className="item"
              draggable="true"
              key={item.id || key}
              id={item.id}
              onDragStart={dragStart}
              onDragEnd={dragEnd}
            >
              <small>&#10004;</small>
              {item?.value}
            </span>
          ))}
        </section>
        <section className="parent col-md-8">
          {monthsDays.map((day) => (
            <div
              key={day}
              className="child"
              onDragOver={dragOver}
              onDragEnter={dragEnter}
              onDragLeave={getDragLeft}
              onDrop={dragDrop}
            >
              <h1 id="unselectable">{day}</h1>
            </div>
          ))}
        </section>
      </div>
    </>
  );
};

export default Events;
