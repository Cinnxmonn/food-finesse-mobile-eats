
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import FeaturedRestaurants from "@/components/FeaturedRestaurants";
import PopularDishes from "@/components/PopularDishes";
import AppDownload from "@/components/AppDownload";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Categories />
      <FeaturedRestaurants />
      <PopularDishes />
      <AppDownload />
      <Footer />
    </div>
  );
};

export default Index;
