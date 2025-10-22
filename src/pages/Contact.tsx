import { Instagram, Linkedin, Twitter, ArrowUpRight } from 'lucide-react';

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50 pt-32 pb-20 px-8">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="flex-1">
            <h1 className="text-7xl font-bold text-gray-900 mb-8 leading-tight">Contact us</h1>
            <p className="text-2xl text-gray-700 mb-12 leading-relaxed">
              Drop us your problem and we will come up with an innovative solutions!
            </p>

            <div className="mb-8">
              <p className="text-xl text-gray-600 mb-2">Call us at :</p>
              <p className="text-3xl font-semibold text-gray-900">+91 9876543210</p>
            </div>

            <div className="flex gap-4">
              <a href="#" className="w-14 h-14 bg-gray-900 text-white rounded-lg flex items-center justify-center hover:bg-emerald-400 hover:text-gray-900 transition-colors">
                <Instagram size={28} />
              </a>
              <a href="#" className="w-14 h-14 bg-gray-900 text-white rounded-lg flex items-center justify-center hover:bg-emerald-400 hover:text-gray-900 transition-colors">
                <Linkedin size={28} />
              </a>
              <a href="#" className="w-14 h-14 bg-gray-900 text-white rounded-lg flex items-center justify-center hover:bg-emerald-400 hover:text-gray-900 transition-colors">
                <Twitter size={28} />
              </a>
            </div>
          </div>

          <form className="flex-1 space-y-6">
            <input
              type="text"
              placeholder="Name"
              className="w-full px-6 py-5 border-2 border-gray-900 rounded-2xl focus:outline-none focus:border-emerald-400 transition-colors text-lg"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full px-6 py-5 border-2 border-gray-900 rounded-2xl focus:outline-none focus:border-emerald-400 transition-colors text-lg"
            />
            <input
              type="tel"
              placeholder="Phone no."
              className="w-full px-6 py-5 border-2 border-gray-900 rounded-2xl focus:outline-none focus:border-emerald-400 transition-colors text-lg"
            />
            <textarea
              placeholder="Message"
              rows={6}
              className="w-full px-6 py-5 border-2 border-gray-900 rounded-2xl focus:outline-none focus:border-emerald-400 transition-colors resize-none text-lg"
            ></textarea>
            <button
              type="submit"
              className="bg-gray-900 text-emerald-400 px-12 py-5 rounded-full text-xl font-medium hover:scale-105 transition-transform flex items-center gap-3 group"
            >
              Send
              <ArrowUpRight className="group-hover:translate-x-1 group-hover:translate-y-[-4px] transition-transform" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
