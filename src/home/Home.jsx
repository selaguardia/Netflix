import Navbar from '../components/navbar/Navbar';
import './home.scss'
import NetflixBackground from '../assets/netflix-background.jpeg'
import Featured from '../components/featured/Featured';
import List from '../components/list/List';

const Home = () => {
  return (
    <div className='home'>
      <Navbar />
      <Featured />
      <List />
      <List />
      <List />
      <List />
    </div>
  )
}

export default Home