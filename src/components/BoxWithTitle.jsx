const BoxWithTitle = ({ title, children }) => {
  return (
    <div className="relative border-2 border-gray-400 rounded-xl p-6">
      {/* Title */}
      <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white rounded-xl px-2">
        <h3 className="text-sm md:text-lg font-extrabold">
          {title}
        </h3>
      </div>

      {/* Content */}
      <div className="mt-4">
        {children}
      </div>
    </div>
  );
};

export default BoxWithTitle;
