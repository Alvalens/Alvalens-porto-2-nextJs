"use client";
import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import Image from "next/image";
import "./globals.css";

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
									<h3 className="text-2xl mb-3 font-medium text tracking-[.5rem] text-gray-500">
										Alvalens | Portofolio
									</h3>{" "}
									<div className="block md:hidden col-span-1 mx-auto my-10">
										<div className="bg-slate-500 rounded-full h-72 w-72"></div>
									</div>
									<h1 className="text-5xl md:text-8xl font-bold">
										Full Stack Developer
									</h1>
									<p className="title text-xl mt-4 tracking-wider text-gray-500 leading-[1.7rem]">
										A junior fullstack developer who
										currently focused on Web Development.
										Other than that, I also interested in
										UX/UI Design, Mobile and AI Development.
										I love to learn new things and always
										open to new opportunities.
									</p>
								</div>
								<div className="hidden md:block col-span-1 mx-auto">
									<div className="bg-slate-500 rounded-full h-72 w-72"></div>
								</div>
							</div>
						</div>
						<div className="section">
							<h1>Interactive Section 2</h1>
							<p>Content of interactive section 2</p>
						</div>
						<div className="section">
							<h1>Interactive Section 2</h1>
							<p>Content of interactive section 2</p>
						</div>
						<div className="section">
							<h1>Interactive Section 2</h1>
							<p>Content of interactive section 2</p>
						</div>
						{/* ... Other interactive sections ... */}
					</ReactFullpage.Wrapper>
				)}
				{...fullpageOptions} // Pass fullpage options to the component
			/>
		</div>
	);
};

export default MyPage;
