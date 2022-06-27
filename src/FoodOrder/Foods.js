import React from "react";
import "./Foods.css";
import { AiOutlineHeart, AiFillStar, AiFillHeart } from "react-icons/ai";
import { BiTime, BiFilter } from "react-icons/bi";

const Foods = () => {
  return (
    <section className="row">
      <div className="col-md-2 bg-primary" style={{ paddingTop: "9vw" }}>
        <h3 className="bg-white p-2 rounded-5 text-capitalize text-center">
          menu
        </h3>
      </div>
      <div className="col-md-7">
        <div className="my-5" style={{ textAlign: "right" }}>
          <p className="mb-5"><BiFilter/>Filter</p>
          <label for="pet-select">Shorted by: </label>{" "}
          <select
            name="selection"
            id=""
            defaultValue={"Recommended"}
            style={{ border: "none", fontSize: "bold" }}
          >
            <option value="recommended">Recommended</option>
            <option value="name">Name</option>
            <option value="date">Date</option>
          </select>
        </div>
        <div className="d-flex justify-content-around">
          <div
            className="p-2 rounded-4"
            style={{ backgroundColor: "burlywood" }}
          >
            <div className="d-flex justify-content-between">
              <p className="d-flex align-items-center bg-black text-white px-2 rounded-4">
                <AiFillStar className="text-warning" /> 4.3
              </p>
              <p className="px-1 rounded-circle bg-white d-flex align-items-center ">
                <AiOutlineHeart />
              </p>
            </div>
            <div className="d-flex justify-content-center my-4">
              <img
                style={{ width: "9vw" }}
                className="rounded-circle"
                alt="Bootstrap Preview"
                src="https://www.layoutit.com/img/sports-q-c-140-140-3.jpg"
              />
            </div>
            <h5>
              Cabbage salad{" "}
              <small className="bg-white rounded-pill p-1">250g</small>
            </h5>
            <h3>$3.44</h3>
          </div>

          <div
            className="p-2 rounded-4"
            style={{ backgroundColor: "burlywood" }}
          >
            <div className="d-flex justify-content-between">
              <p className="d-flex align-items-center bg-black text-white px-2 rounded-4">
                <AiFillStar className="text-warning" /> 4.3
              </p>
              <p className="px-1 rounded-circle bg-white d-flex align-items-center">
                <AiFillHeart className="text-danger"/>
              </p>
            </div>
            <div className="d-flex justify-content-center my-4">
              <img
                style={{ width: "9vw" }}
                className="rounded-circle"
                alt="Bootstrap Preview"
                src="https://www.layoutit.com/img/sports-q-c-140-140-3.jpg"
              />
            </div>

            <h5>
              Cabbage salad{" "}
              <small className="bg-white rounded-pill p-1">250g</small>
            </h5>
            <h3>$3.44</h3>
          </div>
          <div
            className="p-2 rounded-4"
            style={{ backgroundColor: "burlywood" }}
          >
            <div className="d-flex justify-content-between">
              <p className="d-flex align-items-center bg-black text-white px-2 rounded-4">
                <AiFillStar className="text-warning" /> 4.3
              </p>
              <p className="px-1 rounded-circle bg-white d-flex align-items-center ">
                <AiOutlineHeart />
              </p>
            </div>
            <div className="d-flex justify-content-center my-4">
              <img
                style={{ width: "9vw" }}
                className="rounded-circle"
                alt="Bootstrap Preview"
                src="https://www.layoutit.com/img/sports-q-c-140-140-3.jpg"
              />
            </div>

            <h5>
              Cabbage salad{" "}
              <small className="bg-white rounded-pill p-1">250g</small>
            </h5>
            <h3>$3.44</h3>
          </div>
        </div>
      </div>
      <div className="col-md-3 bg-primary" style={{ paddingTop: "9vw" }}>
        <div className="d-inline-flex">
          <h4>My Order </h4>
          <span className="ms-4">Edit</span>
        </div>
        <div className="d-flex align-items-center">
          <BiTime />
          <h6 className="my-2 ms-2">{new Date().toLocaleTimeString()}</h6>
        </div>
        <div className="row my-4">
          <div className="d-flex justify-content-between">
            <div className="">
              <img
                style={{ width: "5vw" }}
                className="rounded-circle"
                alt="Bootstrap Preview"
                src="https://www.layoutit.com/img/sports-q-c-140-140-3.jpg"
              />
            </div>
            <div className="">
              <small style={{ display: "block" }}>Bean Soup</small>
              <small style={{ display: "block" }}>300g</small>
            </div>
            <div className="d-flex h-50 border border-danger rounded-5 px-2 bg-white">
              <small style={{ cursor: "pointer" }}>-</small>
              <input
                style={{ width: "2vw", border: "none" }}
                type="number"
                defaultValue={1}
              />
              <small style={{ cursor: "pointer" }}>+</small>
            </div>
            <div className="">$33 X</div>
          </div>
          <div className="text-center p-3 custom_border my-3">Drag & Drop</div>
        </div>
        <div className="d-flex justify-content-between">
          <h3>Total</h3>
          <h3>$13.33</h3>
        </div>
        <button className="btn btn-secondary w-100 rounded-pill my-4">
          Check out
        </button>
      </div>
    </section>
  );
};

export default Foods;
