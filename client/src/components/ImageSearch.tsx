import { useState } from "react";
import "../styles/main.scss";
import { useAuth0 } from "@auth0/auth0-react";

export const ImageSearch = () => {
  const [inputValue, setInputValue] = useState("");
  const [searchTime, setSearchTime] = useState();
  const [wordResponse, setWordResponse] = useState("");
  const [images, setImages] = useState<{ link: string }[]>([]);
  const { user } = useAuth0();

  const handleClick = async (inputValue: string) => {
    console.log("handleclick", inputValue);

    const response = await fetch(
      `https://www.googleapis.com/customsearch/v1?key=${
        import.meta.env.VITE_GOOGLE_API_KEY
      }&cx=${
        import.meta.env.VITE_GOOGLE_SEARCH_ENGINE_ID
      }&num=10&searchType=image&q=${inputValue}`
    );

    const data = await response.json();
    setSearchTime(data.searchInformation.searchTime);
    console.log(data.searchInformation.searchTime);
    

    if (data.spelling && data.spelling.correctedQuery) {
      setWordResponse(data.spelling.correctedQuery);
    } else {
      setWordResponse("");
    }
    setImages(data.items || []);
  };

  const handleWordClick = () => {
    setInputValue(wordResponse);
    handleClick(wordResponse || "");
  };

  const handelAddClick = async (link: string) => {
    try {
      const response = await fetch(
        "http://localhost:3000/api/favouriteImages",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            userEmail: user?.sub,
            link: link,
          }),
        }
      );
      if (response.ok) {
        console.log("Bilden har lagts till i favoriter.");
      } else {
        console.error(
          "Det uppstod ett fel när bilden skulle läggas till i favoriter."
        );
      }
    } catch (error) {
      console.error("Något gick fel:", error);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      ></input>
      <button onClick={() => handleClick(inputValue)}>Search</button>
      <span
        onClick={() => {
          handleWordClick();
        }}
      >
        <div id="correctedWord">
          {wordResponse && (
            <span onClick={() => {}}>
              Menade du <a>{wordResponse}</a>?
            </span>
          )}
        </div>
      </span>
      <div>{searchTime && <p>Söktid: {searchTime}</p>}</div>

      <div id="imagesResult">
        {images?.map((item, index) => (
          <div key={index} id="imageSearchContainer">
            <div className="imgContainer">
              <img src={item.link} alt={`Image ${index}`} />
            </div>
            <button onClick={() => handelAddClick(item.link)}>
              Add to favourite
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
