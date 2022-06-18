import React from "react";

const Weeks = () => {
  const weeks = [
    { id: 1, day: "Mon" },
    { id: 2, day: "Tue" },
    { id: 3, day: "Wed" },
    { id: 4, day: "Thu" },
    { id: 5, day: "Fri" },
    { id: 6, day: "Sat" },
    { id: 7, day: "Sun" },
  ];
  return (
    <section className="row row-cols-7">
      {weeks.map((week) => (
        <p className="col bg-primary p-2 m-2" key={week.id}>
          {week.day}
        </p>
      ))}
    </section>
  );
};

export default Weeks;
