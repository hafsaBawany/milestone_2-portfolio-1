
import Image from 'next/image';

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-semibold text-primary mb-6">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <Image src="/assets/project-1.jpg" alt="Project 1" width={500} height={300} className="w-full h-64 object-cover"/>
            <div className="p-4">
              <h3 className="text-xl font-semibold text-primary">Project 1</h3>
              <p className="text-gray-600">A project that demonstrates my skills in front-end development.</p>
            </div>
          </div>
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <Image src="/assets/project-2.jpg" alt="Project 2" width={500} height={300} className="w-full h-64 object-cover"/>
            <div className="p-4">
              <h3 className="text-xl font-semibold text-primary">Project 2</h3>
              <p className="text-gray-600">A full-stack application I built using React, Node.js, and MongoDB.</p>
            </div>
          </div>
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <Image src="/assets/project-3.webp" alt="Project 3" width={500} height={300} className="w-full h-64 object-cover"/>
            <div className="p-4">
              <h3 className="text-xl font-semibold text-primary">Project 3</h3>
              <p className="text-gray-600">A mobile-friendly portfolio website to showcase my work.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
