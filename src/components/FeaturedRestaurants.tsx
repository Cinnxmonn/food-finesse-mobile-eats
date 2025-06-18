
import RestaurantCard from "./RestaurantCard";
import { Button } from "@/components/ui/button";

const FeaturedRestaurants = () => {
  const restaurants = [
    {
      name: "Tony's Pizza Palace",
      cuisine: "Italian • Pizza",
      rating: 4.8,
      deliveryTime: "25-40 min",
      deliveryFee: "Free",
      image: "🍕",
      promoted: true
    },
    {
      name: "Burger Junction",
      cuisine: "American • Burgers",
      rating: 4.6,
      deliveryTime: "20-35 min",
      deliveryFee: "$2.99",
      image: "🍔"
    },
    {
      name: "Sakura Sushi",
      cuisine: "Japanese • Sushi",
      rating: 4.9,
      deliveryTime: "30-45 min",
      deliveryFee: "$1.99",
      image: "🍣"
    },
    {
      name: "Mama Mia Pasta",
      cuisine: "Italian • Pasta",
      rating: 4.7,
      deliveryTime: "25-40 min",
      deliveryFee: "Free",
      image: "🍝"
    },
    {
      name: "Dragon Garden",
      cuisine: "Chinese • Asian",
      rating: 4.5,
      deliveryTime: "35-50 min",
      deliveryFee: "$2.49",
      image: "🥡"
    },
    {
      name: "Taco Fiesta",
      cuisine: "Mexican • Tacos",
      rating: 4.6,
      deliveryTime: "20-30 min",
      deliveryFee: "$1.49",
      image: "🌮"
    }
  ];

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-gray-900">
            Featured Restaurants
          </h2>
          <Button variant="outline">View All</Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {restaurants.map((restaurant, index) => (
            <RestaurantCard
              key={index}
              {...restaurant}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedRestaurants;
