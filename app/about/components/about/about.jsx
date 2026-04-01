import Image from "next/image";
// import Card from "./spotify/card";
import dynamic from "next/dynamic";

import { motion } from "framer-motion";
import Me1 from "@/public/image/me1.png";
import Me2 from "@/public/image/me2.jpg";
import Me3 from "@/public/image/me3.jpg";
import Hr from "@/components/Hr";
const Card = dynamic(() => import("./spotify/card"), {
  ssr: false,
});

function Title() {
	return (
		<div className="mt-10 flex flex-col justify-start items-center w-full pl-10 md:pl-32">
			<div className="flex justify-center items-center flex-col my-5 self-start ">
				<Hr variant="long"></Hr>
				<h1 className="text-3xl font-bold mt-3">Who Am I?</h1>
			</div>
		</div>
	);
}

export default function About() {
	return (
		<>
			<Title />
			<div className="relative mx-auto container gap-4 px-10 grid grid-cols-1 md:grid-cols-2 mb-10">
				<div className="flex justify-center items-start flex-col mb-5 ">
					<div className="images relative w-full  aspect-square">
						<div className="absolute top-28 left-10 w-[50%]  aspect-square   transition-all ease duration-300">
							<motion.div
								initial={{ opacity: 0, scale: 0.5, x: 100 }}
								whileInView={{
									opacity: 1,
									scale: 1,
									x: 0,
								}}
								className="relative w-full h-full">
								<Image
									src={Me1}
									alt="Harshith"
									fill
									sizes="(max-width: 768px) 80vw, 40vw"
									className="object-cover"
									placeholder="blur"
								/>
							</motion.div>
						</div>
						<div className="absolute top-16 right-28 w-[30%]  aspect-square   transition-all ease duration-300">
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
								className="relative w-full h-full">
								<Image
									src={Me2}
									alt="Harshith"
									fill
									sizes="(max-width: 768px) 60vw, 25vw"
									className="object-cover"
									placeholder="blur"
								/>
							</motion.div>
						</div>
						<div className="absolute bottom-16 right-20 w-[40%]  aspect-square   transition-all ease duration-300">
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
								className="relative w-full h-full">
								<Image
									src={Me3}
									alt="Harshith"
									fill
									sizes="(max-width: 768px) 80vw, 35vw"
									className="object-cover"
									placeholder="blur"
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
						Harshith Gowda Shakaladevanapura Maregowda
					</h2>
					<p className="text-gray-600 text-justify title text-lg leading-relaxed">
						I am a{" "}
						<span className="text-black font-medium">
							Mechatronics graduate student{" "}
						</span>
						specializing in{" "}
						<span className="text-black font-medium">
							control systems, robotics, and optimization-based control
						</span>
						. I did my masters in mechatronics at{" "}
						<span className="text-black font-medium">
							Hamburg University of Technology
						</span>
						, specialization in{" "}
						<span className="text-black font-medium">
							Robotics and Intelligent Systems
						</span>
						.
						<br />
						<br />
						My work focuses on designing and implementing{" "}
						<span className="text-black font-medium">
							real-time Model Predictive Control (MPC) algorithms
						</span>
						for complex mechatronic systems. I have experience in system identification using tensor-based methods, data-driven control approaches, and deploying controllers on real hardware platforms such as Qube Servo and MiniSegway.
						<br />
						<br />
						I have also worked on robotics systems involving {" "}
						<span className="text-black font-medium">
							reinforcement learning for locomotion and path planning
						</span>
						, combining model-based control with learning-based methods.
						<br />
						<br />
						Currently, I am working as a{" "}
						<span className="text-black font-medium">
							Research Assistant at HAW Hamburg, {" "}
						</span>
						focusing on tensor-based system identification and hierarchical MPC for energy-efficient building control systems. I am particularly interested in bridging theoretical control methods with practical real-world implementations.
						
					</p>
					<div className="mt-6 p-5 border border-gray-200 rounded-xl bg-gray-50 w-full max-w-[600px]">
						<h3 className="text-lg font-semibold mb-3">Research & Focus Areas</h3>

						<ul className="text-gray-600 space-y-2 text-sm">
							<li>• Real-time Model Predictive Control (MPC)</li>
							<li>• Optimization-based control for mechatronic systems</li>
							<li>• System identification (Tensor methods, Gaussian Processes)</li>
							<li>• Robotics control and stabilization</li>
							<li>• Data-driven control and learning-based methods</li>
						</ul>
					</div>
				</motion.div>
			</div>
		</>
	);
}
