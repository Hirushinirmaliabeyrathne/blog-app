export default function CategoriesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Categories</h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">Explore our different categories</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {["Technology", "Design", "Business", "Marketing", "Development", "Creative"].map((category, index) => (
              <div
                key={index}
                className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors cursor-pointer"
              >
                <h3 className="text-xl font-semibold mb-2">{category}</h3>
                <p className="text-gray-400">Discover amazing content in {category.toLowerCase()}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
