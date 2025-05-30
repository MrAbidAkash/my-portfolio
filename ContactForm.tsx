"use client";


const ContactForm = () => {
  return (
    <section className=" w-full flex items-center justify-center bg-gradient-to-br from-[#f0f2ff] to-[#d3d9ff] px-4 py-5 rounded-4xl">
      <div className="w-full max-w-3xl  p-10 rounded-3xl ">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-black">
          Contact with me to{" "}
          <span className="text-black">sizzle your project</span>
        </h2>
        <p className="text-center text-gray-700 mt-4">
          Feel free to contact me if having any questions. I&apos;m available for new
          projects or just for chatting.
        </p>

        <form className="mt-8 space-y-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full px-4 py-3 rounded-xl bg-white/80 text-black outline-none focus:ring-2 focus:ring-indigo-400"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-3 rounded-xl bg-white/80 text-black outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>
          <textarea
            rows={6}
            placeholder="Work Description..."
            className="w-full px-4 py-3 rounded-xl bg-white/80 text-black outline-none focus:ring-2 focus:ring-indigo-400"
          />
          <button
            type="submit"
            className="w-full py-3 bg-black text-white rounded-full hover:bg-gray-900 transition-all"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
