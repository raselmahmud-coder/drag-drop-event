import React, { useState } from "react";
import "./style.css";

const Events = () => {
  const [items, setItems] = useState([]);

  const [className, setClassName] = useState(false);
  console.log("get", items);
  function addToDo(e) {
    e.preventDefault();
    const value = e.target.task.value;
    const id = value + Math.random().toString(36).slice(2);

    console.log(id, "p id");

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
    setClassName(true);
    const ki = e.dataTransfer.setData("Text", e.target.id);
    console.log("drag started", ki);
    /*  dragItem = this;
  setTimeout(() => (this.className = "invisible"), 0) */
  }

  function dragOver(e) {
    e.preventDefault();
    console.log("drag over");
  }
  function dragEnter(e) {
    console.log("drag entered", e);
    if (e.target.className == "item") {
      document.getElementById("demo").innerHTML = "Entered the dropzone";
      e.target.style.border = "3px dotted red";
    }
  }
  function getDragLeft(e) {
    if (e.target.className == "item") {
      e.target.style.border = "";
    }
    // e.preventDefault();
    const length = e.target?.children?.length - 1;
    console.log("drag left", length);
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
    e.preventDefault();
    var data = e.dataTransfer.getData("Text");
    console.log("whatr is ", data);
    e.target.appendChild(document.getElementById(data));
    // this.append(dragItem);
    // setClassName(false);
    // console.log("drag dropped",dragItem.getElementsByTagName("span"));
    const length = e.target?.children?.length;
    const location = e.target?.children;
    // console.log("location Drop", location[0]?.innerText);
    console.log("Drag Drop", length);
    // console.log("children",e.target?.children)

    /*  for (const column of columns) {
      if (location[0]?.innerText == "All Tasks") {
        continue;
      } */
    /*  if (
          column.firstChild.nextSibling.innerText == location[0].innerText
        ) {
        } */
    // console.log(column.getElementsByTagName("span")?.namedItem?.length);

    // console.log(column.getElementsByTagName("span").length)
    /* if(column.childElementCount > 2){
          console.log("you have add two or more")

        } */
    /*   if (length > 3) {
        this.className = "warning column";
        console.warn("length is greeter then two");
      }
    } */
  }

  function dragEnd(e) {
    console.log("drag ended", e);
    setClassName(false);
    /* this.className = "item";
  dragItem = null; */
  }
  const monthsDays = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <>
      <section
        className="column"
        id="addNew"
        onDragOver={dragOver}
        onDragEnter={dragEnter}
        onDragLeave={getDragLeft}
        onDrop={dragDrop}
      >
        <h1>Create an Event</h1>
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
          ><small>&#10004;</small>{item?.value}
          </span>
        ))}
      </section>
      <section className="parent">

      {monthsDays.map((day) => (
        <div
          key={day}
          className="child"
          onDragOver={dragOver}
          onDragEnter={dragEnter}
          onDragLeave={getDragLeft}
          onDrop={dragDrop}
        >
          <h1>{day}</h1>
        </div>
      ))}
      </section>
    </>
  );
};

export default Events;
