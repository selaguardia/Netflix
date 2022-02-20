import { InfoOutlined, PlayArrow } from "@material-ui/icons"
import "./featured.scss"

function Featured({type}) {
  return (
    <div className="featured">
      {type && (
        <div className="category">
          <span>{type === 'movie' ? 'Movies' : "Series"}</span>
          <select name="genre" id="genre">
            <option>Genre</option>
            <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="fantasy">Fantasy</option>
            <option value="historical">Historical</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="thriller">Thriller</option>
            <option value="western">Western</option>
            <option value="animation">Animation</option>
            <option value="drama">Drama</option>
            <option value="documentary">Documentary</option>
          </select>
        </div>
      )}
      <img src="https://m.media-amazon.com/images/I/917Aoui3gKL._SL1500_.jpg" alt="" />
      <div className="info">
      <img src="https://www.pngall.com/wp-content/uploads/5/Money-Heist-Logo-PNG.png" alt="" />
        <span className="desc">Lorem ipsum dolor, sit amet consectetur adipisicing elitsit amet consectetur adipisicing elit sit amet consectetur adipisicing elit. Earum, voluptatibus.</span>
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
  )
}

export default Featured