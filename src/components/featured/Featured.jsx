import './featured.scss'
import FeaturedFilm from '../../assets/witcher.jpeg'
import FeaturedTitle from '../../assets/witcher-title.png'
import { InfoOutlined, PlayArrow } from '@mui/icons-material'

const Featured = ({type}) => {
  return (
    <div className='featured'>
      {type && (
        <div className="category">
          <span>{type === 'movie'? 'Movies' : "TV Shows"}</span>
          <select name="genre" id="genre">
            <option>Genre</option>
          </select>
        </div>
      )}
      <img src={FeaturedFilm} alt="" />
      <div className="info">
        <img src={FeaturedTitle} alt="" />
        <span className="desc">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus illo dignissimos quidem explicabo ipsa nihil veritatis quos amet ipsam excepturi. Minus illo dignissimos quidem explicabo ipsa nihil veritatis quos amet ipsam excepturi.
        </span>
        <div className="buttons">
          <button className="play">
            <PlayArrow /><span>Play</span>
          </button>
          <button className="more">
            <InfoOutlined /><span>Info</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Featured