export default function Contact() {
  return (
    <main>
      {/* Contact Section */}
      <section className="bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold mb-6 text-center">Get in Touch</h1>
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-lg font-semibold">Name</label>
            <input
              type="text"
              id="name"
              className="w-full border border-gray-300 rounded-lg p-3 mt-1"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-lg font-semibold">Email</label>
            <input
              type="email"
              id="email"
              className="w-full border border-gray-300 rounded-lg p-3 mt-1"
              placeholder="Your Email"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-lg font-semibold">Message</label>
            <textarea
              id="message"
              rows={5}
              className="w-full border border-gray-300 rounded-lg p-3 mt-1"
              placeholder="Your Message"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-500"
          >
            Send Message
          </button>
        </form>
      </section>
    </main>
  );
}

  