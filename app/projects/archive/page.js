"use client"
import { motion } from "framer-motion";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

const projects = [
  {
    year: "2023",
    title: "React Realtime Chat",
    tech: "Javascript, React Js, Firebase, Daisy UI",
    github: "https://github.com/Alvalens/react-realtime-chat",
    preview: "https://react-chat-rouge.vercel.app",
  },
  {
    year: "2023",
    title: "React Tools",
    tech: "Javascript, React Js, TailwindCSS",
    github: "https://github.com/Alvalens/react-tools",
    preview: "react-tools-flax.vercel.app",
  },
  {
    year: "2023",
    title: "Aleph Discord Bot",
    tech: "Python, Serp API, Discord.py",
    github: "https://github.com/Alvalens/aleph-discord-bot",
  },
  {
    year: "2023",
    title: "Unmuh Jember Landing Page",
    tech: "HTML, CSS, Javascript",
    github: "https://github.com/Alvalens/unmuh-jember-landing-page",
    preview: "https://alvalens.github.io/unmuh-jember-landing-page/",
  },
];
export default function Page () {
  return (
		<>
			<main className="overflow-hidden">
				<div className="h-screen w-screen  p-10 flex justify-center items-center flex-col mb-10">
					<div className="flex justify-center items-center flex-col my-5 self-start ">
						<motion.div
							className="bg-gray-700 w-28 h-1 rounded-full mb-3 self-start"
							initial={{
								opacity: 0,
								x: -250,
							}}
							animate={{
								opacity: 1,
								x: 50,
							}}
							transition={{
								delay: 0.5,
								duration: 1,
								type: "spring",
							}}></motion.div>
						<motion.div
							className="bg-gray-700 w-28 h-1 rounded-full"
							initial={{
								opacity: 0,
								x: 200,
							}}
							animate={{
								opacity: 1,
								x: 0,
							}}
							transition={{
								delay: 0.5,
								duration: 1,
								type: "spring",
							}}></motion.div>
						<motion.h1
							className="text-3xl font-bold mt-3"
							initial={{
								opacity: 0,
								x: -200,
							}}
							animate={{
								opacity: 1,
								x: 0,
							}}
							transition={{
								delay: 0.7,
								duration: 1,
								type: "spring",
							}}>
							Archive
						</motion.h1>
					</div>

					<div className="mx-auto container md:px-10 grid grid-cols-1 mb-">
						{/* invisible table */}
						<table className="space-y-3">
							<thead>
								<tr className=" hover:shadow-md  transition-all ease duration-500">
									<th className="text-start">Year</th>
									<th className="text-start">Title</th>
									<th className="text-start">Technology</th>
									<th className="text-start">Link</th>
								</tr>
							</thead>
							<tbody>
								{projects.map((project, index) => (
									<tr
										key={index}
										className="hover:shadow-md transition-all ease duration-500">
										<td>{project.year}</td>
										<td>{project.title}</td>
										<td>{project.tech}</td>
										<td>
											<div>
												{project.github && (
													<a
														href={project.github}
														title="Link to GitHub">
														<FontAwesomeIcon
															icon={faGithub}
															className="text-xl mr-2"
														/>
													</a>
												)}
												{project.preview && (
													<a
														href={
															project.preview
														}
														title="Link to project preview">
														<FontAwesomeIcon
															icon={
																faArrowUpRightFromSquare
															}
															className="text-xl"
														/>
													</a>
												)}
											</div>
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</div>
			</main>
		</>
  );
}