import React from "react";

const Card = (props) => {
    const handleButtonClick = () => {
        window.open(props.linkto, "_blank");
    };
    return (
        <div className="card">         
            <div className ="cardBox">
                <img className="cardImage" src={props.img}></img>
                <h2 className="cardTitle">{props.title}</h2>
                <p className="cardDescription">{props.description}</p>
                {/* <button className="cardBtn" onclick="window.location.href='"{props.linkto}>';"More Details</button> */}
                <button
                    className="cardBtn"
                    onClick={handleButtonClick}>
                    More Details
                </button>
            </div>
        </div>
    )
}

export default Card;
