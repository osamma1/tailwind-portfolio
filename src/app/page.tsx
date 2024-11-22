export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="text-center bg-gradient-to-r from-blue-600 to-indigo-500 text-white p-12 rounded-lg shadow-lg">
        <h1 className="text-5xl font-extrabold mb-4">Welcome to My Portfolio</h1>
        <p className="text-xl">
          I'm a <span className="font-bold">Web Developer</span> and <span className="font-bold">Cybersecurity Enthusiast</span> who crafts secure and efficient digital solutions.
        </p>
        <a href="/about" className="mt-6 inline-block bg-white text-blue-600 font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-blue-100">
          Learn More About Me
        </a>
      </section>

      {/* Skills Section */}
      <section className="mt-12">
        <h2 className="text-3xl font-bold text-center mb-6">My Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-bold">Frontend Development</h3>
            <p>React, Next.js, Tailwind CSS</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-bold">Backend Development</h3>
            <p>Node.js, Express, MongoDB</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-bold">Cybersecurity</h3>
            <p>Penetration Testing, Network Security</p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="mt-12">
        <h2 className="text-3xl font-bold text-center mb-6">Featured Projects</h2>
        <div className="space-y-6">
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-bold">Dynamic Quiz Game</h3>
            <p>An interactive quiz platform with real-time progress and leaderboard features.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-bold">Dark Web Storage</h3>
            <p>Secure distributed storage solution focused on privacy and attack prevention.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
