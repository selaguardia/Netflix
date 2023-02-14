import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import Featured from "../../components/featured/Featured";
import List from "../../components/list/List";
import { useEffect, useState } from "react";
import axios from "axios";

const Home = ({ type }) => {
  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState(null);

  useEffect(() => {
    const getRandomLists = async () => {
      try {
        const res = await axios.get(
          `lists${type ? "?type=" + type : ""}${
            genre ? "&genre=" + genre : ""
          }`,
          {
            headers: {
              token:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZTZhYzNlOWZhMmVhNDMwN2ZkYjVlNSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3NjE0MDg0OSwiZXhwIjoxNjc2NTcyODQ5fQ.FIEYI4ViPa19-4bEFkjOkGfPJLDaABi0KZHBeXT2szk"
            },
          }
        );
        console.log(res)
        setLists(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getRandomLists();
  }, [type, genre]);

  return (
    <div className="home">
      <Navbar />
      <Featured type={type} setGenre={setGenre} />
      {lists.map((list) => (
        <List list={list} key={list._id}/>
      ))}
    </div>
  );
};

export default Home;
