"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faHome,
	faUser,
	faFolderOpen,
	faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { useFullPage } from "@alvalens/react-fullpage-snap";

const Sidebar = () => {
	const { moveTo, activeIndex } = useFullPage();

	const handleMoveToSection = (index) => {
		moveTo(index);
	};

	const containIsActive = (index) => {
		if (activeIndex === index) {
			return "bg-gray-500";
		}
		return "";
	};
	return (
		<div className="hidden md:flex fixed z-40 bg-gray-700 h-[50vh] w-14  flex-col justify-between items-center p-4 left-0 top-1/4 rounded-e-3xl">
			<ul
				id="sidebar"
				className="flex flex-col justify-evenly items-center h-full  text-gray-50">
				<li data-menuanchor="home" className="active">
					<button aria-label="Go to Home section" onClick={() => handleMoveToSection(0)}>
						<FontAwesomeIcon icon={faHome} className="text-xl" />
					</button>
				</li>
				<li data-menuanchor="about">
					<button aria-label="Go to About section" onClick={() => handleMoveToSection(1)}>
						<FontAwesomeIcon icon={faUser} className="text-xl" />
					</button>
				</li>
				<li data-menuanchor="projects">
					<button aria-label="Go to Projects section" onClick={() => handleMoveToSection(2)}>
						<FontAwesomeIcon
							icon={faFolderOpen}
							className="text-xl"
						/>
					</button>
				</li>
				<li data-menuanchor="contact">
					<button aria-label="Go to Contact section" onClick={() => handleMoveToSection(3)}>
						<FontAwesomeIcon
							icon={faEnvelope}
							className="text-xl"
						/>
					</button>
				</li>
			</ul>
		</div>
	);
};

export default Sidebar;
