import dynamic from "next/dynamic";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;
import Icon from "@/public/img/icon.png";
import "./nprogress.css";

export const metadata = {
	title: "Alvalens | Portofolio",
	description:
		"My name is Alvalens, I'm a web developer and I'm passionate about it. I'm currently studying at Universitas Negeri Malang.",
	image: Icon,
	author: "Alvalens",
	keywords:
		"alvalens, alvalen, alvalen shafel, shafel, alvalen shafelbilyunazra, alvalen shafel bilyunazra, bloodfallen, alvalen porto, porto alvalens, alvalens portofolio, web alvalen, alvalens web, alvalens website, website alvalens, alvalens web developer, web portofolio alvalens, alvalen profile, profil alvalen",
	
};

const TopProgressBar = dynamic(() => import("@/components/TopProgressBar"), {
	ssr: false,
});

const Meta = () => (
	<>
		<meta name="description" content={metadata.description} />
		<meta property="og:title" content={metadata.title} />
		<meta property="og:description" content={metadata.description} />
		<meta property="og:image" content={metadata.image} />
		<meta property="og:type" content="website" />
		<meta name="application-name" content="Alvalens | Portofolio" />
		<meta name="apple-mobile-web-app-capable" content="yes" />
		<meta name="author" content="Alvalens" />
		</>
);

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<head>
			<link rel="icon" href="/img/icon.png" sizes="any" />
			<Meta />
			</head>
			<body>
				
				<TopProgressBar />
				<Navbar />
				{children}
			</body>
		</html>
	);
}
