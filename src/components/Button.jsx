export default function Button({
  children,
  size = "md",
  className = "",
  ...props
}) {
  const sizes = {
    sm: "px-3 py-1 text-sm",
    md: "px-4 py-2 text-sm",
    lg: "px-6 py-3 text-base",
  };

  return (
    <button
      className={`
        ${sizes[size]} 
        rounded-3xl
        transition 
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
}