"use client";

import { useState } from "react";

const experiences = [
	{
		year: "Present",
		label: "Current role",
		title: "Software Engineer, Packaged Application Development",
		company: "Accenture",
		description: "Building experience in enterprise application development, software delivery, and practical technology solutions.",
	},
	{
		year: "2026",
		label: "Internship experience",
		title: "Certificate Management",
		company: "Grandline Maritime Inc.",
		description: "Edited and updated seafarer certificates, validated records, and maintained accurate documentation while developing a sharp eye for detail and data quality.",
	},
	{
		year: "2025",
		label: "Professional experience",
		title: "Online Sales Expert",
		company: "247.ai",
		description: "Supported customers through digital sales conversations while developing communication, product, and problem-solving skills.",
	},
	{
		year: "2023",
		label: "Professional experience",
		title: "Customer Service Representative",
		company: "Concentrix",
		description: "Built a customer-first foundation through clear communication, careful issue resolution, and consistent service delivery.",
	},
	{
		year: "2022",
		label: "First job",
		title: "Service Crew",
		company: "McDonald's",
		description: "Developed reliability, teamwork, customer service, and the ability to work calmly in a fast-paced environment.",
	},
];

export default function Experience() {
	const [showAll, setShowAll] = useState(false);
	const visibleExperiences = showAll ? experiences : experiences.slice(0, 3);

	return (
		<section id="experience" className="py-16 sm:py-20 lg:ml-60">
			<div className="mx-auto max-w-6xl px-4 sm:px-6">
				<p className="section-kicker">04 / Experience</p>
				<div className="relative mt-8 py-2">
					{visibleExperiences.map((experience, index) => (
						<article className="relative grid gap-5 py-6 pl-8 sm:grid-cols-[0.3fr_0.7fr] sm:pl-0" key={experience.title}>
							<span className={`absolute left-0 top-10 h-3 w-3 rounded-full ${index === 0 ? "bg-[#464feb]" : "bg-neutral-400"} sm:left-[calc(30%-6px)]`} />
							<div className="text-sm text-neutral-500"><p>{experience.year}</p><p className="mt-1 text-xs uppercase tracking-[0.08em]">{experience.label}</p></div>
							<div>
								<h2 className="text-2xl font-bold uppercase tracking-[-0.04em]">{experience.title}</h2>
								<p className="mt-2 text-sm text-[#464feb]">{experience.company}</p>
								<p className="mt-3 max-w-2xl text-left leading-7 text-neutral-500 sm:text-justify">{experience.description}</p>
							</div>
						</article>
					))}
				</div>
				<button className="mt-4 font-mono text-xs font-bold uppercase tracking-[0.12em] text-[#464feb] underline underline-offset-4 hover:text-neutral-900" onClick={() => setShowAll(!showAll)} type="button">
					{showAll ? "Show less ↑" : "View all history →"}
				</button>
				<div className="mt-10 grid gap-8 sm:grid-cols-2">
					<div><p className="section-kicker">Education</p><p className="mt-4 text-lg">BS Information Technology</p><p className="mt-2 text-sm text-[#464feb]">National Teachers College</p></div>
				</div>
			</div>
		</section>
	);
}