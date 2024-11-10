
const ServicesSection = () => {
    return (
      <section id="services" className="bg-gray-100 py-20">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-primary mb-6">My Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <h3 className="text-xl font-semibold text-primary mb-4">Web Development</h3>
              <p className="text-gray-600">Building fast and responsive websites using modern technologies.</p>
            </div>
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <h3 className="text-xl font-semibold text-primary mb-4">UI/UX Design</h3>
              <p className="text-gray-600">Creating clean and intuitive user interfaces for better user experience.</p>
            </div>
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <h3 className="text-xl font-semibold text-primary mb-4">Consulting</h3>
              <p className="text-gray-600">Providing advice and strategies to help improve your business online.</p>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default ServicesSection;
  