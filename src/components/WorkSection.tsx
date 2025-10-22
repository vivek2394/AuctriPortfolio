import { useState } from "react";
import { ChevronDown, ExternalLink } from "lucide-react";

interface Project {
  id: string;
  name: string;
  shortDesc: string;
  fullDesc: string;
  technologies: string[];
  image: string;
  link: string;
  category: string;
}

const projects: Project[] = [
  {
    id: "starial",
    name: "Starial",
    shortDesc: "Modern E-commerce Platform",
    fullDesc:
      "Auctri designed and developed a cutting-edge e-commerce platform for Starial, featuring a clean, user-centered interface that drives business growth. The website includes advanced product filtering, seamless checkout experience, and real-time inventory management. Built with modern web technologies to ensure fast loading times and exceptional user experience across all devices.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "AWS"],
    image:
      "https://images.pexels.com/photos/1476321/pexels-photo-1476321.jpeg?auto=compress&cs=tinysrgb&w=800",
    link: "https://www.starial.in/web/",
    category: "E-commerce",
  },
  {
    id: "zpharma",
    name: "Z-pharma",
    shortDesc: "Healthcare & Pharmaceutical Web Design",
    fullDesc:
      "A clean, trustworthy, and professional web design concept for a pharmaceutical brand. Designed to reflect reliability and modern healthcare aesthetics. The UI focuses on accessibility, structured layouts, and smooth information flow to enhance user experience.",
    technologies: ["Figma", "Adobe XD", "Illustrator", "Photoshop"],
    image:
      "https://images.pexels.com/photos/6177638/pexels-photo-6177638.jpeg?auto=compress&cs=tinysrgb&w=800",
    link: "https://www.figma.com/design/TkVtMHhppND4pl2SHqD055/Untitled?node-id=0-1&p=f&t=Bbnpj9UjdmJkfq9a-0",
    category: "Web Design",
  },
  {
    id: "blue-real-estate",
    name: "Blue real estate",
    shortDesc: "Luxury Property Showcase Platform",
    fullDesc:
      "Blue Real Estate received a visually stunning website with 3D virtual tours, CRM-integrated lead capture, WhatsApp-enabled client engagement, and hyper-localized SEO. The platform empowers agents to convert high-value deals in luxury and commercial markets with advanced property search filters, interactive maps, and immersive property galleries.",
    technologies: [
      "Vue.js",
      "Three.js",
      "Firebase",
      "Google Maps API",
      "Tailwind CSS",
    ],
    image:
      "https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg?auto=compress&cs=tinysrgb&w=800",
    link: "https://dream-home-dynamic.onrender.com",
    category: "Real Estate",
  },
  {
    id: "mr-shwarma",
    name: "Mr. Shwarma",
    shortDesc: "Restaurant & Food Ordering UI Design",
    fullDesc:
      "A creative and mouth-watering restaurant web design concept that emphasizes visual storytelling, modern typography, and vibrant color palettes. The UI mockup highlights menu presentation, food photography, and an intuitive ordering flow.",
    technologies: ["Figma", "Adobe XD", "Canva", "Illustrator"],
    image:
      "https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=800",
    link: "https://www.figma.com/design/TkVtMHhppND4pl2SHqD055/Untitled?node-id=0-1&p=f&t=Bbnpj9UjdmJkfq9a-0",
    category: "Web Design",
  },
];

export default function WorkSection() {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  return (
    <section
      id="work"
      className="min-h-screen bg-gray-50 flex items-center px-8 py-20 snap-start"
    >
      <div className="max-w-7xl mx-auto w-full">
        <h2 className="text-7xl font-bold text-gray-900 mb-2 animate-fadeInLeft">
          Our work
        </h2>
        <div
          className="w-full h-1 bg-gray-900 mb-8 animate-fadeInLeft"
          style={{ animationDelay: "0.1s" }}
        ></div>

        <div className="space-y-4 mb-12">
          {projects.map((project, index) => (
            <div
              key={project.id}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              className="border-b border-gray-300 overflow-hidden animate-fadeInUp"
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <div className="w-full text-left py-6 px-6 hover:bg-gray-100 transition-all duration-300 group flex items-center justify-between cursor-pointer">
                <div className="flex-1">
                  <h3 className="text-4xl font-bold text-gray-900 group-hover:text-emerald-600 transition-colors mb-2">
                    {project.name}
                  </h3>
                  <p className="text-lg text-gray-600">{project.shortDesc}</p>
                </div>
                <ChevronDown
                  className={`w-8 h-8 text-gray-600 transition-transform duration-300 ${
                    hoveredProject === project.id ? "rotate-180" : ""
                  }`}
                />
              </div>

              {/* Smooth hover toggle */}
              <div
                className={`overflow-hidden transition-[max-height,opacity,transform] duration-700 ease-in-out ${
                  hoveredProject === project.id
                    ? "max-h-[2000px] opacity-100 translate-y-0"
                    : "max-h-0 opacity-0 -translate-y-6"
                }`}
              >
                <div className="bg-gray-800 p-8 lg:p-12">
                  <div className="grid lg:grid-cols-2 gap-8 items-start">
                    <div className="space-y-6">
                      <div>
                        <span className="inline-block px-4 py-2 bg-emerald-400 text-gray-900 rounded-full text-sm font-semibold mb-4">
                          {project.category}
                        </span>
                        <p className="text-xl text-white leading-relaxed">
                          {project.fullDesc}
                        </p>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-emerald-400 mb-3">
                          {project.category === "Web Design"
                            ? "Design Tools Used:"
                            : "Technologies Used:"}
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, idx) => (
                            <span
                              key={idx}
                              className="px-4 py-2 bg-gray-700 text-white rounded-lg text-sm border border-gray-600 hover:border-emerald-400 transition-colors"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-emerald-400 text-gray-900 px-8 py-4 rounded-full text-lg font-semibold hover:bg-emerald-300 transition-all hover:scale-105 group"
                      >
                        View Project
                        <ExternalLink className="w-5 h-5 group-hover:translate-x-1 group-hover:translate-y-[-2px] transition-transform" />
                      </a>
                    </div>

                    <div className="relative group">
                      <div className="absolute inset-0 bg-emerald-400 rounded-lg blur-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
                      <img
                        src={project.image}
                        alt={project.name}
                        className="relative w-full h-96 object-cover rounded-lg transform group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom "Web Designs" Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-start mt-16">
          <div className="animate-fadeInLeft">
            <h2 className="text-7xl font-bold text-gray-900 mb-8 leading-tight">
              Web
              <br />
              Designs
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed max-w-md">
              Auctri is a web design agency that delivers clean, user-centered
              design concepts that drive engagement and brand value.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6 animate-fadeInRight">
            <div className="col-span-2 overflow-hidden rounded-lg group">
              <img
                src="https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Laptop with colorful display"
                className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="overflow-hidden rounded-lg group">
              <img
                src="https://images.pexels.com/photos/3076899/pexels-photo-3076899.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Green leaves"
                className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="overflow-hidden rounded-lg group">
              <img
                src="https://images.pexels.com/photos/1616403/pexels-photo-1616403.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Colorful building"
                className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
