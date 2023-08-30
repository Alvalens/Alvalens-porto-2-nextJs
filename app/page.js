"use client";
import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import Image from "next/image";
import "./globals.css";
// components
import Button from "@/components/Button";
// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const MyPage = () => {
	const fullpageOptions = {
		lockAnchors: true,
		scrollingSpeed: 1000,
		licenseKey: "gplv3-license",
	};

	return (
		<div>
			{/* Content with ReactFullpage for interactive behavior */}
			<ReactFullpage
				render={({ state, fullpageApi }) => (
					<ReactFullpage.Wrapper>
						<div className="section">
							<div className="mx-auto container grid grid-cols-1 md:grid-cols-3 gap-4 p-10">
								<div className="col-span-2 flex flex-col justify-center items-center md:items-start text-center md:text-start">
									<div className="block md:hidden col-span-1 mx-auto my-10">
										<div className="bg-slate-500 rounded-full h-60 w-60">
											<Image
												src="/img/me.jpg"
												layout="intrinsic"
												width={500}
												height={500}
												className="rounded-full w-full h-full object-cover "
												alt="Alvalens"
											/>
										</div>
									</div>
									<h3 className="uppercase text-xl mb-3 font-normal text tracking-[.5rem] text-gray-500">
										Alvalen Shafel
									</h3>
									<h1 className="text-5xl md:text-8xl font-bold my-2 md:my-5">
										Full Stack Developer
									</h1>
									<p className="title text-md  md:text-xl mt-4 tracking-wider text-gray-500 leading-[1.7rem]">
										A junior fullstack developer who
										currently focused on Web Development.
										Other than that, I also interested in
										UX/UI Design, Mobile and AI Development.
										I love to learn new things and always
										open to new opportunities.
									</p>
									<div className="buttons flex flex-row justify-center items-center space-x-4 mt-10">
										<Button variation="primary">
											Download CV
										</Button>
										<Button variation="secondary">
											Contact Me
										</Button>
									</div>
								</div>
								<div className="hidden md:flex col-span-1 mx-auto justify-center items-center ">
									<div className=" rounded-full h-auto w-auto aspect-square md:px-12">
										<Image
											src="/img/me.jpg"
											layout="intrinsic"
											width={500}
											height={500}
											className="rounded-full w-full h-full object-cover grayscale hover:grayscale-0"
											alt="Alvalens"
										/>
									</div>
								</div>
							</div>
						</div>
						<div className="section">
							<div className="relative h-screen w-screen mx-auto container gap-4 p-10 flex justify-center items-center flex-col">
								<div className="z-0 mb-48 md:mb-0  md:absolute top-1/4  md:right-[10%] md:-translate-y-16 ">
									<div className="bg-slate-300 rounded-sm h-[400px] md:h-[600px] w-[80vw] md:w-[30vw]"></div>
								</div>
								<div className="z-10 w-full absolute md:w-auto  md:left-[10%] top-[60%] md:top-1/3 col-span-2 flex flex-col justify-center items-start md:items-start text-start px-10">
									<h1 className="text-5xl md:text-8xl font-bold">
										About Me
									</h1>
									<div className="flex justify-center items-center flex-col my-5 ">
										<div className="bg-gray-700 w-20 h-1 rounded-full mb-2"></div>
										<div className="bg-gray-700 w-20 h-1 rounded-full translate-x-14"></div>
									</div>
									<p className="title  text-xl mt-4 tracking-wider text-gray-500 leading-[1.7rem] mb-5">
										A brief introduction about me and my
										interest.
									</p>
									<Button variation="primary">
										Learn More
									</Button>
								</div>
							</div>
						</div>
						<div className="section">
							<div className="relative h-screen w-screen mx-auto container gap-4 p-10 flex justify-center items-center flex-col">
								<div className="z-0 mb-48 md:mb-0  md:absolute top-1/4  md:right-[10%] md:-translate-y-16 ">
									<div className="bg-slate-300 rounded-sm h-[400px] md:h-[600px] w-[80vw] md:w-[30vw]"></div>
								</div>
								<div className="z-10 w-full absolute md:w-auto  md:left-[10%] top-[60%] md:top-1/3 col-span-2 flex flex-col justify-center items-start md:items-start text-start px-10">
									<h1 className="text-5xl md:text-8xl font-bold">
										My Projects
									</h1>
									<div className="flex justify-center items-center flex-col my-5 ">
										<div className="bg-gray-700 w-20 h-1 rounded-full mb-2"></div>
										<div className="bg-gray-700 w-20 h-1 rounded-full translate-x-14"></div>
									</div>
									<p className="title  text-xl mt-4 tracking-wider text-gray-500 leading-[1.7rem] mb-5">
										This is some of my projects that I have
										done and currently working on.
									</p>
									<Button variation="primary">
										Learn More
									</Button>
								</div>
							</div>
						</div>
						<div className="section">
							<div className="relative h-screen w-screen mx-auto container gap-4 p-10 flex justify-center items-center flex-col">
								<div className="z-0 mb-48 md:mb-0  md:absolute top-1/4  md:right-[10%] md:-translate-y-16 ">
									<div className="bg-slate-300 rounded-sm h-[400px] md:h-[600px] w-[80vw] md:w-[30vw]"></div>
								</div>
								<div className="z-10 w-full absolute md:w-auto  md:left-[10%] top-[60%] md:top-1/3 col-span-2 flex flex-col justify-center items-start md:items-start text-start px-10">
									<h1 className="text-5xl md:text-8xl font-bold">
										Get In Touch
									</h1>
									<div className="flex justify-center items-center flex-col my-5 ">
										<div className="bg-gray-700 w-20 h-1 rounded-full mb-2"></div>
										<div className="bg-gray-700 w-20 h-1 rounded-full translate-x-14"></div>
									</div>
									<p className="title text-xl mt-4 tracking-wider text-gray-500 leading-[1.7rem] mb-5">
										Feel free to contact me if you have any
										questions or just want to say hi.
									</p>
									<p className="title text-xl mt-4 tracking-wider text-gray-500 leading-[1.7rem] mb-5">
										alvalen.shafel04@gmail.com
									</p>
									{/* icons */}
									<div className="flex justify-center items-center space-x-4">
										<a
											href="#"
											className="flex justify-center items-center bg-gray-500 w-14 h-14 rounded-full text-gray-100 hover:bg-gray-400 transition-all ease-in-out duration-300">
											<FontAwesomeIcon
												icon={faEnvelope}
												className="text-4xl"
											/>
										</a>

										<a
											href="#"
											className="flex justify-center items-center bg-gray-500 w-14 h-14 rounded-full text-gray-100 hover:bg-gray-400 transition-all ease-in-out duration-300">
											<FontAwesomeIcon
												icon={faGithub}
												className="text-4xl"
											/>
										</a>
										<a
											href="#"
											className="flex justify-center items-center bg-gray-500 w-14 h-14 rounded-full text-gray-100 hover:bg-gray-400 transition-all ease-in-out duration-300">
											<FontAwesomeIcon
												icon={faInstagram}
												className="text-4xl"
											/>
										</a>
										<a
											href="#"
											className="flex justify-center items-center bg-gray-500 w-14 h-14 rounded-full text-gray-100 hover:bg-gray-400 transition-all ease-in-out duration-300">
											<FontAwesomeIcon
												icon={faLinkedin}
												className="text-4xl"
											/>
										</a>
										<a
											href="#"
											className="flex justify-center items-center bg-gray-500 w-14 h-14 rounded-full text-gray-100 hover:bg-gray-400 transition-all ease-in-out duration-300">
											<FontAwesomeIcon
												icon={faDiscord}
												className="text-4xl"
											/>
										</a>
									</div>
								</div>
							</div>
						</div>
					</ReactFullpage.Wrapper>
				)}
				{...fullpageOptions} // Pass fullpage options to the component
			/>
		</div>
	);
};

export default MyPage;
