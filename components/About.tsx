export default function About() {
	return (
		<section
			id="about"
			className="py-16 sm:py-20 lg:ml-60"
		>
			<div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.35fr_0.65fr] lg:gap-16">

				{/* Left Column */}
				<div>
					<p className="section-kicker">01 / About</p>

					<h2 className="mt-4 max-w-md text-3xl font-semibold uppercase leading-tight tracking-[-0.04em] sm:text-4xl">
						Building With Purpose, Not Just Code
					</h2>
				</div>

				{/* Right Column */}
				<div className="max-w-2xl text-base leading-8 text-neutral-500 sm:text-lg">

					<p>
						Technology is most valuable when it solves real problems.
					</p>

					<p className="mt-6">
						I enjoy building applications that simplify workflows,
						improve user experiences, and help organizations operate
						more effectively.
					</p>

					<p className="mt-6">
						As a Software Engineer and Packaged Application Development
						Associate, I continue to strengthen my expertise in enterprise
						application development, modern web technologies, and
						practical software solutions that create meaningful business
						value.
					</p>

				</div>

			</div>
		</section>
	);
}