import Image from "next/image";

import { motion } from "framer-motion";
import { useState } from "react";
import Me from "@/public/Me.jpg";

function Wrapper({ children }) {
	return (
		<div className="mx-auto container gap-10 p-10 grid grid-cols-1 my-10">
			<motion.div
				className="flex justify-center items-start flex-col mb-5"
				initial={{
					opacity: 0,
					y: 50,
				}}
				whileInView={{
					opacity: 1,
					y: 0,
				}}
				transition={{
					delay: 0.3,
					duration: 0.8,
					type: "spring",
					stiffness: 100,
				}}>
				{children}
			</motion.div>
		</div>
	);
}

export default function Education() {
	const [isExpanded, setIsExpanded] = useState(false);







	return (
		<Wrapper>
			<section className="grid gap-8 md:gap-12">
				{" "}
				{/* Header */}
				<motion.div
					className="text-center space-y-2"
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}>
					<h1 className="text-3xl md:text-4xl font-bold tracking-tighter">
						Education
					</h1>
					<p className="text-muted-foreground max-w-[800px] mx-auto">
						Get to know more about my educational background.
					</p>
				</motion.div>
				{/* Main Content */}
				<div className="grid grid-cols-1 md:grid-cols-1 gap-8">
					{/* Education Section - Left */}
					<motion.div
						className="px-5"
						initial={{ opacity: 0, x: -50 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8, delay: 0.2 }}>
						<div className="font-medium text-lg mb-4">2008 - 2025</div>
						<div>
							<h2 className="font-semibold text-xl">
								Institute of Management Sciences
							</h2>
							<h3 className="text-md font-normal mb-3">
								Bachelors of Software Engineering
							</h3>
							<div className="gap-4 mb-4 flex items-stretch md:h-[300px] xl:h-[400px]">
								<div className="flex-[1] transition-all duration-300 ease-in-out hover:flex-[0.5]  group">
									<Image
										src={Me}
										width={400}
										height={225}
										alt="University"
										className="rounded-lg w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300 ease-in-out"
									/>
								</div>
								<div className="flex-[1] transition-all duration-300 ease-in-out hover:flex-[0.5] group">
									<Image
										src={Me}
										width={400}
										height={225}
										alt="University"
										className="rounded-lg w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300 ease-in-out"
									/>
								</div>
								<div className="flex-[1] transition-all duration-300 ease-in-out hover:flex-[0.5] group">
									<Image
										src={Me}
										width={400}
										height={225}
										alt="University"
										className="rounded-lg w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300 ease-in-out"
									/>
								</div>
							</div>
							<div className="flex items-center gap-2">
								<p className="text-gray-600 text-justify title text-lg">
									Aspiring to become a professional Software Engineer, I&rsquo;m
									currently pursuing my Bachelor&rsquo;s degree in{" "}
									<span className="text-black font-medium">
										Software Engineering
									</span>{" "}
									at{" "}
									<span className="text-black font-medium">
										Institute of Management Sciences, Peshawar
									</span>
									. My journey in tech is driven by curiosity and
									creativity—combining web development with cutting-edge AI
									research and implementation.
									<br />
									<br />
									I have built impactful digital solutions in{" "}
									<span className="text-black font-medium">
										Web Development
									</span>{" "}
									and{" "}
									<span className="text-black font-medium">
										Data Analytics
									</span>
									. From building full-stack applications to designing Power BI
									dashboards, I thrive on solving real-world problems with code
									and data.
									<br />
									<br />
									<span className="text-black font-medium">Education:</span>
									<br />
									<span className="text-black font-medium">
										Institute of Learning and Motivation (ILM)
									</span>{" "}
									— Secondary School Certificate (Matric), 2008 – 2018
									<br />
									<span className="text-black font-medium">
										Edwardes College Peshawar
									</span>{" "}
									— Higher Secondary School Certificate (HSSC), 2019 – 2020
									<br />
									<span className="text-black font-medium">
										Institute of Management Sciences
									</span>{" "}
									— Bachelor&rsquo;s in Software Engineering, 2021 – 2025
								</p>
							</div>

							<div className="flex flex-wrap gap-2 mt-4 text-sm">
								<div className="bg-gray-300 text-black px-2 py-1 rounded-2xl">
									GPA: 3.31 out of 4
								</div>
							</div>
						</div>
					</motion.div>{" "}


				</div>
			</section>
		</Wrapper>
	);
}
