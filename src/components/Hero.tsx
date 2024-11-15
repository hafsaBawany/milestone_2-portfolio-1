'use client'; 

import Image from 'next/image';

const Hero = () => {
  return (
    <section className="min-h-[200vh] bg-gradient-to-br from-blue-600 to-purple-700 py-20 text-white">
      <div className="container mx-auto px-6 flex flex-col items-center">
        
       
        <div className="text-center">
          <Image
            src="/hack-pic.webp"
            alt="Hack Image"
            width={500}
            height={500}
            className="mx-auto rounded-lg shadow-lg mb-8 max-w-full"
          />
          <h1 className="text-5xl font-extrabold mb-4 sm:text-4xl md:text-5xl lg:text-6xl">HAFSA BAWANY</h1>
          <p className="text-xl max-w-xl mx-auto mb-8 sm:text-lg md:text-xl">
            a frontend developer. Scroll down to explore our projects and aspirations!
          </p>
          <a href="#projects" className="bg-white text-gray-900 px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition duration-300 sm:px-4 sm:py-2">
            View Projects
          </a>
        </div>

      
        <div className="mt-20 max-w-2xl text-center">
          <h2 className="text-4xl font-bold mb-4 sm:text-3xl">Our Journey</h2>
          <p className="text-lg leading-relaxed mb-6 sm:text-base">
            From humble beginnings to now some incredible projects, My journey is defined by dedication and creativity.
           
          </p>
          <p className="text-lg leading-relaxed mb-6 sm:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tristique lorem id elit viverra,
            eu auctor ex viverra. Vestibulum sit amet facilisis mi. Donec eget dictum nisi.
          </p>
        </div>

        
        <div className="mt-20 bg-blue-800 p-10 rounded-lg shadow-lg text-center w-full max-w-2xl">
          <h2 className="text-4xl font-bold mb-4 sm:text-3xl">Our Vision</h2>
          <p className="text-lg leading-relaxed mb-6 sm:text-base">
            Looking to the future, we aim to develop solutions that make life easier, more connected, and more inspiring.
          </p>
          <p className="text-lg leading-relaxed mb-6 sm:text-base">
            Quisque efficitur eros quis risus fermentum, vel vulputate est blandit. Integer ac ex ut erat tincidunt
            lacinia ac ac augue. Nullam ornare ipsum ac mi aliquet, eget consequat libero tempus.
          </p>
        </div>

       
        <div className="mt-20 max-w-2xl text-center">
          <h2 className="text-4xl font-bold mb-4 sm:text-3xl">On going Projects</h2>

          <p className="text-lg leading-relaxed mb-6 sm:text-base">
             Here are some of my highlighted projects:
          </p>
          <ul className="space-y-4">
            <li className="p-4 bg-white bg-opacity-20 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold sm:text-xl">Project 1</h3>
              <p>A web application for real-time collaboration and productivity.</p>
            </li>
            <li className="p-4 bg-white bg-opacity-20 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold sm:text-xl">Project 2</h3>
              <p>An AI-powered tool for personalized recommendations and analytics.</p>
            </li>
            <li className="p-4 bg-white bg-opacity-20 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold sm:text-xl">Project 3</h3>
              <p>A mobile app designed to simplify daily task management and scheduling.</p>
            </li>
          </ul>
        </div>

        
        <div className="mt-20 text-center max-w-2xl">
          <h2 className="text-4xl font-bold mb-4 sm:text-3xl">Get in Touch</h2>
          <p className="text-lg leading-relaxed mb-6 sm:text-base">
            Interested in learning more about our work or collaborating with us? Contact us today!
          </p>
          <a href="#contact" className="bg-white text-gray-900 px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition duration-300 sm:px-4 sm:py-2">
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

