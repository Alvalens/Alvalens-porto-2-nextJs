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
	title: "Alvalens | Portofolio",

	description:
		"Alvalen, Product-Minded Software Engineer specializing in Next.js, Spring Boot, and AI Solutions. Founder & CTO of Intervyou.",

	author: "Alvalen Shafelbilyunazra",
	siteUrl: "https://www.alvalens.my.id",
	applicationName: "Alvalens",

	keywords: [
		"alvalens",
		"alvalen",
		"alvalen shafel",
		"shafel",
		"alvalen shafelbilyunazra",
		"alvalen shafel bilyunazra",
		"bloodfallen",
		"alvalen porto",
		"alvalen um",
	],

	openGraph: {
		type: "website",
		url: "https://www.alvalens.my.id",
		title: "Alvalens | Portofolio",
		siteName: "Alvalens | Portofolio",
		description: "My name is Alvalens, This is my portofolio website.",
		images: [
			{
				url: "/og-image-rev.png",
				alt: "Alvalens Portofolio",
				width: 1200,
				height: 630,
			},
		],
	},
};

export default function RootLayout({ children }) {
	return (
		<html lang="en" className={`${poppins.variable} ${jost.variable}`}>
			<body>
				<ClientTopProgressBar />
				<Navbar />
				{children}
				<Chat />
				<Analytics />
			</body>
		</html>
	);
}
