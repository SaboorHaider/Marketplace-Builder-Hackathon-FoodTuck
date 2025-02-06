import Navbar from "../components/Nav";
import Hero from "./restaurant/hero/page";
import AboutUs from "./restaurant/about-us/page";
import MenuCom from "./restaurant/menu/page";
import FoodCategory from "./restaurant/foodCatrgory/page";
import ChoseUs from "./restaurant/choseUs/page";
import Service from "./restaurant/servic/page";
import OurChefs from "./restaurant/ourChefs/page";
import TestimonialCard from "./restaurant/testimonials/page";
import Process from "./restaurant/activeProcess/page";

const Home = () => {
  return (
    <div className="bg-black">
      <header>
        <Navbar />
      </header>

      <main>
        <Hero />
        <AboutUs />
        <FoodCategory />
        <ChoseUs />
        <Service />
        <MenuCom />
        <OurChefs />
        <TestimonialCard />
        <Process />
      </main>

    </div>
  );
};

export default Home;
