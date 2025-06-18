
import { Plus, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface DishCardProps {
  name: string;
  restaurant: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  isPopular?: boolean;
}

const DishCard = ({ name, restaurant, price, originalPrice, image, rating, isPopular }: DishCardProps) => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer group">
      <div className="relative h-40 bg-gradient-to-br from-orange-200 to-red-200 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center text-5xl">
          {image}
        </div>
        {isPopular && (
          <Badge className="absolute top-3 left-3 bg-green-500 hover:bg-green-600">
            Popular
          </Badge>
        )}
        <Button 
          size="sm" 
          variant="ghost" 
          className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm hover:bg-white"
        >
          <Heart className="w-4 h-4" />
        </Button>
      </div>
      
      <div className="p-4">
        <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-orange-500 transition-colors">
          {name}
        </h3>
        <p className="text-gray-500 text-sm mb-3">{restaurant}</p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-gray-900">${price}</span>
            {originalPrice && (
              <span className="text-sm text-gray-400 line-through">${originalPrice}</span>
            )}
          </div>
          <Button size="sm" className="bg-orange-500 hover:bg-orange-600 text-white">
            <Plus className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

const PopularDishes = () => {
  const dishes = [
    {
      name: "Margherita Pizza",
      restaurant: "Tony's Pizza Palace",
      price: 18.99,
      originalPrice: 22.99,
      image: "🍕",
      rating: 4.8,
      isPopular: true
    },
    {
      name: "Classic Cheeseburger",
      restaurant: "Burger Junction",
      price: 12.99,
      image: "🍔",
      rating: 4.6
    },
    {
      name: "Salmon Sashimi",
      restaurant: "Sakura Sushi",
      price: 24.99,
      image: "🍣",
      rating: 4.9,
      isPopular: true
    },
    {
      name: "Chicken Alfredo",
      restaurant: "Mama Mia Pasta",
      price: 16.99,
      originalPrice: 19.99,
      image: "🍝",
      rating: 4.7
    }
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-gray-900">
            Popular Dishes
          </h2>
          <Button variant="outline">View All</Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {dishes.map((dish, index) => (
            <DishCard key={index} {...dish} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularDishes;
