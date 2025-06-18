
import { Star, Clock, Truck } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface RestaurantCardProps {
  name: string;
  cuisine: string;
  rating: number;
  deliveryTime: string;
  deliveryFee: string;
  image: string;
  promoted?: boolean;
}

const RestaurantCard = ({ 
  name, 
  cuisine, 
  rating, 
  deliveryTime, 
  deliveryFee, 
  image, 
  promoted = false 
}: RestaurantCardProps) => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer group">
      {/* Image */}
      <div className="relative h-48 bg-gradient-to-br from-orange-200 to-red-200 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center text-6xl">
          {image}
        </div>
        {promoted && (
          <Badge className="absolute top-3 left-3 bg-red-500 hover:bg-red-600">
            Promoted
          </Badge>
        )}
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center gap-1">
          <Star className="w-4 h-4 text-yellow-500 fill-current" />
          <span className="text-sm font-medium">{rating}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-orange-500 transition-colors">
          {name}
        </h3>
        <p className="text-gray-500 text-sm mb-3">{cuisine}</p>
        
        {/* Delivery Info */}
        <div className="flex items-center justify-between text-sm text-gray-600">
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{deliveryTime}</span>
          </div>
          <div className="flex items-center gap-1">
            <Truck className="w-4 h-4" />
            <span>{deliveryFee}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
