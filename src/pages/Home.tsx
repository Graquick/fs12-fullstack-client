import HomeLinks from "./../components/HomeLinks";
import Footer from "components/footer";
import Carousel from '../components/carousel/Carousel';

const Home = () => {
  return (
    <div className="flex flex-col justify-between w-full min-h-screen bg-orange-100">
      <Carousel />
      <HomeLinks />
      <Footer />
    </div>
  );
};

export default Home;
