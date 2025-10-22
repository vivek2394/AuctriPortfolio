import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 pt-32 pb-20 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          <div className="border-4 border-gray-900 p-12 rounded-3xl bg-white">
            <h1 className="text-6xl font-bold text-gray-900 mb-8">Auctri</h1>
            <p className="text-lg text-gray-700 leading-relaxed">
              Welcome to Auctri, a premier web design and development agency delivering bespoke, world-class digital
              solutions for elite organizations in hospitals & pharmaceuticals, real estate, and education. With a global
              presence and a focus on international markets such as the USA, UK, UAE, and Australia, Auctri crafts high-end
              websites that redefine excellence, drive engagement, and deliver measurable results for industry leaders.
              <br /><br />
              Our mission is to elevate your brand's digital footprint, ensuring you dominate your sector in an increasingly
              competitive global landscape.
            </p>
          </div>

          <div className="bg-gray-900 text-white p-12 rounded-3xl">
            <p className="text-lg leading-relaxed mb-6">
              Our mission is to elevate your brand's digital footprint, ensuring you dominate your sector in an increasingly
              competitive global landscape.
            </p>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/5926382/pexels-photo-5926382.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Mobile device mockup"
                className="w-64 mx-auto"
              />
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          <div className="bg-gray-900 text-white p-12 rounded-3xl">
            <h2 className="text-4xl font-bold mb-8">At Auctri, we specialize in creating sophisticated, custom-built websites tailored to the unique needs of our niches:</h2>

            <div className="space-y-6 text-lg leading-relaxed">
              <div>
                <h3 className="font-bold mb-2">Hospitals & Pharmaceuticals:</h3>
                <p className="text-gray-300">
                  We design secure, HIPAA-compliant platforms with patient portals, appointment booking systems, telemedicine integration, and AI-driven analytics to enhance trust and streamline healthcare delivery.
                </p>
              </div>

              <div>
                <h3 className="font-bold mb-2">Real Estate Agents:</h3>
                <p className="text-gray-300">
                  We deliver visually stunning websites with 3D virtual tours, CRM-integrated lead capture, WhatsApp-enabled client engagement, and hyper-localized SEO, empowering agents to convert high-value deals in luxury and commercial markets.
                </p>
              </div>

              <div>
                <h3 className="font-bold mb-2">Education:</h3>
                <p className="text-gray-300">
                  We create dynamic, user-centric websites for schools, universities, and ed-tech platforms, featuring e-learning integrations, multilingual support, and intuitive navigation to attract students and educators worldwide.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-12 rounded-3xl border-4 border-gray-900">
            <img
              src="https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Modern workspace"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          <div className="bg-gray-900 text-white p-12 rounded-3xl">
            <h2 className="text-4xl font-bold mb-8">Why Auctri?</h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              We don't just build websites; we architect digital legacies that set industry standards.
              <br /><br />
              Our premium services command top-tier investment, reflecting the unparalleled quality, innovation, and bespoke attention we provide. Each project is a masterpiece, leveraging cutting-edge technologies like AI, cloud hosting, and advanced analytics to ensure your brand stands out.
              <br /><br />
              We work with a select number of elite clients, guaranteeing personalized solutions that align with your vision—whether you're a hospital in Dubai, a real estate agency in London, or a university in Sydney.
            </p>
          </div>

          <div className="relative">
            <img
              src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Modern architecture"
              className="w-full h-full object-cover rounded-3xl"
            />
          </div>
        </div>

        <div className="bg-white border-4 border-gray-900 p-12 rounded-3xl mb-16">
          <p className="text-xl text-gray-700 leading-relaxed">
            Our team of seasoned designers, developers, and industry specialists brings deep expertise in our chosen niches. We've seen how a strategic online presence can transform missed opportunities—like thousands of daily searches for "luxury properties," "top hospitals," or "global MBA programs"—into direct engagements and high-value outcomes.
            <br /><br />
            From New York to Singapore, Auctri has empowered clients to outshine competitors and achieve global recognition.
          </p>
        </div>

        <div className="bg-gray-900 text-white p-12 rounded-3xl text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">
            Auctri is your partner in crafting a digital presence that commands attention, builds trust, and drives success. Let's redefine your industry's future—one click, one connection, one triumph at a time.
          </h2>
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
