import Image from "next/image";

export default function About() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white text-gray-800">
      {/* Hero Section */}
      <section className="relative h-72 md:h-96 w-full overflow-hidden rounded-b-3xl shadow-lg">
        <Image
          src="/images/seafood-hero.jpg" // put a nice seafood image in public/images
          alt="Fresh seafood"
          fill
          style={{ objectFit: "cover" }}
          priority
          className="brightness-75"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold drop-shadow-lg">
            Ocean’s Finest Seafood
          </h1>
          <p className="mt-4 max-w-xl text-lg md:text-xl drop-shadow-md">
            Bringing the freshest catch from sea to your table since 1998.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-semibold mb-6 border-b-4 border-amber-400 inline-block">
          Our Story
        </h2>
        <p className="text-lg leading-relaxed max-w-3xl mx-auto">
          Founded over two decades ago, Ocean’s Finest Seafood started as a small family
          business with a passion for delivering premium quality seafood. Our commitment
          to sustainable fishing and unmatched freshness has earned us a trusted place in
          the hearts of seafood lovers nationwide.
        </p>
      </section>

      {/* Mission */}
      <section className="bg-amber-50 py-12">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
          <p className="text-lg max-w-2xl mx-auto leading-relaxed">
            To provide the highest quality, sustainably sourced seafood, while supporting
            local fishermen and protecting our oceans for generations to come.
          </p>
        </div>
      </section>

      {/* Team */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-semibold mb-8 border-b-4 border-amber-400 inline-block">
          Meet Our Team
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {[
            {
              name: "Captain Joe",
              role: "Founder & Head Fisherman",
              image: "/images/team1.jpg",
              bio: "With 30+ years at sea, Joe’s expertise ensures only the freshest catch arrives daily.",
            },
            {
              name: "Linda Waters",
              role: "Quality Control Manager",
              image: "/images/team2.jpg",
              bio: "Linda oversees every batch with meticulous care to maintain our high standards.",
            },
            {
              name: "Sam Reed",
              role: "Sustainability Coordinator",
              image: "/images/team3.jpg",
              bio: "Sam works tirelessly to maintain our commitment to eco-friendly fishing practices.",
            },
          ].map((member) => (
            <div key={member.name} className="text-center bg-white rounded-lg shadow p-6">
              <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-amber-300">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-amber-600 mb-2">{member.role}</p>
              <p className="text-gray-600 text-sm">{member.bio}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
