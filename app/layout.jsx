import "./globals.css";
import Navbar from "@/components/Navbar";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;
import "./nprogress.css";
import { Analytics } from "@vercel/analytics/react";
import ClientTopProgressBar from "@/components/ClientTopProgressBar";

export const metadata = {
	title: "Mansoor Khan | Portofolio",

	description:
		"My name is Mansoor khan, I'm a web developer and a Data Analyst and I'm passionate about it. I'm currently working as a Data Analyst at NAVTTC Pakistan.",

	author: "Mansoor khan",
	siteUrl: "",
	applicationName: "Mansoor",

	keywords:[
		"Mansoor Khan",
		"Mansoor Khan Developer",
		"Mansoor Khan Web Developer",
		"Mansoor Khan Software Engineer",
		"Mansoor Khan Data Analyst",
		"Mansoor Khan Next.js",
		"Mansoor Khan React",
		"Mansoor Khan Power BI",
		"Mansoor Khan Portfolio",
		"Mansoor Khan IMSciences",
		"Mansoor Khan Projects",
		"Mansoor Khan Dashboard Developer",
		"Mansoor Khan Full Stack",
		"Mansoor Khan Business Fest",
		"Mansoor Khan Lane View Driving School",
		"Mansoor Khan Student Recommender System",
		"Mansoor Khan Vocational Training System",
		"Mansoor Khan IM Hackathon",
		"Mansoor Khan IM Olympiad",
	],


	openGraph: {
		type: "website",
		url: "",
		title: "Mansoor khan | Portofolio",
		site_name: "Mansoor khan | Portofolio",
		description: "My name is Mansoor, This is my portofolio website.",
		width: 1200,
		height: 630,
		images: [
			{
				url: ".png",
				alt: "Mansoor Portofolio",
			},
		],
		site_name: "Mansoor khan | Portofolio",
	},
	icons: "/M.png",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				<ClientTopProgressBar />
				<Navbar />
				{children}
				<Analytics />
			</body>
		</html>
	);
}
