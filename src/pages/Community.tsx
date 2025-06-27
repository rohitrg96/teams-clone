import { GraduationCap, Building2, Medal } from 'lucide-react';

export const Community = () => {
  return (
    <div className="flex flex-col md:flex-row h-screen bg-pink-50 rounded-2xl p-6">
      {/* Left Section */}
      <div className="w-full md:w-6/12 lg:w-4/12 flex flex-col justify-center  items-start mb-8 md:mb-0 px-4">
        {/* Heading */}
        <h1 className="text-2xl font-semibold mb-4">Build your community</h1>

        {/* Description */}
        <p className="text-gray-700 mb-6">
          Bring your community together in one place to plan events, stay organised and get more
          done.
        </p>

        {/* Create Your Own Button */}
        <button className="bg-purple-700 text-white px-6 py-2 rounded-lg mb-6 hover:bg-purple-800 transition">
          Create your own
        </button>

        {/* Template Label */}
        <p className="text-gray-600 mb-3 font-medium">Create with a template</p>

        {/* Template Buttons */}
        <div className="flex flex-wrap gap-3">
          <button className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-full shadow hover:shadow-md transition">
            <GraduationCap size={18} className="text-purple-700" />
            <span className="text-sm">School</span>
          </button>

          <button className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-full shadow hover:shadow-md transition">
            <Building2 size={18} className="text-purple-700" />
            <span className="text-sm">Business</span>
          </button>

          <button className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-full shadow hover:shadow-md transition">
            <Medal size={18} className="text-purple-700" />
            <span className="text-sm">Life</span>
          </button>
        </div>
      </div>

      {/* Right Section - Image */}
      <div className="w-full md:w-8/12 flex justify-center items-center">
        <img
          src="/src/assets/community1.png"
          alt="Community"
          className="max-w-full h-auto object-contain"
        />
      </div>
    </div>
  );
};
