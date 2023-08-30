"use client";
import { useRef, useState } from "react";

const Navbar = () => {
	const navRef = useRef(null);
	const [isNavOpen, setIsNavOpen] = useState(false);

	const toggleNav = () => {
		setIsNavOpen(!isNavOpen);
	};

	return (
		<>
			<nav
				ref={navRef}
				className={`navbar px-5 md:px-24 w-screen fixed inset-0 backdrop-blur-sm opacity-50 flex flex-row justify-between items-center h-16 z-50 `}>
				<div className="">
					<h1 className="text-2xl">Alvalens</h1>
				</div>
				{/* toggler */}
				<div className="flex flex-row items-center">
					<button
						className="burger button flex flex-col justify-center items-center space-y-2"
						onClick={toggleNav}>
						<div
							className={`w-8 h-1 bg-black rounded-full 
							}`}></div>
						<div
							className={`w-8 h-1 bg-black rounded-full`}></div>
						<div
							className={`w-8 h-1 bg-black rounded-full`}></div>
					</button>
				</div>
			</nav>
			{/* items */}
			<NavItems
				isNavOpen={isNavOpen}
				navRef={navRef}
				setIsNavOpen={setIsNavOpen}
			/>
		</>
	);
};
export default Navbar;

const NavItems = ({ isNavOpen, navRef, setIsNavOpen }) => {
	const closeNav = () => {
		navRef.current.classList.remove("bg-gray-700");
		setIsNavOpen(false);
	};

	return (
		<div
			className={`fixed z-50 w-full h-screen flex m-auto items-center justify-center backdrop-blur-sm ${
				isNavOpen ? "" : "opacity-0 pointer-events-none"
			}`}>
			<div className="relative backdrop-blur-sm opacity-95 m-auto flex flex-col items-center space-x-8 min-h-[80vh] bg-gray-700 min-w-[90vw]  rounded-3xl">
				{/* close buton */}
				<div className="absolute top-0 right-0 m-4">
					<button className=" button" onClick={closeNav}>
						<div className="w-8 h-1 bg-white rounded-full rotate-45 transform translate-x-[2px] translate-y-1 "></div>
						<div className="w-8 h-1 bg-white rounded-full -rotate-45 transform  translate-x-[2px]"></div>
					</button>
				</div>
				<div className="flex flex-col items-center space-y-8 m-auto">
					{/* title */}
					<h1 className="text-6xl font-bold text-white">Menu</h1>
					<a href="#home" className="text-2xl font-bold text-white">
						<h2>Home</h2>
					</a>
					<a href="#about" className="text-2xl font-bold text-white">
						<h2>About</h2>
					</a>
					<a
						href="#project"
						className="text-2xl font-bold text-white">
						<h2>Projects</h2>
					</a>
					<a
						href="#contact"
						className="text-2xl font-bold text-white">
						<h2>Contact</h2>
					</a>
				</div>
			</div>
		</div>
	);
};
