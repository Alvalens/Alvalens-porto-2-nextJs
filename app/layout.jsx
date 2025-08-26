import "./globals.css";
import Navbar from "@/components/Navbar";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;
import "./nprogress.css";
import { Analytics } from "@vercel/analytics/react";
import Chat from "@/components/Chat";
import ClientTopProgressBar from "@/components/ClientTopProgressBar";

export const metadata = {
    title: "Alvalens | Portofolio",

    description:
		"My name is Alvalens, I'm a web developer and I'm passionate about it. I'm currently studying at Universitas Negeri Malang.",

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
		title: "Sandi Hari Sukmana | Portofolio",
		site_name: "Sandi | Portofolio",
		description: "Nama Saya Sandi Hari Sukmana, Ini adalah portofolio saya",
		width: 1200,
		height: 630,
		images: [
			{
				url: "/og-image-rev.png",
				alt: "Sandi Hari Sukmana",
			},
		],
		site_name: "Sandi Hari Sukmana | Portofolio",
	}
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
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
