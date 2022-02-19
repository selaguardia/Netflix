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
            <option value="action">Action</option>
            <option value="comedy">Comedy</option>
            <option value="drama">Drama</option>
            <option value="horror">Horror</option>
            <option value="documentary">Documentary</option>
            <option></option>
          </select>
        </div>
      )}
      <img src="https://storage.googleapis.com/stateless-campfire-pictures/2019/02/Netfli-You-Key-Art-Movie-Poster.jpg" alt="" />
      <div className="info">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Logonetflix.png/1600px-Logonetflix.png" alt="" />
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