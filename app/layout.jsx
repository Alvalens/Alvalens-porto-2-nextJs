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
    title: "Sandi Hari Sukmana | Portofolio",

    description:
		"My name is Sandi Hari Sukmana, Leadtech Developer, webmaster & android dev ",

    author: "Sandi Hari Sukmana",
    siteUrl: "https://sandi-porto-hs.vercel.app/about",
    applicationName: "Sandi Hari Sukamana",

    keywords: [
		"Sandi Hari Sukamana",
		"Sandi",
		"Sandi shafel",
		"shafel",
		"Sandi Hari",
		"Sandi Hari",
		"Vanilloid",
		"Sandi porto",
		"Sandi um",
	],

    openGraph: {
		type: "website",
		url: "https://sandi-porto-hs.vercel.app/about",
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
