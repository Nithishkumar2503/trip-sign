const ContactForm = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4 py-12">
      <div className="max-w-3xl w-full">
        <div className="text-center mb-10">
          <p className="text-sm tracking-widest uppercase text-gray-500">Contact With Us</p>
          <div className="w-10 h-1 bg-red-500 mx-auto my-2 rounded-full"></div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Feel Free to Get in Touch with us
          </h2>
        </div>

        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-4 py-3 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full px-4 py-3 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Phone Number"
              className="w-full px-4 py-3 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
            />
            <input
              type="text"
              placeholder="Subject"
              className="w-full px-4 py-3 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
            />
          </div>

          <textarea
            placeholder="Write a Message"
            className="w-full px-4 py-3 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
          ></textarea>

          <div className="text-center">
            <button
              type="submit"
              className="bg-red-500 hover:bg-red-600 text-white font-medium py-3 px-8 rounded-md transition duration-300"
            >
              Send a Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
