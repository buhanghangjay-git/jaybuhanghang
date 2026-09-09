const skillGroups = [
	{ name: "Development", skills: ["Java", "JavaScript", "Python", "PHP", "SQL"] },
	{ name: "Frontend", skills: ["React", "Node.js", "HTML", "CSS", "Tailwind CSS", "REST APIs"] },
	{ name: "Tools & platforms", skills: ["Git", "Azure", "Salesforce", "Zendesk", "Microsoft Office"] },
];

export default function Skills() {
	return (
		<section id="skills" className="py-16 sm:py-20 lg:ml-60">
			<div className="mx-auto grid max-w-6xl gap-8 px-6 lg:grid-cols-[0.35fr_0.65fr] lg:gap-10">
				<div>
					<p className="section-kicker">02 / Skills</p>
					<h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">Tools I use to turn ideas into outcomes.</h2>
				</div>
				<div className="grid content-start gap-6 sm:grid-cols-2 lg:grid-cols-3">
					{skillGroups.map((group) => (
						<div key={group.name}>
							<p className="section-kicker mb-3">{group.name}</p>
							<div className="grid gap-2">
								{group.skills.map((skill) => <span className="bg-white/80 px-4 py-3 text-sm font-medium text-neutral-700 transition-transform hover:-translate-y-1 hover:bg-[#464feb] hover:text-white" key={skill}>{skill}</span>)}
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}