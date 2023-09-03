const Button = ({ children, variation, ...props }) => (
	<button
		{...props}
		className={`title mr-3  rounded-2xl px-8 py-2 shadow-md transition duration-300 ease-in-out ${
			variation === "primary"
				? "bg-gray-400 hover:bg-slate-500 text-gray-100 hover:text-white"
				: "transparent border border-gray-400 hover:border-slate-500 text-gray-400 hover:text-gray-300"
		}`}>
		{children}
	</button>
);

export default Button;