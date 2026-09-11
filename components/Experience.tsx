"use client";

import { useState } from "react";

const experiences = [
    {
        year: "Present",
        label: "Current Role",
        title: "Software Engineer",
        company: "Accenture",
        description:
            "Building experience in enterprise software development by contributing to business applications, supporting solution delivery, and continuously expanding technical expertise within a professional development environment.",
        focus: [
            "Enterprise Applications",
            "Software Delivery",
            "Agile Development",
            "System Enhancement",
        ],
    },
    {
        year: "2026",
        label: "Internship Experience",
        title: "Certificate Management",
        company: "Grandline Maritime Inc.",
        description:
            "Managed certificate records and documentation, maintained data accuracy, and supported administrative processes that required attention to detail, compliance, and information integrity.",
    },
    {
        year: "2025",
        label: "Professional Experience",
        title: "Online Sales Expert",
        company: "247.ai",
        description:
            "Delivered customer support through digital sales channels while strengthening communication, problem-solving, and customer engagement skills in a fast-paced environment.",
    },
    {
        year: "2023-2025",
        label: "Professional Experience",
        title: "Customer Service Representative",
        company: "Concentrix",
        description:
            "Developed strong customer service and issue-resolution skills by providing timely support, clear communication, and consistent service experiences.",
    },
    {
        year: "2022-2023",
        label: "First Job",
        title: "Service Crew",
        company: "McDonald's",
        description:
            "Built a foundation of teamwork, reliability, time management, and customer service while working in a high-volume environment.",
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
								<h2 className="text-xl font-black uppercase tracking-[-0.05em] sm:text-2xl">{experience.title}</h2>
								<p className="mt-2 text-sm text-[#464feb]">{experience.company}</p>
								<p className="mt-3 max-w-2xl leading-7 text-neutral-500">
									{experience.description}
								</p>

								{"focus" in experience && experience.focus && (
									<div className="mt-5">
										<p className="mb-2 font-mono text-[11px] font-bold uppercase tracking-[0.15em] text-[#464feb]">
											Focus
										</p>

										<div className="flex flex-wrap gap-2">
											{experience.focus.map((item) => (
												<span
													key={item}
													className="border border-neutral-200 px-3 py-1 text-xs text-neutral-600"
												>
													{item}
												</span>
											))}
										</div>
									</div>
								)}
							</div>
						</article>
					))}
				</div>
				<button className="mt-4 font-mono text-xs font-bold uppercase tracking-[0.12em] text-[#464feb] underline underline-offset-4 hover:text-neutral-900" onClick={() => setShowAll(!showAll)} type="button">
					{showAll ? "Show less ↑" : "View all history →"}
				</button>
				<div className="mt-10 grid gap-8 sm:grid-cols-2">
					<div><p className="section-kicker">Education</p><p className="mt-4 text-lg">BS in Information Technology</p><p className="mt-2 text-sm text-[#464feb]">National Teacher's College</p></div>
				</div>
			</div>
		</section>
	);
}