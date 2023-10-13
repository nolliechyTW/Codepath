import { useState, useEffect } from "react";
import "../API/CatApi.css";

const url = "https://api.thecatapi.com/v1/images/search?limit=300";
const api_key =
  "live_v9D6uCmWHv4neaVuhg7INh9RH0L9Sp0BBxSJnOJRP79IUqJ1FqVMpbk4vRYdyCqG";

function CatApi() {
  const [data, setData] = useState([]);
  const [currentCat, setCurrentCat] = useState(null);

  useEffect(() => {
    const getCat = async () => {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "x-api-key": api_key,
        },
      });
      const data = await response.json();
      const filteredData = data.filter((cat) => cat.breeds.length && cat.id);
      if (filteredData.length) {
        setData(filteredData);
        setCurrentCat(filteredData[0]);
        console.log(filteredData);
      }
    };

    // Call the getCat function to set the cat state
    getCat();
    console.log("useEffect called");
  }, []); // i don't know why two pictures will show up when i put data in the array

  const shuffleCat = () => {
    const randomIndex = Math.floor(Math.random() * data.length);
    setCurrentCat(data[randomIndex]);
  };

  const handleButtonClick = (breed) => {
    console.log(`Button for ${breed} clicked`);
  };

  return (
    <div>
      {currentCat && (
        <div key={currentCat.id}>
          <h1>{currentCat.breeds[0].name}</h1>
          <div className="cat_attribute">
            <button
              onClick={() => handleButtonClick(currentCat.breeds[0].name)}
            >
              {currentCat.breeds[0].name}
            </button>
            <button
              onClick={() => handleButtonClick(currentCat.breeds[0].origin)}
            >
              {currentCat.breeds[0].origin}
            </button>
            <button
              onClick={() => handleButtonClick(currentCat.breeds[0].life_span)}
            >
              {currentCat.breeds[0].life_span}
            </button>
          </div>
          <img src={currentCat.url} alt={currentCat.breeds[0].name} />
        </div>
      )}
      <button onClick={shuffleCat}>🔀 Discover 🔀 </button>
    </div>
  );
}

export default CatApi;
