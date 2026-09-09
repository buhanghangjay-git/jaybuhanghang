const certifications = [
	{
		name: "Microsoft Office Specialist",
		issuer: "Microsoft",
		detail: "Professional productivity and documentation",
	},
	{
		name: "HTML & CSS Certification",
		issuer: "freeCodeCamp",
		detail: "Responsive web structure and styling",
	},
];

export default function Certifications() {
	return (
		<section id="certifications" className="py-16 sm:py-20 lg:ml-60">
			<div className="mx-auto max-w-6xl px-6">
				<p className="section-kicker">05 / Certifications</p>
				<div className="mt-8 grid gap-10 sm:grid-cols-2">
					{certifications.map((certification, index) => (
						<article key={certification.name}>
							<div className="flex items-start justify-between gap-6">
								<span className="text-xs text-neutral-400">0{index + 1}</span>
								<span className="text-xs uppercase tracking-[0.16em] text-[#464feb]">Certified</span>
							</div>
							<h2 className="mt-12 text-2xl font-bold uppercase tracking-[-0.04em]">{certification.name}</h2>
							<p className="mt-3 text-sm text-neutral-500">{certification.issuer}</p>
							<p className="mt-5 text-sm text-neutral-400">{certification.detail}</p>
						</article>
					))}
				</div>
			</div>
		</section>
	);
}