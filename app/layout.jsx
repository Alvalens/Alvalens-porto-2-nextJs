import "./globals.css";
import { Poppins, Jost } from "next/font/google";
import Navbar from "@/components/Navbar";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;
import { Analytics } from "@vercel/analytics/react";
import Chat from "@/components/Chat";
import ClientTopProgressBar from "@/components/ClientTopProgressBar";

const poppins = Poppins({
	subsets: ["latin"],
	weight: ["300", "400", "500", "600", "700"],
	style: ["normal", "italic"],
	display: "swap",
	variable: "--font-poppins",
});

const jost = Jost({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"],
	display: "swap",
	variable: "--font-jost",
});

export const metadata = {
	metadataBase: new URL("https://your-domain.vercel.app"), // change later if needed

	title: "Harshith Gowda | Control Systems & Robotics Engineer",

	description:
		"Control Systems and Robotics Engineer specializing in Model Predictive Control (MPC), real-time control, and data-driven modeling. Experience in system identification, optimization-based control, and hardware implementation.",

	author: "Harshith Gowda S M",
	applicationName: "Harshith Portfolio",

	keywords: [
		"Harshith Gowda",
		"Control Systems Engineer",
		"Model Predictive Control",
		"MPC",
		"Robotics Engineer",
		"Mechatronics",
		"System Identification",
		"Real-Time Control",
		"Optimization Based Control",
	],

	openGraph: {
		type: "website",
		title: "Harshith Gowda | Control Systems & Robotics Engineer",
		description:
			"Portfolio of a Mechatronics engineer focused on MPC, robotics, and real-time control systems.",
		images: [
			{
				url: "/og-image.png",
				width: 1200,
				height: 630,
				alt: "Harshith Portfolio",
			},
		],
	},
};

// export const metadata = {
// 	metadataBase: new URL("https://www.alvalens.my.id"),
// 	title: "Alvalens | Portofolio",

// 	description:
// 		"Alvalen, Product-Minded Software Engineer specializing in Next.js, Spring Boot, and AI Solutions. Founder & CTO of Intervyou.",

// 	author: "Alvalen Shafelbilyunazra",
// 	siteUrl: "https://www.alvalens.my.id",
// 	applicationName: "Alvalens",

// 	keywords: [
// 		"alvalens",
// 		"alvalen",
// 		"alvalen shafel",
// 		"shafel",
// 		"alvalen shafelbilyunazra",
// 		"alvalen shafel bilyunazra",
// 		"bloodfallen",
// 		"alvalen porto",
// 		"alvalen um",
// 	],

// 	openGraph: {
// 		type: "website",
// 		url: "https://www.alvalens.my.id",
// 		title: "Alvalens | Portofolio",
// 		siteName: "Alvalens | Portofolio",
// 		description: "My name is Alvalens, This is my portofolio website.",
// 		images: [
// 			{
// 				url: "/og-image-rev.png",
// 				alt: "Alvalens Portofolio",
// 				width: 1200,
// 				height: 630,
// 			},
// 		],
// 	},
// };

// const jsonLd = {
// 	"@context": "https://schema.org",
// 	"@type": "Person",
// 	name: "Alvalen Shafelbilyunazra",
// 	url: "https://www.alvalens.my.id",
// 	jobTitle: "Full Stack Software Engineer",
// 	worksFor: [
// 		{ "@type": "Organization", name: "MGG Software" },
// 		{ "@type": "Organization", name: "Intervyou" },
// 	],
// 	alumniOf: {
// 		"@type": "CollegeOrUniversity",
// 		name: "Universitas Negeri Malang",
// 	},
// 	sameAs: [
// 		"https://github.com/Alvalens",
// 		"https://www.linkedin.com/in/alvalen-shafel-8a081a254/",
// 		"https://www.instagram.com/alvalens_/",
// 	],
// };
const jsonLd = {
	"@context": "https://schema.org",
	"@type": "Person",
	name: "Harshith Gowda S M",
	url: "https://your-domain.vercel.app",
	jobTitle: "Control Systems & Robotics Engineer",

	alumniOf: [
		{
			"@type": "CollegeOrUniversity",
			name: "Hamburg University of Technology (TUHH)",
		},
		{
			"@type": "CollegeOrUniversity",
			name: "R.V. College of Engineering (RVCE)",
		},
	],

	knowsAbout: [
		"Model Predictive Control",
		"Control Systems",
		"Robotics",
		"System Identification",
		"Machine Learning for Physical Systems",
	],

	sameAs: [
		"https://github.com/Harshithgowdasm",
		"https://www.linkedin.com/in/harshithgowdasm/",
	],
};
export default function RootLayout({ children }) {
	return (
		<html lang="en" className={`${poppins.variable} ${jost.variable}`}>
			<body>
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
				/>
				<ClientTopProgressBar />
				<Navbar />
				{children}
				{/* <Chat /> */}
				<Analytics />
			</body>
		</html>
	);
}
