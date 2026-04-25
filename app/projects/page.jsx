"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Button from "@/components/Button";
import Image from "next/image";

// images
import Intervyou3 from "@/public/image/project1.png";
import Intervyou1 from "@/public/image/project2.png";
import Intervyou2 from "@/public/image/project3.jpg";
import ProjectAll from "@/public/image/projects.png";

import Hr from "@/components/Hr";
import ProjectCard from "./components/ProjectCard";
import Projects from "@/json/data.json";
import FixedButon from "@/components/FixedButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

const category = {
	1: "Control Systems",
	2: "Robotics",
	3: "Machine Learning",
	4: "Research & MPC",
};

export default function Page() {
	const [activeCategory, setActiveCategory] = useState(1);
	const projects = Projects.Projects.filter((item) => item.show === true);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<>
			<main className="overflow-hidden">
				<FixedButon href="/#projects">
					<FontAwesomeIcon icon={faChevronLeft} className="text-black pr-10" />
				</FixedButon>
				<div className="relative h-screen w-screen  gap-4 p-10 flex justify-center items-center flex-col mb-10 overflow-hidden">
					<div className="z-0 mb-48 md:mb-0  md:absolute top-1/4  md:right-[10%] md:-translate-y-16 ">
						<motion.div
							initial={{ scale: 1 }}
							animate={{ scale: 1.6 }}
							transition={{ duration: 1, ease: "circOut" }}
							className="relative bg-slate-300 rounded-sm h-[400px] md:h-[600px] w-[80vw] md:w-[30vw]   ">
							<Image
								src={ProjectAll}
								alt="Alvalens"
								fill
								placeholder="blur"
								className="object-cover"
								sizes="(max-width: 768px) 80vw, 30vw"
							/>
						</motion.div>
					</div>
					<div className="z-10 absolute md:left-[10%] top-[60%] md:top-1/3 px-10 max-w-[700px]">
						<h1 className="md:bg-white bg-transparent lg:bg-transparent bg-opacity-50 md-px-0 text-black text-5xl md:text-8xl font-bold">
							My Projects
						</h1>
						<Hr />
						<p className="title  text-xl mt-4 tracking-wider text-gray-900 leading-[1.7rem] mb-5">
							Portfolio of control systems, robotics, and machine learning projects {" "}
							<span className="bg-transparent md:bg-gray-100 bg-opacity-50 xl:bg-transparent">
								{" "}
								with a focus on real-time implementation, optimization-based control,
							</span>
							and experimental validation on physical systems.
						</p>
						<motion.div
							initial={{ opacity: 0, y: 100 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, ease: "circOut" }}
							onClick={() => {
								window.scrollTo({
									top: 1000,
									behavior: "smooth",
								});
							}}
							className="mb-3">
							<Button variation="primary">Scroll Down</Button>
						</motion.div>
					</div>
				</div>
				<div className="mt-10 flex flex-col justify-start items-center w-full pl-10 md:pl-32">
					<div className="flex justify-center items-center flex-col my-5 self-start ">
						<Hr variant="long"></Hr>
						<h1 className="text-3xl font-bold mt-3">Hightlight</h1>
					</div>
				</div>
				<div className="relative w-screen mx-auto container gap-4 px-10 grid grid-cols-1 md:grid-cols-2 mb-10">
					<div className="flex justify-center items-start flex-col mb-5 ">
						<div className="images relative w-full  aspect-square">
							<div className="absolute top-30 left-0 h-[60%]  aspect-[3/4]  transition-all ease duration-300 hover:scale-150 z-10">
								<motion.div
									initial={{ opacity: 0, scale: 0.5, x: 100 }}
									whileInView={{
										opacity: 1,
										scale: 1,
										x: 0,
									}}
									className="relative w-full h-full shadow-lg">
									<Image
										src={Intervyou1}
										alt="Alvalens"
										fill
										placeholder="blur"
										className="rat object-cover"
										sizes="50vw"
									/>
								</motion.div>
							</div>
							<div className="absolute top-5 right-30 h-[35%]  aspect-video   transition-all ease duration-300 hover:scale-150">
								<motion.div
									initial={{
										opacity: 0,
										scale: 0.5,
										x: -100,
									}}
									whileInView={{
										opacity: 1,
										scale: 1,
										x: 0,
									}}
									transition={{ delay: 0.3 }}
									className="relative w-full h-full shadow-lg ">
									<Image
										src={Intervyou3}
										alt="Alvalens"
										fill
										placeholder="blur"
										className="object-cover"
										style={{ objectPosition: "0% 0%" }}
										sizes="40vw"
									/>
								</motion.div>
							</div>
							<div className="absolute bottom-10 md:bottom-23 right-28 h-[45%]  aspect-[3/4]   transition-all ease duration-300 hover:scale-150">
								<motion.div
									initial={{
										opacity: 0,
										scale: 0.5,
										x: -100,
									}}
									whileInView={{
										opacity: 1,
										scale: 1,
										x: 0,
									}}
									transition={{
										delay: 0.5,
									}}
									className="relative w-full h-full shadow-lg">
									<Image
										src={Intervyou2}
										alt="Alvalens"
										fill
										placeholder="blur"
										className="object-cover"
										sizes="40vw"
									/>
								</motion.div>
							</div>
						</div>
					</div>
					<motion.div
						className="flex justify-center items-start flex-col mb-5 md:px-10"
						initial={{
							opacity: 0,
							x: 200,
						}}
						whileInView={{
							opacity: 1,
							x: 0,
						}}
						transition={{
							delay: 0.5,
							type: "spring",
						}}>
						<h2 className="text-2xl font-bold tracking-wider mb-3">
						Real-Time MPC for Unstable Systems
						</h2>

						<p className="text-gray-600 text-justify title text-lg">
						Designed and implemented real-time Model Predictive Control (MPC) 
						for unstable systems including an inverted pendulum (Qube-Servo 3) 
						and a two-wheeled self-balancing robot. 

						The controller was deployed using Simulink Real-Time with embedded 
						hardware, enabling constraint handling, disturbance rejection, 
						and high-frequency control execution.

						Compared against PID baseline and experimentally validated 
						improved stabilization and robustness.
						</p>

						<div className="mt-3">
						<Button variation="primary">
							<Link href="projects/mpc-qube">More</Link>
						</Button>
						<Button variation="secondary">
							<a
							href="https://github.com/Harshithgowdasm/iMTI_qube.git"
							target="_blank"
							rel="noopener noreferrer">
							GitHub
							</a>
						</Button>
						</div>
					</motion.div>
				</div>
				<div className="mt-16 flex flex-col justify-start items-center w-full pl-10 md:pl-32">
					<div className="flex justify-center items-center flex-col my-5 self-start">
						<Hr variant="long"></Hr>
						<motion.h1
							className="text-3xl font-bold mt-3"
							initial={{
								opacity: 0,
								x: -200,
							}}
							whileInView={{
								opacity: 1,
								x: 0,
							}}
							transition={{
								delay: 0.7,
								type: "spring",
							}}>
							Other Note Worthy Projects
						</motion.h1>
					</div>
				</div>

				{/* choose category */}
				<motion.div
					initial={{
						opacity: 0,
						x: 200,
					}}
					whileInView={{
						opacity: 1,
						x: 0,
					}}
					transition={{
						type: "spring",
					}}
					className="flex flex-row justify-center items-start flex-wrap gap-3 md:gap-5 my-5 ">
					{Object.keys(category).map((key, index) => (
						<button
							key={index}
							className={`px-2 md:px-4 py-2 rounded-lg cursor-pointer transition-all ease duration-300 focus:bg-gray-300 focus:text-black focus:ring focus:ring-slate-500 ${
								activeCategory === key
									? "bg-gray-300 text-black hover:bg-gray-700 hover:text-white"
									: "bg-gray-700 text-white hover:bg-gray-300 hover:text-black"
							}`}
							onClick={() => setActiveCategory(key)}>
							{category[key]}
						</button>
					))}
				</motion.div>

				{/* projects */}
				<div className="w-screen mx-auto container gap-4 px-10 grid grid-cols-1 md:grid-cols-2 mb-10 cursor-pointer">
					{projects.map((project, index) => (
						<ProjectCard
							project={project}
							key={index}
							activeCategory={activeCategory}
						/>
					))}
				</div>

				{/* view in archive btn */}
				<motion.div
					initial={{
						opacity: 0,
					}}
					whileInView={{
						opacity: 1,
					}}
					className="flex justify-center items-center flex-col my-5 self-start ">
					<Button variation="primary">
						<Link href="projects/archive">View In Archive</Link>
					</Button>
				</motion.div>
			</main>
		</>
	);
}
