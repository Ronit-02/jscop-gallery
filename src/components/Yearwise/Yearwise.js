import React from 'react';
import "./Yearwise.css";
import Image from "../Image/Image";

function Yearwise(props) {
  return <div className="Yearwise">
      <h2>{props.year}</h2>
      <div>
          <div className="photoRow">
                <Image imageLink={props.imageLink} />
                <Image imageLink={props.imageLink} />
                <Image imageLink={props.imageLink} />
                <Image imageLink={props.imageLink} />
                <Image imageLink={props.imageLink} />
                <Image imageLink={props.imageLink} />
          </div>
      </div>
  </div>;
}

export default Yearwise;
