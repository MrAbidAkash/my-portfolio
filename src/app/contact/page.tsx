// app/contact/page.tsx
export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 md:px-12 bg-white">
      <h2 className="text-4xl font-bold mb-8 text-center">Contact Me</h2>
      <form className="max-w-3xl mx-auto space-y-6">
        <div>
          <label className="block text-lg font-medium">Name</label>
          <input
            type="text"
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            placeholder="Your name"
          />
        </div>
        <div>
          <label className="block text-lg font-medium">Email</label>
          <input
            type="email"
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            placeholder="you@example.com"
          />
        </div>
        <div>
          <label className="block text-lg font-medium">Message</label>
          <textarea
            rows={5}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            placeholder="Your message..."
          />
        </div>
        <button
          type="submit"
          className="px-6 py-3 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
