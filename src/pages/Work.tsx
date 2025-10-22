import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Work() {
  const projects = [
    {
      name: "Starial",
      description:
        "Auctri is a web design agency which delivers clean user centered websites which drives business.",
      image:
        "https://images.pexels.com/photos/1476321/pexels-photo-1476321.jpeg?auto=compress&cs=tinysrgb&w=800",
      bgColor: "bg-gray-800",
    },
    {
      name: "Z-pharma",
      description:
        "Auctri is a web design agency which delivers clean user centered websites which drives business.",
      image:
        "https://images.pexels.com/photos/6177638/pexels-photo-6177638.jpeg?auto=compress&cs=tinysrgb&w=800",
      bgColor: "bg-gray-800",
    },
    {
      name: "Blue real estate",
      description:
        "Auctri is a web design agency which delivers clean user centered websites which drives business.",
      image: "https://dream-home-dynamic.onrender.com",
      bgColor: "bg-gray-800",
    },
    {
      name: "Mr. Shwarma",
      description:
        "Auctri is a web design agency which delivers clean user centered websites which drives business.",
      image:
        "https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=800",
      bgColor: "bg-gray-800",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-32 pb-20 px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-7xl font-bold text-gray-900 mb-2">Our work</h1>
        <div className="w-full h-1 bg-gray-900 mb-16"></div>

        <div className="space-y-0 mb-20">
          {projects.map((project, index) => (
            <div key={index}>
              <button className="w-full text-left py-8 hover:bg-gray-100 transition-colors px-4 group">
                <h2 className="text-4xl font-bold text-gray-900 group-hover:text-emerald-600 transition-colors">
                  {project.name}
                </h2>
              </button>

              <div className={`${project.bgColor} p-12 lg:p-16 mb-16`}>
                <div className="flex flex-col lg:flex-row gap-12 items-center">
                  <div className="flex-1 text-white space-y-6">
                    <p className="text-xl leading-relaxed">
                      {project.description}
                    </p>
                    <p className="text-xl leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                  <div className="flex-1">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-96 object-cover rounded-lg"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/contact"
            className="inline-flex bg-gray-900 text-emerald-400 px-12 py-6 rounded-full text-xl font-medium hover:scale-105 transition-transform items-center gap-3 group"
          >
            Lets build your website
            <ArrowUpRight className="group-hover:translate-x-1 group-hover:translate-y-[-4px] transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
}
