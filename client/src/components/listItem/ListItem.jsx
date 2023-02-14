import { useEffect, useState } from "react";
import "./listItem.scss";
import ListItemCoverImg from "../../assets/granTorinoImgListItem.jpeg";
import {
  PlayArrow,
  Add,
  ThumbUpAltOutlined,
  ThumbDownOutlined,
} from "@mui/icons-material";
import axios from "axios";

const ListItem = ({ index, item }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [movie, setMovie] = useState({});
  
  useEffect(() => {
    const getMovie = async () => {
      try {
        const res = await axios.get("movies/find/" + item,
          {
            headers: {
              token:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZTZhYzNlOWZhMmVhNDMwN2ZkYjVlNSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3NjE0MDg0OSwiZXhwIjoxNjc2NTcyODQ5fQ.FIEYI4ViPa19-4bEFkjOkGfPJLDaABi0KZHBeXT2szk"
            },
          }
        );
        setMovie(res.data)
      } catch (error) {
        console.log(error)
      }
    }
    getMovie()
  }, [item])

  return (
    <div
      className="listItem"
      style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={movie.img}
        alt="List Item Cover"
      />
      {isHovered && (
        <>
          <video src={movie.trailer} autoPlay={true} loop />
          <div className="itemInfo">
            <div className="icons">
              <PlayArrow className="icon" />
              <Add className="icon" />
              <ThumbUpAltOutlined className="icon" />
              <ThumbDownOutlined className="icon" />
            </div>
            <div className="itemInfoTop">
              <span>{movie.duration}</span>
              <span className="limit">+{movie.limit}</span>
              <span>{movie.year}</span>
            </div>
            <div className="desc">
              {movie.desc}
            </div>
            <div className="genre">{movie.genre}</div>
          </div>
        </>
      )}
    </div>
  );
};

export default ListItem;