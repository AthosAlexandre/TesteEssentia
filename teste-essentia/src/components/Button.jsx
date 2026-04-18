export default function Button({ children, type = 'button', className = '', ...rest }) {
  return (
    <button
      type={type}
      className={`w-full border border-black bg-black px-4 py-2.5 text-center font-nav text-sm font-medium tracking-wide text-white transition-colors duration-300 ease-out hover:bg-white hover:text-black sm:whitespace-nowrap sm:px-2.5 sm:py-2 sm:text-[0.6875rem] sm:leading-tight sm:tracking-tight ${className}`.trim()}
      {...rest}
    >
      {children}
    </button>
  )
}
