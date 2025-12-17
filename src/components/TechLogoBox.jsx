const TechLogoBox = ({ image, name, visible, bold }) => {
  return (
    <div
      className={`flex flex-col items-center justify-center
        transition-all duration-100 ease-out [@media(hover:hover)]:hover:bg-black/30 rounded-lg p-4
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}`}
    >
      <div className="w-16 h-16 lg:w-20 lg:h-20">
        <img
          src={image}
          alt={name}
          loading="lazy"
          className="w-full h-full object-contain"
        />
      </div>

      <p className={`mt-2 text-xs lg:text-sm text-center ${bold ? "font-bold" : ""}`}>{name}</p>
    </div>
  );
};

export default TechLogoBox;
