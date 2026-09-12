const certifications = [
	{
		number: "01",
		name: "Microsoft Office Specialist",
		issuer: "Microsoft",
		status: "Certified",
		detail:
			"Professional productivity, document creation, and workplace technology fundamentals.",
	},
	{
		number: "02",
		name: "HTML & CSS Certification",
		issuer: "freeCodeCamp",
		status: "Certified",
		detail:
			"Responsive web structure, accessibility, styling, and modern web fundamentals.",
	},
];

const currentFocus = [
	"Enterprise Applications",
	"Azure Cloud",
	"REST APIs",
	"System Design",
	"AI-Assisted Development",
];

export default function Certifications() {
	return (
		<section
			id="certifications"
			className="py-16 sm:py-20"
		>
			<div className="mx-auto max-w-5xl px-4 sm:px-6">

				<p className="section-kicker">
					05 / Certifications & Learning
				</p>

				<div className="mt-8 grid gap-10 sm:grid-cols-2">
					{certifications.map((certification) => (
						<article
							key={certification.name}
							
						>
							<div className="flex items-start justify-between gap-6">
								<span className="text-xs text-neutral-400">
									{certification.number}
								</span>

								<span className="text-xs uppercase tracking-[0.16em] text-[#464feb]">
									{certification.status}
								</span>
							</div>

							<h2 className="mt-10 text-2xl font-black uppercase tracking-[-0.04em]">
								{certification.name}
							</h2>

							<p className="mt-3 text-sm text-[#464feb]">
								{certification.issuer}
							</p>

							<p className="mt-5 max-w-md text-sm leading-7 text-neutral-500">
								{certification.detail}
							</p>
						</article>
					))}
				</div>

				<div className="mt-16">
					<div className="grid gap-6 sm:grid-cols-[0.3fr_0.7fr]">

						<div>
							<p className="font-mono text-xs font-bold uppercase tracking-[0.16em] text-[#464feb]">
								Current Focus
							</p>
						</div>

						<div>
							<p className="max-w-2xl text-sm leading-7 text-neutral-500">
								Continuously strengthening my technical foundation through enterprise application development, cloud technologies, and modern software engineering practices.
							</p>

							<div className="mt-6 flex flex-wrap gap-2">
								{currentFocus.map((focus) => (
									<span
										key={focus}
										className="border border-neutral-200 px-3 py-2 font-mono text-[11px] font-bold uppercase tracking-[0.08em] text-neutral-600"
									>
										{focus}
									</span>
								))}
							</div>

						</div>

					</div>
				</div>

			</div>
		</section>
	);
}