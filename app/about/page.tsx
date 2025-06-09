export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-center">About Us</h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 text-center">Learn more about our story and mission</p>
          <div className="prose prose-lg prose-invert mx-auto">
            <p className="text-gray-300 leading-relaxed mb-6">
              We are a passionate team dedicated to creating exceptional digital experiences. Our mission is to help
              businesses and individuals achieve their goals through innovative solutions and cutting-edge technology.
            </p>
            <p className="text-gray-300 leading-relaxed mb-6">
              With years of experience in the industry, we understand the importance of combining beautiful design with
              powerful functionality. Every project we undertake is crafted with attention to detail and a focus on user
              experience.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Whether you are looking to build a new website, develop an application, or enhance your digital presence,
              we are here to help you succeed.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
