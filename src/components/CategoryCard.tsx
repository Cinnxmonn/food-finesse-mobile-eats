
interface CategoryCardProps {
  name: string;
  image: string;
  count: number;
}

const CategoryCard = ({ name, image, count }: CategoryCardProps) => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer group">
      <div className="text-center">
        <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-orange-100 to-red-100 rounded-2xl flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300">
          {image}
        </div>
        <h3 className="font-semibold text-gray-900 mb-1">{name}</h3>
        <p className="text-sm text-gray-500">{count} restaurants</p>
      </div>
    </div>
  );
};

export default CategoryCard;
