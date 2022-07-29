import React from "react";
import './Card.css';


const Card = (props) => {

    const{album_pic, name, released} = props;

  return (
    <>
       <div className="card " style={{ width: "12rem"}} onClick={()=>{}}>
          <img src={album_pic} alt="album" height="250px"/>
            <div style={{background: "#181221" }} >
            <h6>{name}</h6>
            <p>{released}</p>
            </div>
        </div>
    </>
  );
};

export default Card;
