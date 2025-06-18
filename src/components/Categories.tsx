
import CategoryCard from "./CategoryCard";

const Categories = () => {
  const categories = [
    { name: "Pizza", image: "🍕", count: 45 },
    { name: "Burger", image: "🍔", count: 38 },
    { name: "Sushi", image: "🍣", count: 22 },
    { name: "Italian", image: "🍝", count: 31 },
    { name: "Chinese", image: "🥡", count: 28 },
    { name: "Mexican", image: "🌮", count: 19 },
    { name: "Indian", image: "🍛", count: 25 },
    { name: "Desserts", image: "🍰", count: 15 }
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
          Browse by Category
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
          {categories.map((category, index) => (
            <CategoryCard
              key={index}
              name={category.name}
              image={category.image}
              count={category.count}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
