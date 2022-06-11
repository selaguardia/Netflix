import Navbar from '../components/navbar/Navbar';
import './home.scss'
import NetflixBackground from '../assets/netflix-background.jpeg'
import Featured from '../components/featured/Featured';

const Home = () => {
  return (
    <div className='home'>
      <Navbar />
      <Featured />
    </div>
  )
}

export default Home