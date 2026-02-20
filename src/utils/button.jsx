function Button({ text, size = "md", bg = "primary-0", textColor = "white" }) {
  const base =
    "font-medium rounded-lg transition duration-200 focus:outline-none cursor-pointer";

  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  return (
    <button
      className={`${base} ${sizes[size]} bg-${bg} text-${textColor} active:scale-95`}>
      {text}
    </button>
  );
}

export default Button;
