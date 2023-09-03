"use client";
import { motion } from "framer-motion";
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
	return (
		<div className="flex justify-center items-center flex-col mt-5 self-start min-h-[50vh] bg-gray-200">
			<Link href="/#contact">
				<motion.h1
					className="text-5xl font-bold mt-3 tracking-widest hover:underline"
					initial={{
						opacity: 0,
						y: -200,
					}}
					whileInView={{
						opacity: 1,
						y: 0,
					}}
					transition={{
						delay: 0.7,
						duration: 1,
						type: "spring",
					}}>
					Get In Touch{" "}
					<FontAwesomeIcon
						icon={faArrowRight}
						className="text-5xl ml-2"
					/>
				</motion.h1>
			</Link>
		</div>
	);
}
