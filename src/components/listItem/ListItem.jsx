import { Add, PlayArrow, ThumbDownAltOutlined, ThumbUpAltOutlined } from "@material-ui/icons"
import "./listItem.scss"

function ListItem() {
  return (
    <div className="listItem">
      <img src="https://i.gadgets360cdn.com/large/witcher_blood_origin_1632571042826.jpeg" alt="" />
      <div className="itemInfo">
        <div className="icons">
          <PlayArrow />
          <Add />
          <ThumbUpAltOutlined />
          <ThumbDownAltOutlined />
        </div>
      </div>
    </div>
  )
}

export default ListItem