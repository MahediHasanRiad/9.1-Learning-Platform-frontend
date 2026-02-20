function Card({ image, name, subjects, availableTime, rating }) {
  return (
    <div className="max-w-xs bg-background-0 border p-2 rounded-md overflow-hidden shadow:md hover:shadow-sm transition-shadow duration-300">
      <img src={image} alt={name} className="w-full h-40 object-cover" />
      <div className="p-4">
        <h3 className="font-heading text-sm text-text-0 mb-2 hover:text-secondary-0">
          <b>Name: </b>{name}
        </h3>
        <p className="text-sm text-textColor mb-2">
          <b>Subjects:</b> {subjects}
        </p>
        <p className="text-sm text-textColor">
          <b>Available-Time:</b> {availableTime}
        </p>
        <p className="text-sm text-textColor">
          <b>Rating:</b> {rating}
        </p>
      </div>
    </div>
  );
}

export default Card;
