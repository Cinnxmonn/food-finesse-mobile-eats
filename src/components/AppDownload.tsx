
import { Button } from "@/components/ui/button";
import { Smartphone, Star } from "lucide-react";

const AppDownload = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-orange-500 to-red-500">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Content */}
          <div className="flex-1 text-center lg:text-left text-white">
            <h2 className="text-4xl font-bold mb-4">
              Get the FoodDash App
            </h2>
            <p className="text-xl mb-6 text-orange-100">
              Order faster, track your delivery in real-time, and get exclusive app-only deals.
            </p>
            
            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                  <Star className="w-4 h-4" />
                </div>
                <span>Exclusive app deals</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                  <Smartphone className="w-4 h-4" />
                </div>
                <span>Real-time tracking</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                  <Star className="w-4 h-4" />
                </div>
                <span>Faster checkout</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                  <Smartphone className="w-4 h-4" />
                </div>
                <span>Save favorites</span>
              </div>
            </div>
            
            {/* Download Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="bg-black hover:bg-gray-800 text-white px-8 py-3 rounded-xl"
              >
                📱 Download on App Store
              </Button>
              <Button 
                size="lg" 
                className="bg-black hover:bg-gray-800 text-white px-8 py-3 rounded-xl"
              >
                🤖 Get it on Google Play
              </Button>
            </div>
          </div>
          
          {/* Phone Mockup */}
          <div className="flex-shrink-0">
            <div className="w-64 h-96 bg-white/10 backdrop-blur-sm rounded-3xl p-4 flex items-center justify-center">
              <div className="w-full h-full bg-white rounded-2xl flex items-center justify-center text-6xl">
                📱
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppDownload;
