import React from "react";
import pizza01 from "../Assets/pizza01.png";
import pizza02 from "../Assets/pizza02.png";

export default function Recents() {
  const [list, setList] = React.useState([
    {
      img: pizza01,
      name: "Pizza01",
      prize: 1500,
    },
    {
      img: pizza02,
      name: "Pizza02",
      prize: 1500,
    },
  ]);
  return (
    <div>
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-12 mb-4">
            <h2 className="text-center font-weight-bold mb-3 mt-3">
              <span className="orange-text">C</span>ustomer{" "}
              <span className="orange-text">F</span>avourite
            </h2>
          </div>
          {list.map((val, key) => {
            return (
              <div className="col-lg-3 col-md-4 col-sm-6" key={key}>
                <div className="custom-card mx-auto text-center pt-4 pb-4 ">
                  <img src={val.img} alt={val.name} />
                  <h6 className="mt-2">{val.name}</h6>
                  <p className="orange-text">Rs.{val.prize}.00</p>
                  <button className="btn alpha-button">Add to Cart</button>
                </div>
              </div>
            );
          })}
          <div className="col-lg-12 my-5 d-flex justify-content-center">
            <a href="" className="btn alpha-button">
              Load More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
