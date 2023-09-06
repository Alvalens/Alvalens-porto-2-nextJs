import { motion } from "framer-motion";

export default function Hr() {
	return (
		<div className="flex justify-center items-center flex-col my-5 ">
			<motion.div
				className="bg-gray-700 w-20 h-1 rounded-full mb-2"
				initial={{
					opacity: 0,
					x: -45,
				}}
				whileInView={{
					opacity: 1,
					x: 0,
				}}
				transition={{
					delay: 0.2,

					type: "spring",
				}}></motion.div>
			<motion.div
				className="bg-gray-700 w-20 h-1 rounded-full "
				initial={{
					opacity: 0,
					x: 150,
				}}
				whileInView={{
					opacity: 1,
					x: 40,
				}}
				transition={{
					delay: 0.3,

					type: "spring",
				}}></motion.div>
		</div>
	);
}
