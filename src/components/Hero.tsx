
import { Button } from "@/components/ui/button";
import { Search, MapPin } from "lucide-react";
import { Input } from "@/components/ui/input";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-orange-50 to-red-50 py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Delicious food,
            <span className="text-orange-500"> delivered fast</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Order from your favorite restaurants and get fresh, hot meals delivered to your doorstep in minutes.
          </p>
          
          {/* Location and Search */}
          <div className="bg-white p-4 rounded-2xl shadow-lg max-w-2xl mx-auto">
            <div className="flex flex-col md:flex-row gap-3">
              <div className="flex items-center gap-2 px-4 py-3 bg-gray-50 rounded-xl flex-1">
                <MapPin className="w-5 h-5 text-gray-400" />
                <Input 
                  placeholder="Enter your address"
                  className="border-none bg-transparent p-0 text-gray-900 placeholder-gray-500"
                />
              </div>
              <div className="flex items-center gap-2 px-4 py-3 bg-gray-50 rounded-xl flex-1">
                <Search className="w-5 h-5 text-gray-400" />
                <Input 
                  placeholder="Search for food or restaurants"
                  className="border-none bg-transparent p-0 text-gray-900 placeholder-gray-500"
                />
              </div>
              <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-xl">
                Find Food
              </Button>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-8 mt-12 max-w-md mx-auto">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">500+</div>
              <div className="text-sm text-gray-600">Restaurants</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">30min</div>
              <div className="text-sm text-gray-600">Avg Delivery</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">50k+</div>
              <div className="text-sm text-gray-600">Happy Customers</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
