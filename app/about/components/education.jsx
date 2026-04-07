import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faMedal,
	faGraduationCap,
	faTrophy,
	faAward,
	faChevronDown,
	faChevronUp,
} from "@fortawesome/free-solid-svg-icons";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Me4 from "@/public/image/me4.jpeg";
import Me5 from "@/public/image/me5.jpg";
import Me6 from "@/public/image/me6.jpg";

function Wrapper({ children }) {
	return (
		<div className="mx-auto container gap-10 p-10 grid grid-cols-1 my-10">
			<motion.div
				className="flex justify-center items-start flex-col mb-5"
				initial={{
					opacity: 0,
					y: 50,
				}}
				whileInView={{
					opacity: 1,
					y: 0,
				}}
				transition={{
					delay: 0.3,
					duration: 0.8,
					type: "spring",
					stiffness: 100,
				}}>
				{children}
			</motion.div>
		</div>
	);
}

export default function Education() {
	const [isExpanded, setIsExpanded] = useState(false);

	// 
	const achievementsByYear = {
  Certifications: [
    {
      icon: faAward,
      title: "SolidWorks Associate Certification",
      subtitle: "Dassault Systèmes",
      date: "Aug 2018",
      color: "from-gray-500 to-gray-700",
    },
    {
      icon: faAward,
      title: "Ready Engineer Certification",
      subtitle: "Tata Technologies",
      date: "",
      color: "from-gray-500 to-gray-700",
    },
    {
      icon: faGraduationCap,
      title: "NPTEL Certifications",
      subtitle:
        "Mechatronics, Dynamic Systems, FEA, Manufacturing, Product Design",
      date: "",
      color: "from-gray-500 to-gray-700",
    },
    {
      icon: faAward,
      title: "Workshops",
      subtitle:
        "MATLAB & Simulink, Machine Learning, ANSYS, Computational Modelling",
      date: "",
      color: "from-gray-500 to-gray-700",
    },
    {
      icon: faTrophy,
      title: "IPTSE National Exam Rank",
      subtitle: "Rank 290 (India), Rank 71 (State)",
      date: "2018-19",
      color: "from-gray-500 to-gray-700",
    },
  ],
};

	// Flatten all achievements into a single array for easier limiting
	const allAchievements = Object.entries(achievementsByYear)
		.sort(([a], [b]) => parseInt(b) - parseInt(a))
		.flatMap(([year, achievements]) =>
			achievements.map((achievement) => ({ ...achievement, year }))
		);

	const visibleAchievements = isExpanded
		? allAchievements
		: allAchievements.slice(0, 6);
	const hasMoreAchievements = allAchievements.length > 6;

	return (
		<Wrapper>
			<section className="grid gap-8 md:gap-12">
				{" "}
				{/* Header */}
				<motion.div
					className="text-center space-y-2"
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}>
					<h1 className="text-3xl md:text-4xl font-bold tracking-tighter">
						Education
					</h1>
					<p className="text-muted-foreground max-w-[800px] mx-auto">
						Get to know more about my educational background.
					</p>
				</motion.div>
				{/* Main Content */}
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
					{/* Education Section - Left */}
					<motion.div
						className="px-5"
						initial={{ opacity: 0, x: -50 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8, delay: 0.2 }}>
						{/* <div className="font-medium text-lg mb-4">
							2022 - Present
						</div> */}
						<div className="mt-6">
							<h2 className="font-semibold text-xl">
								Hamburg University of Technology (TUHH)
							</h2>
							<h3 className="text-md font-normal mb-2">
								M.Sc. Mechatronics | Control Systems & Robotics
							</h3>
							<div className="text-sm text-gray-600">
								2022 – 2026
							</div>
							<div className="flex flex-wrap gap-2 mt-2 text-sm">
								<div className="bg-gray-300 text-black px-2 py-1 rounded-2xl">
								GPA: 1.8 (German Scale)
								</div>
							</div>
						</div>
						<div>
							{/* <h2 className="font-semibold text-xl">
								 Hamburg University of Technology (TUHH)
							</h2>
							<h3 className="text-md font-normal mb-3">
								M.Sc. Mechatronics | Control Systems & Robotics
							</h3> */}
							{/* <div className="gap-4 mb-4 flex items-stretch md:h-[300px] xl:h-[400px]">
								<div className="flex-[1] transition-all duration-300 ease-in-out hover:flex-[3] group">
									<Image
										src={Me5}
										width={400}
										height={225}
										alt="University"
										className="rounded-lg w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300 ease-in-out"
									/>
								</div>
								<div className="flex-[1] transition-all duration-300 ease-in-out hover:flex-[3] group">
									<Image
										src={Me4}
										width={400}
										height={225}
										alt="University"
										className="rounded-lg w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300 ease-in-out"
									/>
								</div>
								<div className="flex-[1] transition-all duration-300 ease-in-out hover:flex-[3] group">
									<Image
										src={Me6}
										width={400}
										height={225}
										alt="University"
										className="rounded-lg w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300 ease-in-out"
									/>
								</div>
							</div> */}
							{/* <div className="flex items-center gap-2">
								<p className="text-gray-600 text-justify title text-lg">
									I graduated as one of the{" "}
									<span className="text-black font-medium">
										Most Outstanding Students
									</span>{" "}
									from{" "}
									<span className="text-black font-medium">
										Universitas Negeri Malang
									</span>
									, completing my Bachelor in{" "}
									<span className="text-black font-medium">
										Computer Science
									</span>{" "}
									with a perfect GPA. My academic journey
									was defined by a balance of rigorous
									technical research and high-stakes
									execution.
									<br />
									<br />
									As the{" "}
									<span className="text-black font-medium">
										Co-Lead of Google Developer Group on
										Campus (GDGoC)
									</span>
									, I spearheaded technical initiatives and
									mentored a community of developers. Beyond
									the classroom, I secured multiple national
									and international honors, including being a{" "}
									<span className="text-black font-medium">
										two-time PIMNAS Finalist and an
										Indonesia Inventor Day Gold Medalist
									</span>
									.
									<br />
									<br />
									My education served as the engineering
									foundation for my current work in{" "}
									<span className="text-black font-medium">
										Enterprise Architecture
									</span>{" "}
									and{" "}
									<span className="text-black font-medium">
										AI Implementation
									</span>
									. I remain committed to bridging academic
									innovation with production-ready, scalable
									software solutions.
								</p>
							</div> */}
							{/* <div className="flex flex-wrap gap-2 mt-4 text-sm">
								<div className="bg-gray-300 text-black px-2 py-1 rounded-2xl">
									Grade: 1.8 (German Scale)
								</div>
							</div> */}
						</div>
						<div className="mt-6">
							<h2 className="font-semibold text-xl">
								R.V. College of Engineering (RVCE)
							</h2>
							<h3 className="text-md font-normal mb-2">
								B.E. Mechanical Engineering
							</h3>
							<div className="text-sm text-gray-600">
								2016 – 2020
							</div>
							<div className="flex flex-wrap gap-2 mt-2 text-sm">
								<div className="bg-gray-300 text-black px-2 py-1 rounded-2xl">
								GPA: 8.36 / 10
								</div>
							</div>
						</div>
						<div className="mt-6">
							<h2 className="font-semibold text-xl">
								Sheshadripuram PU (Main) college 
							</h2>
							<h3 className="text-md font-normal mb-2">
								Pre-University (PUC): Physics | Chemistry | Mathematics | Biology
							</h3>
							<div className="text-sm text-gray-600">
								2014 – 2016
							</div>
							<div className="flex flex-wrap gap-2 mt-2 text-sm">
								<div className="bg-gray-300 text-black px-2 py-1 rounded-2xl">
								Grade: 92.33%
								</div>
							</div>
						</div>
						<div className="mt-6">
							<h2 className="font-semibold text-xl">
								Indian National High School 
							</h2>
							<h3 className="text-md font-normal mb-2">
								Secondary School (SSLC)
							</h3>
							<div className="text-sm text-gray-600">
								 2016
							</div>
							<div className="flex flex-wrap gap-2 mt-2 text-sm">
								<div className="bg-gray-300 text-black px-2 py-1 rounded-2xl">
								Grade: 88.16%
								</div>
							</div>
						</div>
						{/* <p className="text-gray-600 title text-lg leading-relaxed max-w-[600px]">
My academic background combines mechanical engineering fundamentals with advanced control systems and robotics.

During my Master's in Mechatronics at TUHH, I specialized in Model Predictive Control, system identification, and real-time control implementation. My work focuses on bridging theoretical control concepts with practical deployment on real systems.

Previously, during my Bachelor's in Mechanical Engineering at RVCE, I built a strong foundation in dynamics, manufacturing systems, and engineering design, which now supports my work in complex mechatronic system modeling and control.
</p> */}
					</motion.div>{" "}
					{/* Achievements Section - Right */}
					<motion.div
						className="flex flex-col justify-start px-5 md:px-0"
						initial={{ opacity: 0, x: 50 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8, delay: 0.4 }}>
						<h2 className="font-semibold text-xl mt-7">
							Achievements
						</h2>
						<p className="text-md font-normal mb-3 md:mb-6">
							Some of my achievements during my study.
						</p>

						{/* Achievements Container with transparent bottom effect */}
						<div className="relative">
							<div className="space-y-4">
								{/* Show visible achievements */}
								<AnimatePresence>
									{visibleAchievements.map(
										(achievement, index) => (
											<motion.div
												key={`${achievement.year}-${index}`}
												className="group"
												initial={{ opacity: 0, y: 20 }}
												animate={{ opacity: 1, y: 0 }}
												exit={{ opacity: 0, y: -20 }}
												transition={{
													duration: 0.5,
													delay: index * 0.05,
												}}>
												{/* Year indicator for first achievement of each year */}
												{index === 0 ||
												visibleAchievements[index - 1]
													?.year !==
													achievement.year ? (
													<div className="flex items-center gap-3 mb-3 mt-2">
														<div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
															<span className="text-xs font-bold text-gray-600">
																{
																	achievement.year
																}
															</span>
														</div>
														<div className="flex-1 h-px bg-gradient-to-r from-gray-300 to-transparent"></div>
													</div>
												) : null}

												{/* Glassmorphism achievement card with monochrome to color effect */}
												<div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl p-4 shadow-lg hover:bg-white/30 transition-all duration-300 hover:shadow-xl  ">
													<div className="flex items-center gap-4">
														<div
															className={`aspect-square w-10 rounded-full bg-gradient-to-r ${achievement.color} flex items-center justify-center text-primary-foreground transition-all duration-300`}>
															<FontAwesomeIcon
																icon={
																	achievement.icon
																}
																className="text-white h-5 w-5"
															/>
														</div>
														<div>
															<h3 className="font-medium">
																{
																	achievement.title
																}
															</h3>
															<p className="text-sm">
																{
																	achievement.subtitle
																}
															</p>
															<div className="text-xs text-gray-500 mt-1">
																{
																	achievement.date
																}
															</div>
														</div>
													</div>
												</div>
											</motion.div>
										),
									)}
								</AnimatePresence>
							</div>

							{/* Transparent bottom overlay when not expanded */}
							{!isExpanded && hasMoreAchievements && (
								<div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-stale-300 via-stale/70 to-transparent pointer-events-none"></div>
							)}

							{/* Expand/Collapse Button */}
							{hasMoreAchievements && (
								<motion.div
									className="flex justify-center mt-6"
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									transition={{ delay: 0.5 }}>
									<button
										onClick={() =>
											setIsExpanded(!isExpanded)
										}
										className="flex items-center gap-2 px-6 py-3 bg-white/30 backdrop-blur-md border border-white/40 rounded-full hover:bg-white/40 transition-all duration-300 text-sm font-medium shadow-lg hover:shadow-xl">
										<span>
											{isExpanded
												? `Show Less`
												: `Show ${allAchievements.length - 4} More`}
										</span>
										<FontAwesomeIcon
											icon={
												isExpanded
													? faChevronUp
													: faChevronDown
											}
											className="h-3 w-3 transition-transform duration-300"
										/>
									</button>
								</motion.div>
							)}
						</div>
					</motion.div>
				</div>
			</section>
		</Wrapper>
	);
}
