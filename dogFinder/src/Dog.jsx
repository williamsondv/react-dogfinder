import "./Dog.css";
import React from "react";
import { useParams } from "react-router-dom";
import doglist from "./data";

function Dog(props) {
  const dogName = useParams();

  let discovery = props.dog;

  if (!discovery) {
    discovery = doglist.dogs.filter(
      (dog) => dog.name.toLowerCase() == dogName.dogName
    )[0];
  }

  return (
    <div>
      <h4>Name: {discovery.name}</h4>
      <p>Age: {discovery.age}</p>
      <img src={`../src/assets/${discovery.src}.jpg`} />
      <ul>
        {discovery.facts.map((dogFact) => (
          <li>{dogFact}</li>
        ))}
      </ul>
    </div>
  );
}

export default Dog;
