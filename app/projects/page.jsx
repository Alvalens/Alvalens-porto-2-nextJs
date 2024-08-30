"use client";
import { useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Button from "@/components/Button";
import Image from "next/legacy/image";

// images
import ReactChat1 from "@/public/projects/trivia/trivia1.png";
import ReactChat2 from "@/public/projects/trivia/trivia2.png";
import ReactChat3 from "@/public/projects/trivia/trivia3.png";
import ProjectAll from "@/public/img/projects-all.jpg";
// main project image
import Trivia from "@/public/projects/main-project/trivia.png";
import LUDOang from "@/public/projects/main-project/ludo.png";
import ReactChatMain from "@/public/projects/main-project/react-chat.png";
import ReactTools from "@/public/projects/main-project/react-tools.png";
import AlephBot from "@/public/projects/main-project/aleph-bot.png";
import LPTK from "@/public/projects/lptk/lptk1.png";
import NUINO from "@/public/projects/ino/ino1.png";
import Porto from "@/public/projects/porto/porto1.png";

import Hr from "@/components/Hr";
import FixedButon from "@/components/FixedButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

const projects = [
	{
		title: "Generative Trivia",
		desc: "Generative Trivia is a web application that I created using Gemini AI API to generate trivia questions and answers.",
		year: "2024",
		tech: "NextJS, Gemini AI API, Tailwind CSS, Shadcn UI, Firebase",
		bg: Trivia,
		slug: "trivia",
	},
	{
		title: "LUDOang",
		desc: "LUDOang is a game created using python and pygame. This game is inspired by LUDO game.",
		year: "2023",
		tech: "Python, Pygame, OpenGL",
		bg: LUDOang,
		slug: "ludoang",
	},
	{
		title: "React Chat WebApp",
		desc: "My second React project. This project is a realtime chat webapp that I created using ReactJS, Firebase, and TailwindCSS.",
		year: "2023",
		tech: "Javascript, React Js, Firebase, Daisy UI",
		bg: ReactChatMain,
		slug: "react-chat",
	},
	{
		title: "React Tools",
		desc: "My first React project. contain three main tools: Todo List, Note, and Expense Tracker that usefull for daily activity",
		year: "2023",
		tech: "Javascript, React Js, TailwindCSS",
		bg: ReactTools,
		slug: "react-tools",
	},
	{
		title: "Aleph Discord Bot",
		desc: "Discord bot that can search images on google and send the result to discord channel, with this bot you can search images on google without leaving discord.",
		year: "2023",
		tech: "Python, Serp API, Discord.py",
		bg: AlephBot,
		slug: "aleph-discord-bot",
	},
	{
		title: "LPTK Cup 2023 Website",
		desc: "LPTK Cup 2023 is a website for a competition that held by Universitas Negeri Malang. This is my second freelance project using Laravel.",
		year: "2023",
		tech: "PHP, Laravel, Bootstrap, JQuery, MySQL",
		bg: LPTK,
		slug: "lptk-cup-2023",
	},
	{
		title: "NU INO Website",
		desc: "My first freelance project. This project is a website for a School based on a JALAKAR curriculum. The website is built mainly using Laravel and Bootstrap.",
		year: "2023",
		tech: "PHP, Laravel, Livewire, Bootstrap, JQuery, MySQL",
		bg: NUINO,
		slug: "nu-ino-website",
	},
	{
		title: "My First Portofolio Website",
		desc: "My first portofolio website that i created using HTML, CSS, and Javascript. This website is the reason why i learn web development.",
		year: "2022",
		tech: "HTML, CSS, Javascript, Bootstrap",
		bg: Porto,
		slug: "my-first-portofolio-website",
	},
];

export default function Page() {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	const handleBack = () => {
		window.location.href = "/";
	};
	return (
		<>
			<main className="overflow-hidden">
				<FixedButon onClick={handleBack}>
					<FontAwesomeIcon
						icon={faChevronLeft}
						className="text-black pr-10"
					/>
				</FixedButon>
				<div className="relative h-screen w-screen  gap-4 p-10 flex justify-center items-center flex-col mb-10 overflow-hidden">
					<div className="z-0 mb-48 md:mb-0  md:absolute top-1/4  md:right-[10%] md:-translate-y-16 ">
						<motion.div
							initial={{ scale: 1 }}
							animate={{ scale: 1.6 }}
							transition={{ duration: 1, ease: "circOut" }}
							className="bg-slate-300 rounded-sm h-[400px] md:h-[600px] w-[80vw] md:w-[30vw] grayscale hover:grayscale-0 ">
							<Image
								src={ProjectAll}
								alt="Alvalens"
								layout="fill"
								objectFit="cover"
								placeholder="blur"
							/>
						</motion.div>
					</div>
					<div className="z-10 w-full absolute md:w-auto md:left-[10%] top-[60%] md:top-1/3 col-span-2 flex flex-col justify-center items-start md:items-start text-start px-10 pt-4 backdrop-filter backdrop-blur-sm md:backdrop-blur-none md:backdrop-filter-none bg-gray-100 bg-opacity-50 md:bg-transparent md:pt-0">
						<h1 className="md:bg-white bg-transparent lg:bg-transparent bg-opacity-50 md-px-0 text-black text-5xl md:text-8xl font-bold">
							My Projects
						</h1>
						<Hr />
						<p className="title  text-xl mt-4 tracking-wider text-gray-900 leading-[1.7rem] mb-5">
							List of my projects that I have done and{" "}
							<span className="bg-transparent md:bg-gray-100 bg-opacity-50 xl:bg-transparent">
								{" "}
								currently working on.
							</span>
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
						<div className="bg-gray-700 w-28 h-1 rounded-full mb-3 self-start"></div>
						<div className="bg-gray-700 w-28 h-1 rounded-full translate-x-12"></div>
						<h1 className="text-3xl font-bold mt-3">Hightlight</h1>
					</div>
				</div>
				<div className="relative w-screen mx-auto container gap-4 px-10 grid grid-cols-1 md:grid-cols-2 mb-10">
					<div className="flex justify-center items-start flex-col mb-5 ">
						<div className="images relative w-full  aspect-square">
							<div className="absolute top-28 left-10 h-[40%]  aspect-video grayscale hover:grayscale-0 transition-all ease duration-300 hover:scale-150 z-10">
								<motion.div
									initial={{ opacity: 0, scale: 0.5, x: 100 }}
									whileInView={{
										opacity: 1,
										scale: 1,
										x: 0,
									}}
									className="w-full h-full shadow-lg">
									<Image
										src={ReactChat1}
										alt="Alvalens"
										layout="fill"
										objectFit="cover"
										placeholder="blur"
										className="rat"
									/>
								</motion.div>
							</div>
							<div className="absolute top-16 right-28 h-[30%]  aspect-video grayscale hover:grayscale-0 transition-all ease duration-300 hover:scale-150">
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
									className="w-full h-full shadow-lg ">
									<Image
										src={ReactChat3}
										alt="Alvalens"
										layout="fill"
										objectFit="cover"
										placeholder="blur"
										objectPosition="0% 0%"
									/>
								</motion.div>
							</div>
							<div className="absolute bottom-16 right-20 h-[35%]  aspect-video grayscale hover:grayscale-0 transition-all ease duration-300 hover:scale-150">
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
									className="w-full h-full shadow-lg">
									<Image
										src={ReactChat2}
										alt="Alvalens"
										layout="fill"
										objectFit="cover"
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
							Generative Trivia
						</h2>
						<p className="text-gray-600 text-justify title text-lg">
							A generative trivia website built with Next.js,
							Firebase, NextAuth, Google OAuth, and TypeScript.
							Users can generate trivia questions for predefined
							school subjects and answer them with a unique
							interactive input style. The application supports
							user authentication with Google and stores data in
							Firestore. You can see the source code of this
							project on my github account or preview the project
							by clicking the button below.
						</p>{" "}
						<div className="mt-3">
							<Button variation="primary">
								<Link href="projects/trivia">More</Link>
							</Button>
							<Button variation="secondary">
								<a
									href="https://generative-trivia.vercel.app/"
									target="_blank"
									rel="noopener noreferrer">
									Preview
								</a>
							</Button>
						</div>
					</motion.div>
				</div>
				<div className="mt-16 flex flex-col justify-start items-center w-full pl-10 md:pl-32">
					<div className="flex justify-start items-start flex-col my-5 self-start ">
						<Hr />
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
				<div className="w-screen mx-auto container gap-4 px-10 grid grid-cols-1 md:grid-cols-2 mb-10 cursor-pointer">
					{/* loop projeects data */}
					{projects.map((project, index) => (
						<Link href={"projects/" + project.slug} key={index}>
							<motion.div
								className="z-10 relative flex justify-center items-start flex-col mb-5 md:px-10 w-full h-auto bg-gray-400 group/tes py-20 px-5 md:py-2 aspect-video "
								initial={{
									opacity: 0,
									x: -200,
								}}
								whileInView={{
									opacity: 1,
									x: 0,
								}}
								transition={{
									type: "spring",
								}}>
								{" "}
								{/* Add relative here */}
								<Image
									src={project.bg.src}
									alt="Alvalens"
									layout="fill"
									objectFit="cover"
									placeholder="blur"
									className="bg-slate-950 opacity-10  group-hover/tes:opacity-100 transition-all ease duration-500"
									blurDataURL={project.bg.blurDataURL}
								/>
								<div className="absolute top-0 left-0 bg-gray-600 px-4 py-2">
									<h4 className="text-white">
										{project.year}
									</h4>
								</div>
								<div className="transition-all ease duration-500 opacity-100 content text-center group-hover/tes:opacity-0 z-10">
									<h1 className="text-3xl font-bold mb-3">
										{project.title}
									</h1>
									<p>{project.desc}</p>
									<div className="flex justify-center items-center flex-row mt-5 flex-wrap">
										{project.tech
											.split(",")
											.map((t, index) => (
												<span
													key={index}
													className="m-1 px-4 py-2 bg-gray-600 text-white ">
													{t}
												</span>
											))}
									</div>
								</div>
							</motion.div>
						</Link>
					))}
				</div>
				{/* view in archive btn */}
				<div className="flex justify-center items-center flex-col my-5 self-start ">
					<Button variation="primary">
						<Link href="projects/archive">View In Archive</Link>
					</Button>
				</div>
			</main>
		</>
	);
}
