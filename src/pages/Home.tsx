import HomeLinks from "./../components/HomeLinks";
import Footer from "components/footer";
import Carousel from './../components/Carousel';

const Home = () => {
  return (
    <div className="flex flex-col justify-between w-full min-h-screen gap-4 pt-4 mt-20 bg-white">
      <section className="flex flex-col items-center justify-center h-[768px] mlg:mt-20 mlg:h-[568px] overflow-hidden mlg:gap-[0px] gap-[100px]">
        <h1 className="text-[1.75rem] mlg:text-[3rem] text-[#383B45] w-[350px] mlg:w-[560px] text-center uppercase">
          minimal & sustainable clothing
        </h1>
        <Carousel />
      </section>
      <HomeLinks />
      <Footer />
    </div>
  );
};

export default Home;
