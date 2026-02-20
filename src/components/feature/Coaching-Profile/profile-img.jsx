function ProfileImage({ image }) {
  return (
    <div className="w-28 h-28 lg:w-32 lg:h-32 rounded-full border-4 border-white shadow-md overflow-hidden">
      <img
        className="w-full h-full object-cover"
        src={image}
        alt="profile"
      />
    </div>
  );
}

export default ProfileImage