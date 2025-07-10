export const PhotosView = () => {
  const images = ['images/1.jpg', 'images/RohitProfile.jpg'];

  return (
    <div className="flex flex-col flex-1 p-4 sm:p-8 md:p-10 overflow-y-auto w-full max-w-3xl mx-auto">
      <h2 className="text-sm font-bold text-gray-500 mb-4">Last Month</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
        {images.map((src, index) => (
          <div
            key={index}
            className="w-full aspect-square overflow-hidden  shadow hover:scale-105 transition-transform"
          >
            <img src={src} alt={`Photo ${index + 1}`} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
};
