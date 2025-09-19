"use client";
import Hr from "@/components/Hr";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const experiences = [
	{
		id: 1,
		startDate: "July 2022",
		endDate: "Sept 2022",
		company: "Guideway",
		position: "Front-end Web Development Intern",
		type: "Remote",
		location: "Peshawar, Pakistan",
		description:
			"Built a demo web platform for tutor booking using HTML, CSS, Bootstrap, JS. Focused on intuitive UI for tutor and student interactions.",
		skills: ["Bootstrap", "HTML", "CSS"],
	},
	{
		id: 2,
		startDate: "December 2022",
		endDate: "January 2024",
		company: "Veevo Tech",
		position: "Web Engineer | Front-end Web Developer",
		type: "Hybrid",
		location: "Peshawar, Pakistan",
		description: "**Lane View Driving School Web App (Next.js, Express.js)** – Built a complete course booking platform with postal code–based filtering, secure Stripe payments, and an Admin Portal to manage registrations. Designed and developed the index, hourly courses, and intensive courses pages as a Frontend Developer. **Parvenetta – Custom Apparel & Suit Designer (Next.js)** – Developed Build Your Brand (BYB) and Bespoke modules for real-time apparel and suit customization. Implemented a 9-stage customization flow with real-time previews, file upload support, and email integration for news and updates. **Business Fest 2024 Web App (Next.js, OpenAI LLM)** – Designed and developed modules for student and guest registrations, stall submissions, and live stall evaluations. Integrated OpenAI LLM for automatic stall idea evaluation with instant feedback and created an Admin Dashboard to manage sign-ups and view real-time evaluation results.",
		skills: ["Generative AI", "Open AI LLM", "Next.js", "Tailwind CSS", "JSX", "Problem Solving", "Prompt Engineering", "Teamwork"],
	}
	,
	{
		id: 3,
		startDate: "Feb 2024",
		endDate: "May 2024",
		company: "National & Vocational Techincal Training Commission",
		position: "React and Python Trainee",
		type: "On-site",
		location: "Peshawar, Pakistan",
		description:
			"Completed a 4-month training in React.js, mastering Components, Props, useState, useEffect, useContext, useReducer, React Router, and JSX to build real-world applications with dynamic UI and efficient logic. Built real-world apps with dynamic UI and efficient logic. ",
		skills: ["React.js", "MySQL", "JavaScript", "Python", "Numpy", "Pandas"],
	},
	{
		id: 4,
		startDate: "2024 july",
		endDate: "Jul 2025",
		company: "Pixtrum",
		position: "Software Engineer",
		type: "On-Site",
		location: "Peshawar, Pakistan",
		description: "University Recommender System & Application Progress Tracker (Next.js) – Collaborated in a team of two as the Front-end Developer to build a platform recommending suitable international universities based on CGPA, language, education years, target country, and preferred course. Enabled applicants to submit applications online with personal, academic, and document details, along with an Application Progress Tracker to monitor each step of their application. Built an Admin Panel with CRUD functionality for managing users, applications, countries, universities, programs, and departments, while providing real-time application status updates. Focused on front-end architecture, component-based data flow, and secure API integration. Personal Portfolio (Next.js) – Designed and developed a personal portfolio website for a graphic designer to showcase projects, skills, and contact details with a focus on modern UI/UX, responsive design, and optimized performance."
		, skills: ["Next.js", "Javascript", "Tailwind CSS", "JSX", "Problem Solving", "Prompt Engineering", "Teamwork"],
	},
	{
		id: 5,
		startDate: "July 2025",
		endDate: "Present",
		company: "NAVTTC",
		position: "Web Developer & Data Analyst",
		type: "On-Site",
		location: "Islamabad, Pakistan",
		description: "Prime Minister’s Overseas Employment Program – Comprehensive Data Analytics Dashboard (Registration · Enrollment · Attendance · Placements · Trainers · Feedback · KPIs). Designed and maintained end-to-end Power BI dashboards covering student registration, enrollment, multi-institute attendance, placements, trainer performance, and feedback analysis. Built robust ETL pipelines to clean, transform, and integrate data from Excel, SQL, and institutional records. Developed KPIs and performance metrics to track training effectiveness, placement success rates, and institute-wise performance. Automated attendance and enrollment reporting across institutes to improve transparency and decision-making, while delivering actionable insights to stakeholders for program monitoring and policy improvements."
		, skills: [
			"Next.js",
			"React.js",
			"JavaScript",
			"TypeScript",
			"Tailwind CSS",
			"Express.js",
			"SQL",
			"Power BI",
			"Excel VBA",
			"Python",
			"ETL Pipelines"
		],

	},
	
];

experiences.reverse();

function Title() {
	return (
		<div className="mt-16 flex flex-col justify-start items-center w-full pl-10 md:pl-32">
			<div className="flex justify-center items-center flex-col my-5 self-start">
				<Hr variant="long"></Hr>
				<motion.h1
					className="text-3xl font-bold mt-3"
					initial={{
						opacity: 0,
						x: -200,
					}}
					whileInView={{
						opacity: 1,
						x: 0,
					}}
					transition={{
						delay: 0.7,
						type: "spring",
					}}>
					Profesional Experience
				</motion.h1>
			</div>
		</div>
	);
}

