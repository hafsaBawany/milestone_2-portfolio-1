
const ServicesSection = () => {
    return (
      <section id="services" className=" bg-purple-600 py-20">
        <div className="max-w-7xl mx-auto text-center bg-purple">
          <h2 className="text-3xl font-semibold text-white mb-6">My Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
            <div className="bg-blue-800 p-6 shadow-lg rounded-lg">
              <h3 className="text-xl font-semibold text-primary mb-4 text-white">Web Development</h3>
              <p className=" text-white">Building fast and responsive websites using modern technologies.</p>
            </div>
            <div className="bg-blue-800 p-6 shadow-lg rounded-lg text-white">
              <h3 className="text-xl font-semibold text-primary mb-4">UI/UX Design</h3>
              <p className="text-white ">Creating clean and intuitive user interfaces for better user experience.</p>
            </div>
            <div className="bg-blue-800 p-6 shadow-lg rounded-lg">
              <h3 className="text-xl font-semibold text-primary mb-4 text-white">Consulting</h3>
              <p className="text-white">Providing advice and strategies to help improve your business online.</p>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default ServicesSection;
  