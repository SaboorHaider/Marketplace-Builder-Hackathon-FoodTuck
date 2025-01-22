import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "./restaurant/hero/page";
import AboutUs from "./restaurant/about-us/page";
import MenuCom from "./restaurant/menu/page";
import FoodCategory from "./restaurant/foodCatrgory/page";
import ChoseUs from "./restaurant/choseUs/page";
import Service from "./restaurant/servic/page";
import OurChefs from "./restaurant/ourChefs/page";
import TestimonialCard from "./restaurant/testimonials/page";
import BlogSection from "./restaurant/blogPost/page";

const Home = () => {
  return (
    <div className="">
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
        <BlogSection />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Home;
