import "./Card.css";
import CatApi from "./API/CatApi";

const Card = () => {
    return (
        <div className="card">
            <div className="card-body">
                <h1>Trippin&apos; on Cats</h1>
                <p>Discover cats from your wildest dreams!</p>
                <p>😺😼😾😸😽😹🙀😻😿</p>
                <div className="card-info">
                    {/* <h2>{attributes.name}</h2> */}
                    <div className="card-option">
                        <CatApi/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
