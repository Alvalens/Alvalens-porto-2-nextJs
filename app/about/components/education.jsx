import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMedal } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import Me4 from "@/public/image/me4.jpeg";

function Wrapper({ children }) {
	return (
		<div className="mx-auto container gap-10 p-10 grid grid-cols-1  my-10 ">
			<motion.div
				className="flex justify-center items-start flex-col mb-5 "
				initial={{
					opacity: 0,
					x: -200,
				}}
				whileInView={{
					opacity: 1,
					x: 0,
				}}
				transition={{
					delay: 0.5,

					type: "spring",
				}}>
				{children}
			</motion.div>
		</div>
	);
}

export default function Education() {
	return (
		<Wrapper>
			<section className="grid gap-8 md:gap-12">
				<div className="text-center space-y-2">
					<h1 className="text-3xl md:text-4xl font-bold tracking-tighter">
						Education
					</h1>
					<p className="text-muted-foreground max-w-[800px] mx-auto">
						Get to know more about my educational background.
					</p>
				</div>
				<div className="grid gap-8 md:gap-12">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
						<div className="px-5">
							<div className="font-medium text-lg">
								2022 - Present
							</div>
							<div>
								<h2 className="font-semibold text-xl">
									Universitas Negeri Malang
								</h2>
								<h3 className="text-md font-normal mb-3">
									S1 Teknik Informatika | Computer Science
								</h3>
								<div className="gap-4 mb-4 flex items-stretch md:h-[300px] xl:h-[400px]">
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
											src={Me4}
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
								</div>
								<div className="flex items-center gap-2">
									<p className="text-justify">
										Aspiring to be a software engineer, I am
										currently pursuing a bachelor&rsquo;s
										degree in computer science at
										Universitas Negeri Malang. Fascinated by
										the world of technology, I am eager to
										learn and explore new things in the
										field of computer science.
									</p>
								</div>
								{/* add gpa in a style */}
								<div className="flex flex-wrap gap-2 mt-4 text-sm">
									<div className="bg-gray-300 text-black px-2 py-1 rounded-2xl">
										GPA: 3.9 out of 4
									</div>
								</div>
							</div>
						</div>
						<div className="flex flex-col justify-start px-5 md:px-0">
							<h2 className="font-semibold text-xl mt-7">
								Achievements
							</h2>
							<p className="text-md font-normal mb-3 md:mb-12">
								Some of my achievements during my study.
							</p>
							<div className="flex items-center gap-4 mb-4">
								<div className="aspect-square w-10 rounded-full bg-black flex items-center justify-center text-primary-foreground">
									<FontAwesomeIcon
										icon={faMedal}
										className="text-white h-5 w-5"
									/>
								</div>
								<div>
									<h3 className="font-medium">
										Special Award | Gold Medal | Incubation
										Opportunity
									</h3>
									<p className="text-sm">
										Indonesia Inventor Day 2024 (IID) | Aug
										2024
									</p>
								</div>
							</div>
							<div className="flex items-center gap-4 mb-4">
								<div className="aspect-square w-10 rounded-full bg-black flex items-center justify-center text-primary-foreground">
									<FontAwesomeIcon
										icon={faMedal}
										className="text-white h-5 w-5"
									/>
								</div>
								<div>
									<h3 className="font-medium">
										3rd place (Bronze Medal)
									</h3>
									<p className="text-sm">
										Student Digital Innovation Competition
										(LIDM) | Jun 2024
									</p>
								</div>
							</div>
							<div className="flex items-center gap-4 mb-4">
								<div className="aspect-square w-10 rounded-full bg-black flex items-center justify-center text-primary-foreground">
									<FontAwesomeIcon
										icon={faMedal}
										className="text-white h-5 w-5"
									/>
								</div>
								<div>
									<h3 className="font-medium">
										3rd place (Bronze Medal)
									</h3>
									<p className="text-sm">
										Fesmaro UI/UX Design | Jun 2024
									</p>
								</div>
							</div>
							<div className="flex items-center gap-4 mb-5">
								<div className="aspect-square w-10 rounded-full bg-black flex items-center justify-center text-primary-foreground">
									<FontAwesomeIcon
										icon={faMedal}
										className="text-white h-5 w-5"
									/>
								</div>
								<div>
									<h3 className="font-medium">Finalist</h3>
									<p className="text-sm">
										36th National Student Science Week
										(PIMNAS) | Nov 2023
									</p>
								</div>
							</div>
							<div className="flex items-center gap-4 mb-5">
								<div className="aspect-square w-10 rounded-full bg-black flex items-center justify-center text-primary-foreground">
									<FontAwesomeIcon
										icon={faMedal}
										className="text-white h-5 w-5"
									/>
								</div>
								<div>
									<h3 className="font-medium">
										3rd place (Bronze Medal)
									</h3>
									<p className="text-sm">
										FORKAFEST 3.0 Web Development
										competition | Jan 2023
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</Wrapper>
	);
}
