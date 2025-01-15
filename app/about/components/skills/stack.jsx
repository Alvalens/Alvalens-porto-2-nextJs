import { motion } from "framer-motion";

export default function Stack() {
  return (
		<motion.div
			className="flex justify-center items-center flex-col mb-5 "
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
			<h2 className="text-2xl md:text-xl font-normal mb-3 md:tracking-[.3rem] lg:tracking-[.5rem] uppercase ">
				Language & Framework
			</h2>
			<p className="text-gray-500 text-center tracking-widest md:px-5">
				<span className="text-black font-bold">HTML</span> |{" "}
				<span className="text-black font-bold">CSS</span> |{" "}
				<span className="text-black font-bold">Javascript</span> |{" "}
				<span className="text-black font-bold">Typescript</span> |{" "}
				<span className="text-black font-bold">React</span> |{" "}
				<span className="text-black font-bold">NextJS</span> |{" "}
				<span className="text-black font-bold">TailwindCSS</span> |{" "}
				<span className="text-black font-bold">Bootstrap</span> |{" "}
				<span className="text-black font-medium">NodeJS</span> |{" "}
				<span className="text-black font-medium">ExpressJS</span> |{" "}
				<span className="text-black font-bold">MySQL</span> |{" "}
				<span className="text-black font-bold">PostgreSQL</span> |{" "}
				<span className="text-black font-medium">MongoDB</span> |{" "}
				<span className="text-black font-medium">Firebase</span> |{" "}
				<span className="text-black font-medium">PHP</span> |{" "}
				<span className="text-black font-bold">Laravel</span> |{" "}
				<span className="text-black font-medium">Python</span>
			</p>
		</motion.div>
  );
}