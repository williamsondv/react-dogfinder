import "./DogList.css";
import Dog from "./Dog.jsx";
import React from "react";

function DogList(props) {
  return (
    <div>
      {props.data.dogs.map((dog) => (
        <Dog dog={dog} />
      ))}
    </div>
  );
}

export default DogList;
