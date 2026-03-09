function Button({
  text,
  size = "md",
  bg = "primary-0",
  textColor = "white",
  className = "",
  ...props
}) {
  const base = `shrink-0 font-medium rounded-lg transition duration-200 focus:outline-none cursor-pointer whitespace-nowrap ${className}`;

  const sizes = {
    sm: "px-2 py-1 text-xs sm:px-3 sm:py-1.5 sm:text-sm",
    md: "px-3 py-2 text-sm md:px-4 md:py-2 md:text-base",
    lg: "px-4 py-2 text-base md:px-6 md:py-3 md:text-lg",
  };

  return (
    <button
      className={`${base} ${sizes[size]} bg-${bg} text-${textColor} active:scale-95`}
      {...props}
    >
      {text}
    </button>
  );
}

export default Button 