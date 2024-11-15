
const ContactSection = () => {
    return (
      <section id="contact" className="bg-blue-800 py-20">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-primary mb-6">Contact Me</h2>
          <p className="text-lg text-gray-600 mb-6">Feel free to reach out to me via the contact form below.</p>
          <form className="max-w-md mx-auto">
            <input type="text" placeholder="Your Name" className="w-full p-3 mb-4 border border-gray-300 rounded-lg"/>
            <input type="email" placeholder="Your Email" className="w-full p-3 mb-4 border border-gray-300 rounded-lg"/>
            <textarea placeholder="Your Message" className="w-full p-3 mb-4 border border-gray-300 rounded-lg"></textarea>
            <button type="submit" className="bg-secondary text-white py-2 px-6 rounded-lg shadow-lg hover:bg-primary transition">
              Send Message
            </button>
          </form>
        </div>
      </section>
    );
  };
  
  export default ContactSection;
  