import dynamic from "next/dynamic";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;
import Icon from "@/public/img/icon.ico";
import "./nprogress.css";

export const metadata = {
	title: "Alvalens | Portofolio",
	description:
		"My name is Alvalens, I'm a web developer and I'm passionate about it. I'm currently studying at Universitas Negeri Malang.",
	image: Icon,
	author: "Alvalens",
	siteUrl: "https://www.alvalens.my.id",
	ico: Icon,
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
	author: "Alvalen Shafelbilyunazra",
	authorDescription: "I'm a web developer and I'm passionate about it.",
	openGraph: {
		type: "website",
		url: "https://www.alvalens.my.id",
		title: "Alvalens | Portofolio",
		description: "My name is Alvalens, This is my portofolio website.",
		image: Icon,
		siteName: "Alvalens | Portofolio",
	},
	canonical: "https://www.alvalens.my.id",
};

const TopProgressBar = dynamic(() => import("@/components/TopProgressbar"), {
	ssr: false,
});



export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				
				<TopProgressBar />
				<Navbar />
				{children}
			</body>
		</html>
	);
}
