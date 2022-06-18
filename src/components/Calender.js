import React, { useState } from "react";
import Dates from "./Dates";
import Title from "./Title";
import Weeks from "./Weeks";
const dates = [1, 2, 3, 4, 5, 6, 7];

const Calender = () => {
  const [title, setTitle] = useState("");
  const getYear = new Date().getFullYear();
  const [index, setIndex] = useState(1);

  function moveCard(i) {
    setIndex(i);
  }

  const handleForm = (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    setTitle(title);
    e.target.reset();
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

          {title && <Title titleInfo={title} />}
        </div>
        <div className="col-md-9">
          <Weeks />
          <section className="row row-cols-7">
            {dates.map((date, dex) => (
              <Dates
                key={dex}
                data={date}
                card={index === 1}
                moveCard={moveCard.bind(null, 1)}
              />
            ))}
          </section>
        </div>
      </section>
    </>
  );
};

export default Calender;
