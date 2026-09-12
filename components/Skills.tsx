const skillGroups = [
	{
		name: "Languages",
		description: "Programming and database languages I have worked with.",
		skills: ["Java", "JavaScript", "Python", "PHP", "SQL"],
	},
	{
		name: "Frontend",
		description: "Technologies I use to create responsive web interfaces.",
		skills: ["React", "HTML", "CSS", "Tailwind CSS"],
	},
	{
		name: "Backend & APIs",
		description: "Tools and concepts used for application logic and integration.",
		skills: ["Node.js", "REST APIs"],
	},
	{
		name: "Tools & Platforms",
		description: "Platforms that support development, delivery, and collaboration.",
		skills: [
			"Git",
			"Azure",
			"Salesforce",
			"Zendesk",
			"Microsoft Office",
		],
	},
];

export default function Skills() {
	return (
		<section
			id="skills"
			className="py-16 sm:py-20"
			aria-labelledby="skills-heading"
		>
			<div className="mx-auto max-w-5xl px-4 sm:px-6">
				<div className="grid gap-10 lg:grid-cols-[0.35fr_0.65fr] lg:gap-16">
					{/* Section introduction */}
					<div>
						<p className="section-kicker">02 / Skills</p>

						<h2
							id="skills-heading"
							className="mt-4 max-w-md text-3xl font-semibold uppercase leading-tight tracking-[-0.04em] sm:text-4xl"
						>
							Tools I Use to Turn Ideas Into Outcomes
						</h2>

						<p className="mt-6 max-w-md text-sm leading-7 text-neutral-500">
							A growing technical foundation shaped through application
							development, academic projects, and continuous hands-on
							learning.
						</p>
					</div>

					{/* Skill groups */}
					<div className="grid content-start gap-x-10 gap-y-12 sm:grid-cols-2">
						{skillGroups.map((group, groupIndex) => (
							<article key={group.name}>
								<div className="flex items-center gap-3">
									<span
										className="font-mono text-[11px] text-neutral-400"
										aria-hidden="true"
									>
										{String(groupIndex + 1).padStart(2, "0")}
									</span>

									<h3 className="font-mono text-xs font-bold uppercase tracking-[0.16em] text-[#464feb]">
										{group.name}
									</h3>
								</div>

								<p className="mt-4 max-w-sm text-sm leading-6 text-neutral-500">
									{group.description}
								</p>

								<ul
									className="mt-5 flex flex-wrap gap-x-5 gap-y-3"
									aria-label={`${group.name} skills`}
								>
									{group.skills.map((skill) => (
										<li
											key={skill}
											className="text-sm font-medium text-neutral-700 transition-colors duration-200 hover:text-[#464feb]"
										>
											{skill}
										</li>
									))}
								</ul>
							</article>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}