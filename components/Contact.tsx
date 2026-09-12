export default function Contact() {
	return (
		<section id="contact" className="py-16 sm:py-20">
			<div className="mx-auto max-w-5xl px-4 sm:px-6">
				<p className="section-kicker">06 / Contact</p>
				<div className="mt-8 flex flex-col justify-between gap-8 pb-12 lg:flex-row lg:items-end">
					<div>
						<h2 className="max-w-3xl text-4xl font-black uppercase leading-[0.95] tracking-[-0.07em] sm:text-5xl">Let&apos;s connect.</h2>
						<p className="mt-4 max-w-xl text-left text-lg leading-8 text-neutral-500 sm:text-justify">Open to Software Engineering and Application Development opportunities.</p>
					</div>
					<a href="mailto:buhanghangjay@gmail.com" className="brutalist-button bg-[#464feb] px-6 py-3 text-center text-sm font-bold text-white transition-transform">Email me <span aria-hidden="true">↗</span></a>
				</div>
				<div className="grid gap-8 py-8 text-sm sm:grid-cols-2 lg:grid-cols-4">
					<div><p className="section-kicker">Email</p><a className="mt-3 block text-neutral-700 hover:text-[#464feb]" href="mailto:buhanghangjay@gmail.com">buhanghangjay@gmail.com</a></div>
					<div><p className="section-kicker">Location</p><p className="mt-3 text-neutral-700">Manila, Philippines</p></div>
					<div><p className="section-kicker">GitHub</p><a className="mt-3 block text-neutral-700 hover:text-[#464feb]" href="https://github.com/buhanghangjay-git" target="_blank" rel="noreferrer">buhanghangjay-git ↗</a></div>
					<div><p className="section-kicker">LinkedIn</p><a className="mt-3 block text-neutral-700 hover:text-[#464feb]" href="https://www.linkedin.com/in/jay-buhanghang-624a92430" target="_blank" rel="noreferrer">jay-buhanghang ↗</a></div>
				</div>
			</div>
		</section>
	);
}