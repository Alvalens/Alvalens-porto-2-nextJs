"use client"
import { motion } from "framer-motion";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import FixedButon from "@/components/FixedButton";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import Projects from "@/json/data.json"

export default function Page () {
	const projects = Projects.Projects
  return (
		<>
			<main className="overflow-hidden">
				<FixedButon href="/projects">
					<FontAwesomeIcon
						icon={faChevronLeft}
						className="text-black pr-10"
					/>
				</FixedButon>
				<div className="min-h-screen w-screen mt-10 md:mt-0  p-10 flex justify-center items-center flex-col mb-10">
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
										<td>
											{project.tech.map((t) => `${t}, `)}
										</td>
										<td>
											<div className="flex flex-row justify-center items-center">
												{project.code && (
													<a
														href={project.code}
														title="Link to GitHub">
														<FontAwesomeIcon
															icon={faGithub}
															className="text-xl mr-2"
														/>
													</a>
												)}
												{project.preview && (
													<a
														href={project.preview}
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