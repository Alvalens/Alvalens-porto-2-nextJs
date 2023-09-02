"use client";
import { useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Button from "@/components/Button";
import Image from "next/image";
export default function Page() {
	// useEffect(() => {
	// 	window.scrollTo(0, 0);
	// }, []);

	return (
		<>
			<main className="overflow-hidden">
				<div className="relative h-screen w-screen  gap-4 p-10 flex justify-center items-center flex-col mb-10">
					<div className="z-0 mb-48 md:mb-0  md:absolute top-1/4  md:right-[10%] md:-translate-y-16 ">
						<motion.div
							initial={{ opacity: 1, scale: 1 }}
							animate={{ opacity: 1, scale: 1.6 }}
							transition={{ duration: 1 }}
							className="bg-slate-300 rounded-sm h-[400px] md:h-[600px] w-[80vw] md:w-[30vw]"></motion.div>
					</div>
					<div className="z-10 w-full absolute md:w-auto md:left-[10%] top-[60%] md:top-1/3 col-span-2 flex flex-col justify-center items-start md:items-start text-start px-10">
						<h1 className="text-5xl md:text-8xl font-bold">
							About Me
						</h1>
						<div className="flex justify-center items-center flex-col my-5 ">
							<div className="bg-gray-700 w-20 h-1 rounded-full mb-2"></div>
							<div className="bg-gray-700 w-20 h-1 rounded-full translate-x-14"></div>
						</div>
						<p className="title  text-xl mt-4 tracking-wider text-gray-500 leading-[1.7rem] mb-5">
							A brief introduction about me and my interest.
						</p>
						<motion.div
							initial={{ opacity: 0, y: 100 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 1 }}
							onClick={() => {
								window.scrollTo({
									top: 1000,
									behavior: "smooth",
								});
							}}
							className="">
							<Button variation="primary">Scroll Down</Button>
						</motion.div>
					</div>
				</div>
				<div className="mt-10 flex flex-col justify-start items-center w-full pl-10 md:pl-32">
					<div className="flex justify-center items-center flex-col my-5 self-start ">
						<div className="bg-gray-700 w-28 h-1 rounded-full mb-3 self-start"></div>
						<div className="bg-gray-700 w-28 h-1 rounded-full translate-x-12"></div>
						<h1 className="text-3xl font-bold mt-3">Who Am I?</h1>
					</div>
				</div>
				<div className="relative w-screen mx-auto container gap-4 px-10 grid grid-cols-1 md:grid-cols-2 mb-10">
					<div className="flex justify-center items-start flex-col mb-5 ">
						<div className="images relative w-full  aspect-square">
							<div className="absolute top-28 left-10 w-[50%]  aspect-square">
								<motion.img
									initial={{ opacity: 0, scale: 0.5 }}
									animate={{ opacity: 1, scale: 1 }}
									transition={{ duration: 1 }}
									className="w-full h-full object-cover object-center"
									src="/images/me.jpg"
									placeholder="blur"
								/>
							</div>
							<div className="absolute top-16 right-28 w-[30%]  aspect-square">
								<motion.img
									initial={{ opacity: 0, scale: 0.5 }}
									animate={{ opacity: 1, scale: 1 }}
									transition={{ duration: 1 }}
									className="w-full h-full object-cover object-center"
									src="/images/me.jpg"
								/>
							</div>
							<div className="absolute bottom-16 right-20 w-[40%]  aspect-square">
								<motion.img
									initial={{ opacity: 0, scale: 0.5 }}
									animate={{ opacity: 1, scale: 1 }}
									transition={{ duration: 1 }}
									className="w-full h-full object-cover object-center"
									src="/images/me.jpg"
								/>
							</div>
						</div>
					</div>
					<div className="flex justify-center items-start flex-col mb-5 md:px-10">
						<h2 className="text-2xl font-bold tracking-wider mb-3">
							Alvalen Shafelbilyunazra
						</h2>
						<p className="text-gray-600 text-justify">
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Laborum, laudantium ad vel suscipit optio
							nesciunt accusantium nulla! Similique sapiente,
							tempora id laudantium eveniet adipisci perferendis
							ad numquam sit hic fugiat? Lorem ipsum dolor sit
							amet consectetur adipisicing elit. Iste assumenda
							provident deserunt quos id, minus tempora atque eos
							tenetur ut accusantium officiis itaque qui eum quas
							harum? Nemo, ducimus quisquam.
						</p>
					</div>
				</div>
				{/* <div className="mt-16 flex flex-col justify-start items-center w-full pl-12 md:pl-32">
					<div className="flex justify-center items-center flex-col my-5 self-start ">
						<div className="bg-gray-700 w-28 h-1 rounded-full mb-3 self-start"></div>
						<div className="bg-gray-700 w-28 h-1 rounded-full translate-x-12"></div>
						<h1 className="text-3xl font-bold mt-3">Tech Stack</h1>
					</div>
				</div> */}
				<div className=" w-screen mx-auto container gap-4 p-10 grid grid-cols-1 md:grid-cols-2 mt-10 mb-24">
					<div className="flex justify-center items-center flex-col mb-5 ">
						<h2 className="text-2xl md:text-xl font-normal mb-3 md:tracking-[.5rem] uppercase ">
							Language & Framework
						</h2>
						<p className="text-gray-500 text-center tracking-widest md:px-5">
							<span className="text-black font-bold">HTML</span> |{" "}
							<span className="text-black font-bold">CSS</span> |{" "}
							<span className="text-black font-bold">
								Javascript
							</span>{" "}
							|{" "}
							<span className="text-black font-medium">
								Typescript
							</span>{" "}
							|{" "}
							<span className="text-black font-bold">React</span>{" "}
							|{" "}
							<span className="text-black font-medium">
								NextJS
							</span>{" "}
							|{" "}
							<span className="text-black font-bold">
								TailwindCSS
							</span>{" "}
							|{" "}
							<span className="text-black font-bold">
								Bootstrap
							</span>{" "}
							|{" "}
							<span className="text-black font-medium">
								NodeJS
							</span>{" "}
							|{" "}
							<span className="text-black font-medium">
								ExpressJS
							</span>{" "}
							|{" "}
							<span className="text-black font-medium">
								MongoDB
							</span>{" "}
							|{" "}
							<span className="text-black font-bold">MySQL</span>{" "}
							|{" "}
							<span className="text-black font-medium">
								Firebase
							</span>{" "}
							|<span className="text-black font-medium">PHP</span>{" "}
							|{" "}
							<span className="text-black font-bold">
								Laravel
							</span>{" "}
							|{" "}
							<span className="text-black font-medium">
								Python
							</span>
						</p>
					</div>
					<div className="flex justify-start items-center flex-col mb-5 ">
						<h2 className="text-2xl md:text-xl font-normal mb-3 md:tracking-[.5rem] uppercase">
							Tools
						</h2>
						<p className="text-gray-500 text-center tracking-wider md:px-">
							<span className="text-black font-bold">
								Visual Studio Code
							</span>{" "}
							|{" "}
							<span className="text-black font-medium">
								Jet Brains
							</span>{" "}
							| <span className="text-black font-bold">Git</span>{" "}
							|{" "}
							<span className="text-black font-bold">Github</span>{" "}
							|{" "}
							<span className="text-black font-medium">
								Figma
							</span>{" "}
							|{" "}
							<span className="text-black font-medium">
								Adobe Photoshop
							</span>{" "}
							|{" "}
							<span className="text-black font-medium">
								Adobe Premiere Pro
							</span>{" "}
							|{" "}
							<span className="text-black font-medium">
								Adobe After Effect
							</span>{" "}
							|{" "}
						</p>
					</div>
				</div>
				<div className="mt-16 flex flex-col justify-start items-center w-full pl-10 md:pl-32">
					<div className="flex justify-center items-center flex-col my-5 self-start ">
						<div className="bg-gray-700 w-28 h-1 rounded-full mb-3 self-start"></div>
						<div className="bg-gray-700 w-28 h-1 rounded-full -translate-x-12"></div>
						<h1 className="text-3xl font-bold mt-3">
							Education & Experience
						</h1>
					</div>
				</div>
				<div className="w-screen mx-auto container gap-4 p-10 grid grid-cols-1 md:grid-cols-2 my-10">
					<div className="flex justify-center items-start flex-col mb-5 ">
						<h2 className="text-2xl font-bold mb-3">
							Education | Universitas Negeri Malang
						</h2>
						<h3 className="text-md font-medium mb-3 text-gray-500">
							Teknik Informatika | 2022 - Now
						</h3>
						<p className="pl-3 text-gray-500 text-start relative">
							<span className="before:border-s-2 before:absolute before:left-0 before:top-0 before:h-full before:border-gray-400 before:block before:w-2 before:content-'' text-justify"></span>
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Vero voluptatibus tenetur dolor laudantium et
							ipsum temporibus atque illo suscipit, quam iusto
							reiciendis corrupti quibusdam architecto, labore
							cupiditate non autem aliquid?
						</p>
					</div>
					<div className="flex justify-center items-start flex-col mb-5 ">
						<h2 className="text-2xl font-bold mb-3">
							Experience | Freelance Web Developer
						</h2>
						<h3 className="text-md font-medium mb-3 text-gray-500">
							Fullstack Web Developer | 2023 - Now
						</h3>
						<p className="pl-3 text-gray-500 text-start relative">
							<span className="before:border-s-2 before:absolute before:left-0 before:top-0 before:h-full before:border-gray-400 before:block before:w-2 before:content-'' text-justify"></span>
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Vero voluptatibus tenetur dolor laudantium et
							ipsum temporibus atque illo suscipit, quam iusto
							reiciendis corrupti quibusdam architecto, labore
							cupiditate non autem aliquid?
						</p>
					</div>
				</div>
			</main>
		</>
	);
}
