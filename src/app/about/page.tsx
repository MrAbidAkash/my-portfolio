/* eslint-disable @next/next/no-img-element */
// app/about/page.tsx
export default function About() {
  return (
    <section id="about" className="py-20 px-4 md:px-12 bg-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <img
          src="/images/profile.jpg"
          alt="My photo"
          className="rounded-lg shadow-lg mx-auto md:mx-0 w-64 h-64 object-cover"
        />
        <div>
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-lg leading-relaxed mb-4">
            {/* Insert bio/introduction text that matches the video’s content */}
          </p>
          <p className="text-lg leading-relaxed">
            {/* Additional details on background or skills */}
          </p>
        </div>
      </div>
    </section>
  );
}
