export default function About() {
  return (
    <main>
      {/* About Me Section */}
      <section className="bg-gray-100 p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold mb-4">About Me</h1>
        <p>
          I am a dedicated Web Developer and Cybersecurity student with a passion for crafting secure, scalable, and user-friendly applications. My journey began with curiosity for how the internet works and grew into a full-fledged career in technology.
        </p>
        <p className="mt-4">
          Over the years, I have gained hands-on experience in web development, cybersecurity research, and innovative projects. I thrive on solving complex problems and delivering impactful solutions.
        </p>
      </section>

      {/* Experience Section */}
      <section className="mt-12">
        <h2 className="text-3xl font-bold mb-6">Experience</h2>
        <div className="space-y-6">
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">Web Development Intern at NUEXUS</h3>
            <p>Contributed to building dynamic, responsive web applications and improving UX design.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">Cybersecurity Projects</h3>
            <p>Engaged in penetration testing, secure coding practices, and threat modeling for web applications.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
