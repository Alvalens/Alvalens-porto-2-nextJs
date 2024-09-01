
import Trivia from "@/public/projects/main-project/trivia.png";
import SakuSenyum from "@/public/projects/main-project/saku-senyum.png";
import LUDOang from "@/public/projects/main-project/ludo.png";
import ReactChatMain from "@/public/projects/main-project/react-chat.png";
import ReactTools from "@/public/projects/main-project/react-tools.png";
import AlephBot from "@/public/projects/main-project/aleph-bot.png";
import LPTK from "@/public/projects/lptk/lptk1.png";
import NUINO from "@/public/projects/ino/ino1.png";

export const projects = [
	{
		title: "Generative Trivia",
		desc: "Generative Trivia is a web application that I created using Gemini AI API to generate trivia questions and answers.",
		year: "2024",
		tech: "NextJS, Typescript, Gemini AI API, Tailwind CSS, Shadcn UI, Firebase",
		bg: Trivia,
		slug: "trivia",
		category: 1,
	},
	{
		title: "Saku Senyum",
		desc: "A website for UMKM sales management. This project is a client project that I created as a Fullstack Developer.",
		year: "2024",
		tech: "NextJS, Typescript, Tailwind CSS, Shadcn UI, Prisma, MySQL",
		bg: SakuSenyum,
		slug: "saku-senyum",
		category: 1,
	},
	{
		title: "LUDOang",
		desc: "LUDOang is a game created using python and pygame. This game is inspired by LUDO game.",
		year: "2023",
		tech: "Python, Pygame, OpenGL",
		bg: LUDOang,
		slug: "ludoang",
		category: 9,
	},
	{
		title: "React Chat WebApp",
		desc: "My second React project. This project is a realtime chat webapp that I created using ReactJS, Firebase, and TailwindCSS.",
		year: "2023",
		tech: "Javascript, React Js, Firebase, Daisy UI",
		bg: ReactChatMain,
		slug: "react-chat",
		category: 1,
	},
	{
		title: "React Tools",
		desc: "My first React project. contain three main tools: Todo List, Note, and Expense Tracker that usefull for daily activity",
		year: "2023",
		tech: "Javascript, React Js, TailwindCSS",
		bg: ReactTools,
		slug: "react-tools",
		category: 1,
	},
	{
		title: "Aleph Discord Bot",
		desc: "Discord bot that can search images on google and send the result to discord channel, with this bot you can search images on google without leaving discord.",
		year: "2023",
		tech: "Python, Serp API, Discord.py",
		bg: AlephBot,
		slug: "aleph-discord-bot",
		category: 9,
	},
	{
		title: "LPTK Cup 2023 Website",
		desc: "LPTK Cup 2023 is a website for a competition that held by Universitas Negeri Malang. This is my second freelance project using Laravel.",
		year: "2023",
		tech: "PHP, Laravel, Bootstrap, JQuery, MySQL",
		bg: LPTK,
		slug: "lptk-cup-2023",
		category: 1,
	},
	{
		title: "NU INO Website",
		desc: "My first freelance project. This project is a website for a School based on a JALAKAR curriculum. The website is built mainly using Laravel and Bootstrap.",
		year: "2023",
		tech: "PHP, Laravel, Livewire, Bootstrap, JQuery, MySQL",
		bg: NUINO,
		slug: "nu-ino-website",
		category: 1,
	},
];
