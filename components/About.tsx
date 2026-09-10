export default function About() {
	return (
		<section id="about" className="py-16 sm:py-20 lg:ml-60">
			<div className="mx-auto grid max-w-6xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.35fr_0.65fr] lg:gap-10">
				<div>
					<p className="section-kicker">01 / About</p>
					<h2 className="mt-4 text-3xl font-black uppercase tracking-[-0.06em] sm:text-4xl">A curious builder with a practical mindset</h2>
				</div>
					<div className="max-w-2xl text-left text-lg leading-8 text-neutral-500 sm:text-justify">
					<p>
						Technology, for me, is a tool for solving problems and creating meaningful experiences.
					</p>
					<p className="mt-6">
						As a Software Engineer and Packaged Application Development Associate, I focus on building practical applications, improving business processes, and growing through real-world projects, modern technologies, and continuous learning.
					</p>
				</div>
			</div>
		</section>
	);
}