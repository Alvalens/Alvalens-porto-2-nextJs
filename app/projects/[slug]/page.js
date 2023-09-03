"use client";
import { useState, useEffect } from "react";
import jsonData from "../../../json/data.json";
import Image from "next/image";

function Page({ params }) {
	const [data, setData] = useState(null);
	useEffect(() => {
		const selectedData = jsonData.Projects.find(
			(item) => item.slug === params.slug
		);
		setData(selectedData);
	}, [params.slug]);

	if (!data) {
		return <p>Loading...</p>;
	}

	return (
		<div className="relative min-h-screen w-full  gap-4 p-10 flex justify-center items-center flex-col mb-10 ">
			<div className="min-h-screen flex justify-center items-center">
				<div className="mx-auto grid grid-cols-1 md:grid-cols-2  ">
					<div className="flex justify-center items-start flex-col mb-5 space-y-10">
						<div>
							<h2 className="uppercase font-normal text-lg tracking-[8px] text-neutral-400">
								Project
							</h2>
							<h1 className="text-4xl font-medium text-neutral-900">
								{data.title}
							</h1>
						</div>
						<div>
							<h2 className="uppercase font-normal text-lg tracking-[8px] text-neutral-400">
								Technology
							</h2>
							<p className="text-2xl font-normal text-neutral-900">
								{data.tech.join(", ")}
							</p>
						</div>
						<div>
							<h2 className="uppercase font-normal text-lg tracking-[8px] text-neutral-400">
								Year
							</h2>
							<p className="text-2xl font-normal text-neutral-900">
								{data.year}
							</p>
						</div>
						<div>
							<h2 className="uppercase font-normal text-lg tracking-[8px] text-neutral-400">
								Preview
							</h2>
							<p className="text-2xl font-normal text-neutral-900">
								<a
									href={data.preview}
									target="_blank"
									rel="noopener noreferrer">
									{data.preview}
								</a>
							</p>
						</div>
						<div>
							<h2 className="uppercase font-normal text-lg tracking-[8px] text-neutral-400">
								Source Code
							</h2>
							<p className="text-2xl font-normal text-neutral-900">
								<a
									href={data.code}
									target="_blank"
									rel="noopener noreferrer">
									{data.code}
								</a>
							</p>
						</div>
					</div>
					<div className="flex justify-start items-start flex-col mb-5 ">
						<h2 className="uppercase font-normal text-lg tracking-[8px] text-neutral-400">
							Description
						</h2>
						{data.desc.map((desc, index) => (
							<p
								key={index}
								className="text-2xl font-normal text-gray-600 mb-5">
								{desc}
							</p>
						))}
					</div>
				</div>
			</div>
			{/* images */}
			<div className="mx-auto grid grid-cols-1 p-5 md:p-20  w-full h-auto">
				<div className="w-full h-auto aspect-video">
					{data.images.map((image, index) => (
						<img
							key={index}
							src={image}
							alt={`Project Image ${index + 1}`}
							className="w-full h-full mb-5"
						/>
					))}
				</div>
			</div>
		</div>
	);
}

export default Page;
