import React from "react";

export default function ReadHealHomepage() {
  const services = [
    {
      title: "Relationships",
      description: "Heal connections and build meaningful bonds",
      icon: "💕",
    },
    {
      title: "Teens & Adolescents",
      description: "Navigate growth with understanding and care",
      icon: "🌱",
    },
    {
      title: "Marriage",
      description: "Strengthen partnership through shared growth",
      icon: "💑",
    },
    {
      title: "Business & Finance",
      description: "Find clarity in professional challenges",
      icon: "💼",
    },
    {
      title: "Education",
      description: "Transform learning into healing knowledge",
      icon: "🎓",
    },
    {
      title: "Parenting",
      description: "Nurture with wisdom and compassion",
      icon: "🏠",
    },
    {
      title: "Corporate World",
      description: "Balance ambition with inner peace",
      icon: "🏢",
    },
    {
      title: "Retirement",
      description: "Embrace new chapters with grace",
      icon: "🕐",
    },
  ];

  const whyChoose = [
    {
      title: "Private and stigma-free healing",
      description:
        "Your journey is yours alone. Read, reflect, and heal in complete privacy without judgment or pressure.",
    },
    {
      title: "Carefully curated therapy materials",
      description:
        "Every book is selected by professionals to ensure meaningful, evidence-based healing content.",
    },
    {
      title: "Self-guided, flexible reading journey",
      description:
        "Move at your own pace. Access your library anytime, anywhere, on any device.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-[#0A1A2F] text-white py-4 sticky top-0 z-50 shadow-lg">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <svg
              className="w-8 h-8 text-[#C9A24D]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
              />
            </svg>
            <span className="text-2xl font-bold">
              Read & <span className="text-[#C9A24D]">Heal</span>
            </span>
          </div>
          <nav className="hidden md:flex gap-8">
            <a href="#home" className="hover:text-[#C9A24D] transition-colors">
              Home
            </a>
            <a href="#about" className="hover:text-[#C9A24D] transition-colors">
              About
            </a>
            <a
              href="#services"
              className="hover:text-[#C9A24D] transition-colors"
            >
              Services
            </a>
            <a
              href="#library"
              className="hover:text-[#C9A24D] transition-colors"
            >
              Library
            </a>
            <a
              href="#contact"
              className="hover:text-[#C9A24D] transition-colors"
            >
              Contact
            </a>
            <a
              href="#payment"
              className="hover:text-[#C9A24D] transition-colors"
            >
              Payment
            </a>
          </nav>
          <button className="md:hidden text-[#C9A24D]">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0A1A2F] to-[#1a2f4f] text-white py-24 md:py-32">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Read & <span className="text-[#C9A24D]">Heal</span>
          </h1>
          <p className="text-2xl md:text-3xl text-[#C9A24D] mb-6 font-light italic">
            "Reading is a therapy for the mind and medicine for the soul."
          </p>
          <p className="text-lg md:text-xl text-[#E5E7EB] max-w-3xl mx-auto mb-12 leading-relaxed">
            A private, self-paced digital library offering therapeutic books for
            emotional healing, personal growth, and mental well-being.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-[#C9A24D] text-[#0A1A2F] px-8 py-4 rounded-lg font-semibold hover:bg-[#d4af5f] transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Explore Healing Library
            </button>
            <button className="border-2 border-[#C9A24D] text-[#C9A24D] px-8 py-4 rounded-lg font-semibold hover:bg-[#C9A24D] hover:text-[#0A1A2F] transition-all">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <div className="w-16 h-1 bg-[#C9A24D] mx-auto mb-8"></div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0A1A2F] mb-8">
            A Library Therapy Room
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Step into a safe, judgment-free space designed for your emotional
            well-being. Read & Heal offers a curated sanctuary where healing
            happens through the transformative power of reading. Access your
            personal library therapy room anytime, anywhere—on your schedule, at
            your pace. There are no appointments, no waiting rooms, just you and
            the gentle guidance of carefully selected therapeutic literature.
            Your privacy is sacred, your journey is honored, and your healing
            begins the moment you choose to open a book.
          </p>
        </div>
      </section>

      {/* Services Preview */}
      <section id="services" className="py-20 bg-[#0A1A2F]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="w-16 h-1 bg-[#C9A24D] mx-auto mb-8"></div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Healing for Every Journey
            </h2>
            <p className="text-[#E5E7EB] text-lg max-w-2xl mx-auto">
              Explore our specialized collections, each thoughtfully designed to
              support you through life's challenges.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-[#1a2f4f] border border-[#C9A24D]/20 rounded-lg p-6 hover:border-[#C9A24D] transition-all hover:shadow-xl hover:shadow-[#C9A24D]/10 transform hover:-translate-y-2 cursor-pointer"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-[#E5E7EB] text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Read & Heal */}
      <section className="py-20 bg-gradient-to-br from-white to-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="w-16 h-1 bg-[#C9A24D] mx-auto mb-8"></div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0A1A2F] mb-4">
              When the mind rests, the soul heals
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {whyChoose.map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-[#C9A24D] rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-[#0A1A2F] font-bold text-xl">
                    {index + 1}
                  </span>
                </div>
                <h3 className="text-2xl font-semibold text-[#0A1A2F] mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0A1A2F] text-white py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
            <div className="text-center md:text-left">
              <div className="flex items-center gap-2 justify-center md:justify-start mb-2">
                <svg
                  className="w-8 h-8 text-[#C9A24D]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
                <span className="text-2xl font-bold">
                  Read & <span className="text-[#C9A24D]">Heal</span>
                </span>
              </div>
              <p className="text-[#E5E7EB] text-sm italic">
                Therapy for the mind, medicine for the soul
              </p>
            </div>

            <nav className="flex flex-wrap justify-center gap-6">
              <a
                href="#home"
                className="hover:text-[#C9A24D] transition-colors"
              >
                Home
              </a>
              <a
                href="#about"
                className="hover:text-[#C9A24D] transition-colors"
              >
                About
              </a>
              <a
                href="#services"
                className="hover:text-[#C9A24D] transition-colors"
              >
                Services
              </a>
              <a
                href="#contact"
                className="hover:text-[#C9A24D] transition-colors"
              >
                Contact
              </a>
              <a
                href="#payment"
                className="hover:text-[#C9A24D] transition-colors"
              >
                Payment
              </a>
            </nav>

            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 border border-[#C9A24D] rounded-full flex items-center justify-center hover:bg-[#C9A24D] hover:text-[#0A1A2F] transition-all"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 border border-[#C9A24D] rounded-full flex items-center justify-center hover:bg-[#C9A24D] hover:text-[#0A1A2F] transition-all"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 border border-[#C9A24D] rounded-full flex items-center justify-center hover:bg-[#C9A24D] hover:text-[#0A1A2F] transition-all"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 border border-[#C9A24D] rounded-full flex items-center justify-center hover:bg-[#C9A24D] hover:text-[#0A1A2F] transition-all"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="border-t border-[#C9A24D]/30 pt-8 text-center text-[#E5E7EB] text-sm">
            <p>
              &copy; {new Date().getFullYear()} Read & Heal. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
