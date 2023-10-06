import { useState, useEffect } from "react";
import './Card.css'

function Card(props) {
    const [isFlipped, setIsFlipped] = useState(false);

    useEffect(() => {
        setIsFlipped(false); // Set isFlipped to false whenever the card changes
    }, [props.french]);

    return (
        <div
        className={`card ${isFlipped ? "flipped" : ""} ${props.difficulty}`}
        onClick={() => setIsFlipped(!isFlipped)}
        >
        <div className="front">
            <p className="french">{props.french}</p>
        </div>
        <div className="back">
            <p className="english">{props.english}</p>
        </div>
        </div>
    );
}

export default Card;