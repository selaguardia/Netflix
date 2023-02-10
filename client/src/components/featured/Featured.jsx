import { InfoOutlined, PlayArrow } from "@mui/icons-material";
import FeaturedTitle from "../../assets/witcher-title.png";
import FeaturedFilm from "../../assets/witcher.jpeg";
import "./featured.scss";

const Featured = ({ type }) => {
  return (
    <div className="featured">
      {type && (
        <div className="category">
          <span>{type === "movies" ? "Movies" : "Series"}</span>
          <select name="genre" id="genre">
            <option>Genre</option>
            <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="fantasy">Fantasy</option>
            <option value="historical">Historical</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Sci-Fi</option>
            <option value="thriller">Thriller</option>
            <option value="western">Western</option>
            <option value="animation">Animation</option>
            <option value="drama">Drama</option>
            <option value="documentary">Documentary</option>
          </select>
        </div>
      )}
      <img src={FeaturedFilm} alt="" />
      <div className="info">
        <img src={FeaturedTitle} alt="" />
        <span className="desc">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus illo
          dignissimos quidem explicabo ipsa nihil veritatis quos amet ipsam
          excepturi. Minus illo dignissimos quidem explicabo ipsa nihil
          veritatis quos amet ipsam excepturi.
        </span>
        <div className="buttons">
          <button className="play">
            <PlayArrow />
            <span>Play</span>
          </button>
          <button className="more">
            <InfoOutlined />
            <span>Info</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
