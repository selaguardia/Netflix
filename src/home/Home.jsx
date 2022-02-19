import Featured from "../components/featured/Featured"
import Navbar from "../components/navbar/Navbar"
import List from "../components/list/List"
import "./home.scss"

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      {/* <img width="100%"src="https://media.comicbook.com/2019/08/spiderman-1185098.jpeg?auto=webp&width=500&height=738&crop=500:738,smart" alt="" /> */}
      <Featured />
      <List />
      <List />
      <List />
      <List />
    </div>
  )
}

export default Home