function TimelineCard({ experience, index, isEven }) {
	return (
		<motion.div
			initial={{ opacity: 0, y: -20 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ delay: index * 0.15, duration: 0.5 }}
			className={`flex ps-10 md:ps-0 ${isEven
				? "md:justify-center md:translate-x-68"
				: "md:justify-center md:-translate-x-68"
				} justify-center mb-4`}>
			<div className="bg-gradient-to-r from-black to-gray-800 text-white px-12 py-3 rounded-xl shadow-lg border border-gray-600 min-w-max">
				<div className="flex items-center justify-center gap-6">
					<div className="text-center">
						<div className="text-sm font-bold">{experience.startDate}</div>
						<div className="text-xs text-gray-300">Start</div>
					</div>
					<div className="w-px h-8 bg-gray-500"></div>
					<div className="text-center">
						<div className="text-sm font-bold">{experience.endDate}</div>
						<div className="text-xs text-gray-300">End</div>
					</div>					<div className="w-px h-8 bg-gray-500"></div>
					<div className="text-center">
						<div className="text-sm font-medium text-gray-400">
							{experience.location}
						</div>
						<div className="text-xs text-gray-300">Location</div>
					</div>
				</div>
			</div>
		</motion.div>
	);
}

function ExperienceCard({ experience, index, isEven }) {
	return (
		<motion.div
			initial={{ opacity: 0, y: 50 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ delay: index * 0.2, duration: 0.6 }}
			className={`relative group ${isEven ? "md:ml-auto md:pl-12" : "md:mr-auto md:pr-12"
				} md:w-1/2`}>
			{" "}
			{/* Card */}
			<div
				className={`bg-white/20 backdrop-blur-sm border border-gray-300/30 rounded-2xl p-6 shadow-lg 
				hover:shadow-xl hover:bg-white/30 transition-all duration-300 ml-12 md:ml-0`}>
				{/* Company & Position */}
				<div className="mb-4">
					<h3 className="font-bold text-xl text-black mb-1">
						{experience.company}
					</h3>
					<h4 className="font-medium text-lg text-gray-700">
						{experience.position}
						<span className="text-sm font-normal text-gray-500 ml-2">
							• {experience.type}
						</span>
					</h4>
				</div>

				{/* Description */}
				<p className="text-gray-600 text-justify leading-relaxed mb-4">
					{experience.description}
				</p>

				{/* Skills */}
				<div className="flex flex-wrap gap-2">
					{experience.skills.map((skill, idx) => (
						<span
							key={idx}
							className="bg-gray-200/60 hover:bg-gray-300/60 border border-gray-400/40 text-black px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 backdrop-blur-sm hover:scale-105">
							{skill}
						</span>
					))}
				</div>
			</div>
		</motion.div>
	);
}

function Wrapper({ children }) {
	return (
		<div className="mx-auto container px-6 py-10">
			<div
				className="flex justify-center items-center flex-col">
				{children}
			</div>
		</div>
	);
}

export default function Experience() {
	const [showAll, setShowAll] = useState(false);
	const displayedExperiences = showAll ? experiences : experiences.slice(0, 3);

	return (
		<>
			<Title />
			<Wrapper>
				{" "}
				<div className="relative w-full max-w-6xl mx-auto">
					{" "}
					{/* Timeline line - hidden on mobile, visible on md+ */}
					<div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-black via-gray-400 to-transparent h-full"></div>
					{/* Mobile timeline line */}
					<div className="md:hidden absolute left-0 w-1 bg-gradient-to-b from-black via-gray-400 to-transparent h-full"></div>{" "}
					{/* Experience cards */}
					<div className="space-y-12 md:space-y-16 relative">
						<AnimatePresence>
							{displayedExperiences.map((experience, index) => (
								<div key={experience.id} className="relative">
									{/* Timeline period card - flows naturally above content */}
									<TimelineCard
										experience={experience}
										index={index}
										isEven={index % 2 === 1}
									/>

									{/* Timeline dot - positioned at the start of the experience card */}
									<div
										className={`absolute w-6 h-6 bg-black rounded-full border-4 border-white shadow-lg z-30
										md:left-1/2 md:-translate-x-1/2 md:top-4
										left-0 -translate-x-1/2 top-5`}
									/>

									{/* Experience content card */}
									<ExperienceCard
										experience={experience}
										index={index}
										isEven={index % 2 === 1}
									/>
								</div>
							))}
						</AnimatePresence>
					</div>
					{/* Expand/Collapse button */}
					{experiences.length > 3 && (
						<motion.div
							className="flex justify-center mt-12"
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1 }}
							transition={{ delay: 0.5 }}>
							<button
								onClick={() => setShowAll(!showAll)}
								className="bg-black hover:bg-gray-800 text-white px-8 py-3 rounded-full font-medium 
									transition-all duration-300 hover:scale-105 shadow-lg flex items-center gap-2">
								{showAll ? (
									<>
										Show Less
										<svg
											className="w-4 h-4 transform rotate-180"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24">
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M19 9l-7 7-7-7"
											/>
										</svg>
									</>
								) : (
									<>
										View More Experience
										<svg
											className="w-4 h-4"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24">
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M19 9l-7 7-7-7"
											/>
										</svg>
									</>
								)}
							</button>
						</motion.div>
					)}{" "}
					{/* Gradient fade effect at bottom */}
					{!showAll && (
						<div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-stale-300 to-transparent pointer-events-none"></div>
					)}
				</div>
			</Wrapper>
		</>
	);
}
