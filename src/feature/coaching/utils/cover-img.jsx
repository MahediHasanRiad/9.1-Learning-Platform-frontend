function CoverImage({ image }) {
  return (
    <div className="w-full h-40 lg:h-60 overflow-hidden rounded-2xl">
      <img
        className="w-full h-full object-cover"
        src={image}
        alt="cover"
      />
    </div>
  );
}

export default CoverImage