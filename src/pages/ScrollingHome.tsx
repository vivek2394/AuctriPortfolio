import { ArrowUpRight, Instagram, Linkedin, Twitter } from "lucide-react";
import ScrollHeader from "../components/ScrollHeader";
import { CodeIcon, DesignIcon, SEOIcon } from "../components/EnhancedIcons";
import WorkSection from "../components/WorkSection";
import TextPressure from "../components/TextPressure";
import { motion } from "framer-motion";

export default function ScrollingHome() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="scroll-smooth">
      <ScrollHeader />

      {/* Home Section */}
      <section
        id="home"
        className="min-h-screen bg-gray-50 flex flex-col justify-center items-center px-4 sm:px-6 md:px-8 snap-start"
      >
        <div className="text-center">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-gray-900 leading-snug">
            <TextPressure
              text={`Web\nDesign and\nDevelopment`}
              className="text-center"
            />
            <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-normal mt-3 sm:mt-4 animate-slideInRight">
              Agency
            </span>
          </h1>
        </div>

        <button
          onClick={scrollToContact}
          className="mt-6 sm:mt-8 bg-gray-900 text-emerald-400 px-8 sm:px-10 md:px-12 py-4 sm:py-5 md:py-6 rounded-full text-lg sm:text-xl font-medium hover:scale-105 transition-transform flex items-center gap-3 group animate-fadeInUp"
          style={{ animationDelay: "0.3s" }}
        >
          Lets build your website
          <ArrowUpRight className="group-hover:translate-x-1 group-hover:translate-y-[-4px] transition-transform" />
        </button>
      </section>

      {/* Services Section */}
       <section className="min-h-screen bg-white flex items-start px-8 pt-32 snap-start relative">
        <div className="max-w-7xl mx-auto w-full relative">
          <div className="flex flex-col lg:flex-row items-start justify-between gap-20 relative">
            {/* Icons Column */}
            <div className="flex flex-col w-full lg:w-auto animate-fadeInLeft relative">
              {/* 1st Icon - Left, Clockwise */}
              <div className="flex justify-start items-center gap-2 group mt-0">
                <div className="icon-circle-emerald animate-rotate-cw">
                  <div className="icon-wrapper-emerald">
                    <CodeIcon />
                  </div>
                </div>
                <div className="icon-label-inline">Web Development</div>
              </div>

              {/* 2nd Icon - Right, Counter Clockwise */}
              <div className="flex justify-end items-center gap-2 group mt-4">
                <div className="icon-label-inline">Web Design</div>
                <div className="icon-circle-emerald animate-rotate-ccw">
                  <div className="icon-wrapper-emerald">
                    <DesignIcon />
                  </div>
                </div>
              </div>

              {/* 3rd Icon - Left, Clockwise */}
              <div className="flex justify-start items-center gap-2 group mt-4">
                <div className="icon-circle-emerald animate-rotate-cw">
                  <div className="icon-wrapper-emerald">
                    <SEOIcon />
                  </div>
                </div>
                <div className="icon-label-inline">SEO</div>
              </div>
            </div>

            {/* What We Deliver Section */}
            <div className="flex-1 max-w-xl animate-fadeInRight mt-16 lg:mt-20">
              <h2 className="text-6xl md:text-7xl font-bold text-gray-900 leading-tight">
                <span className="block">What we</span>

                <span className="block mt-2">Deliver</span>
              </h2>
              <br />
              <br />
              <p className="text-lg md:text-xl text-gray-900 mt-6 mb-8 leading-relaxed">
                Our mission is to give businesses a strong online presence. We
                focus on quality and client satisfaction to ensure every project
                is successful.
              </p>

              <br />
              <br />
              <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
                <div
                  className="animate-fadeInUp"
                  style={{ animationDelay: "0.2s" }}
                >
                  <p className="text-gray-900 mb-2 text-base md:text-lg">
                    Satisfaction rate
                  </p>
                  <p className="text-5xl md:text-7xl font-bold text-emerald-400">
                    100%
                  </p>
                </div>
                <div
                  className="animate-fadeInUp mt-6 lg:mt-0"
                  style={{ animationDelay: "0.4s" }}
                >
                  <p className="text-gray-900 mb-2 text-base md:text-lg">
                    Clients
                  </p>
                  <p className="text-5xl md:text-7xl font-bold text-emerald-400">
                    04
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work Section */}
      <WorkSection />

      {/* About Section */}
      <section
        id="about"
        className="min-h-screen bg-white flex flex-col px-4 sm:px-6 md:px-8 py-12 sm:py-16 lg:py-20 snap-start"
      >
        <div className="max-w-7xl mx-auto w-full">
          <div className="mb-12 sm:mb-16 animate-fadeInLeft">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
              About Us
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="border-4 border-gray-900 p-8 sm:p-12 rounded-3xl bg-gray-50 cursor-pointer group animate-fadeInLeft"
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 sm:mb-8 group-hover:text-emerald-400 transition-colors duration-300">
                Auctri
              </h1>
              <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                Welcome to Auctri, a premier web design and development agency
                delivering bespoke, world-class digital solutions for elite
                organizations in hospitals & pharmaceuticals, real estate, and
                education. With a global presence and a focus on international
                markets such as the USA, UK, UAE, and Australia, Auctri crafts
                high-end websites that redefine excellence, drive engagement,
                and deliver measurable results for industry leaders.
                <br />
                <br />
                Our mission is to elevate your brand's digital footprint,
                ensuring you dominate your sector in an increasingly competitive
                global landscape.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="bg-gray-900 text-white p-8 sm:p-12 rounded-3xl cursor-pointer group animate-fadeInRight"
            >
              <p className="text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-6 group-hover:text-emerald-400 transition-colors duration-300">
                Our mission is to elevate your brand's digital footprint,
                ensuring you dominate your sector in an increasingly competitive
                global landscape.
              </p>
              <p className="text-sm sm:text-base md:text-lg leading-relaxed group-hover:text-emerald-400 transition-colors duration-300">
                At Auctri, we specialize in creating sophisticated, custom-built
                websites tailored to the unique needs of our niches in hospitals
                & pharmaceuticals, real estate, and education. We deliver
                visually stunning websites with advanced features, helping our
                clients achieve global recognition.
              </p>
            </motion.div>
          </div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="bg-gray-900 text-white p-8 sm:p-12 rounded-3xl text-center cursor-pointer mt-8 sm:mt-12 animate-fadeInUp"
            style={{ animationDelay: "0.2s" }}
          >
            <p className="text-lg sm:text-xl md:text-2xl font-semibold group-hover:text-emerald-400 transition-colors duration-300">
              Auctri is your partner in crafting a digital presence that
              commands attention, builds trust, and drives success. Let's
              redefine your industry's future—one click, one connection, one
              triumph at a time.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="min-h-screen bg-gray-50 flex flex-col lg:flex-row items-start px-4 sm:px-6 md:px-8 py-12 sm:py-16 lg:py-20 snap-start gap-12 lg:gap-20"
      >
        <div className="flex-1 animate-fadeInLeft">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 sm:mb-8 leading-tight">
            Contact us
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-8 sm:mb-12 leading-relaxed">
            Drop us your problem and we will come up with an innovative solutions!
          </p>

          <div className="mb-6 sm:mb-8">
            <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-1">Call us at :</p>
            <p className="text-2xl sm:text-3xl md:text-3xl font-semibold text-gray-900">
              +91 7855010480
            </p>
          </div>

          <div className="flex gap-4">
            <a
              href="https://www.instagram.com/auctri/?utm_source=ig_web_button_share_sheet"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 sm:w-14 sm:h-14 bg-gray-900 text-white rounded-lg flex items-center justify-center hover:bg-emerald-400 hover:text-gray-900 transition-all hover:scale-110"
            >
              <Instagram size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/auctri-studio-420b2a386/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 sm:w-14 sm:h-14 bg-gray-900 text-white rounded-lg flex items-center justify-center hover:bg-emerald-400 hover:text-gray-900 transition-all hover:scale-110"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://x.com/auctri?t=zW6cXf4tYPpEdbsoUlu1Rg&s=09"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 sm:w-14 sm:h-14 bg-gray-900 text-white rounded-lg flex items-center justify-center hover:bg-emerald-400 hover:text-gray-900 transition-all hover:scale-110"
            >
              <Twitter size={24} />
            </a>
          </div>
        </div>

        <form className="flex-1 space-y-4 sm:space-y-6 animate-fadeInRight w-full">
          <input
            type="text"
            placeholder="Name"
            className="w-full px-4 sm:px-6 py-3 sm:py-5 border-2 border-gray-900 rounded-2xl focus:outline-none focus:border-emerald-400 transition-all text-base sm:text-lg hover:shadow-lg"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 sm:px-6 py-3 sm:py-5 border-2 border-gray-900 rounded-2xl focus:outline-none focus:border-emerald-400 transition-all text-base sm:text-lg hover:shadow-lg"
          />
          <input
            type="tel"
            placeholder="Phone no."
            className="w-full px-4 sm:px-6 py-3 sm:py-5 border-2 border-gray-900 rounded-2xl focus:outline-none focus:border-emerald-400 transition-all text-base sm:text-lg hover:shadow-lg"
          />
          <textarea
            placeholder="Message"
            rows={6}
            className="w-full px-4 sm:px-6 py-3 sm:py-5 border-2 border-gray-900 rounded-2xl focus:outline-none focus:border-emerald-400 transition-all resize-none text-base sm:text-lg hover:shadow-lg"
          ></textarea>
          <button
            type="submit"
            className="bg-gray-900 text-emerald-400 px-8 sm:px-12 py-4 sm:py-5 rounded-full text-lg sm:text-xl font-medium hover:scale-105 transition-transform flex items-center gap-3 group"
          >
            Send
            <ArrowUpRight className="group-hover:translate-x-1 group-hover:translate-y-[-4px] transition-transform" />
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 md:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-8 md:gap-12">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center">
                <span className="text-emerald-400 text-2xl font-bold">a</span>
                <span className="text-emerald-400 text-lg">*</span>
              </div>
              <span className="text-xl font-semibold">Auctri Studio</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-md">
              crafting a digital presence that commands attention, builds trust,
              and drives success. Let's redefine your industry's future—one click,
              one connection, one triumph at a time.
            </p>
            <div className="flex gap-4 mt-6">
              <a
                href="https://www.instagram.com/auctri/?utm_source=ig_web_button_share_sheet"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white text-gray-900 rounded flex items-center justify-center hover:bg-emerald-400 transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/auctri-studio-420b2a386/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white text-gray-900 rounded flex items-center justify-center hover:bg-emerald-400 transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://x.com/auctri?t=zW6cXf4tYPpEdbsoUlu1Rg&s=09"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white text-gray-900 rounded flex items-center justify-center hover:bg-emerald-400 transition-colors"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Sitemap</h3>
            <ul className="space-y-2 text-gray-400">
              {["home", "work", "about", "contact"].map((section) => (
                <li key={section}>
                  <button
                    onClick={() =>
                      document
                        .getElementById(section)
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                    className="hover:text-emerald-400 transition-colors"
                  >
                    {section === "about" ? "About us" : section.charAt(0).toUpperCase() + section.slice(1)}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 mt-8 flex justify-center">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2 text-sm text-gray-400 hover:text-emerald-400 transition-colors group"
          >
            <span>Back to top</span>
            <ArrowUpRight
              size={16}
              className="group-hover:translate-y-[-4px] transition-transform"
            />
          </button>
        </div>
      </footer>
    </div>
  );
}
