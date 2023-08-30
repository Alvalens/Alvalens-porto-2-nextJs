"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faHome,
	faUser,
	faFolderOpen,
	faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { fullpageApi } from "@fullpage/react-fullpage";
const Sidebar = () => {

	const handleMoveToSection = (index) => {
			fullpage_api.moveTo(index);
			fullpage_api.getActiveSection();
	};

  const containIsActive = (index) => {
    if (fullpage_api.getActiveSection().index === index) {
      return "bg-gray-500";
    }
    return "";
  };
	return (
		<div className="fixed z-50 bg-gray-600 h-[50vh] w-14 flex flex-col justify-between items-center p-4 left-0 top-1/4 rounded-e-3xl">
			<ul className="flex flex-col justify-center items-center h-full space-y-16 text-gray-200">
				<li>
					<button onClick={() => handleMoveToSection(1)}>
						<FontAwesomeIcon icon={faHome} className="text-xl" />
					</button>
				</li>
				<li>
					<button  onClick={() => handleMoveToSection(2)}>
						<FontAwesomeIcon icon={faUser} className="text-xl" />
					</button>
				</li>
				<li>
					<button onClick={() => handleMoveToSection(3)}>
						<FontAwesomeIcon
							icon={faFolderOpen}
							className="text-xl"
						/>
					</button>
				</li>
				<li>
					<button  onClick={() => handleMoveToSection(4)}>
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
