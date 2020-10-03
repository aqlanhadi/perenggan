import React from "react";

class Card extends React.Component {
  render() {
    return (
      <div className="max-w-sm rounded overflow-hidden shadoq-lg">
        <img
          className=""
          src={require("../assets/IMG_4114.jpg")}
          alt="Display"
        />
        <div className="">
          <div className="">Aqlan Nor Azman</div>
          <p className="">
            Weeeee<span></span>😜
          </p>
        </div>
      </div>
    );
  }
}

export default Card;
