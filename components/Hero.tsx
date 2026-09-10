import Image from "next/image";

export default function Hero() {
	return (
		<section id="top" className="relative overflow-hidden lg:ml-60">
			<div className="mx-auto grid min-h-[680px] max-w-6xl items-end gap-12 px-4 pb-14 pt-28 sm:min-h-[760px] sm:gap-16 sm:px-6 sm:pb-20 sm:pt-36 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-16 lg:pb-24">
				<div className="order-2 lg:order-1">
					<h1 className="max-w-3xl text-3xl font-black uppercase leading-[0.9] tracking-[-0.08em] text-neutral-950 sm:text-4xl lg:text-[clamp(2.5rem,3vw,3.5rem)]">Jay Buhanghang</h1>
					<p className="mt-6 max-w-xl text-left text-lg leading-8 text-neutral-500 sm:mt-8 sm:text-justify">I&apos;m a Software Engineer and Packaged Application Development Associate focused on practical software solutions, modern web technologies, and enterprise applications.</p>
					<div className="mt-10 flex flex-wrap items-center gap-6">
						<a href="#projects" className="brutalist-button bg-[#464feb] px-6 py-3 text-sm font-bold text-white transition-transform">Explore my work <span aria-hidden="true">↗</span></a>
						<a href="/cvcvcv.pdf" download="Jay-Buhanghang-CV.pdf" className="text-sm font-medium text-neutral-500 underline decoration-neutral-300 underline-offset-8 transition-colors hover:text-[#464feb]">Download CV</a>
						<a href="#contact" className="text-sm font-medium text-neutral-500 underline decoration-neutral-300 underline-offset-8 transition-colors hover:text-[#464feb]">Let&apos;s connect</a>
					</div>
					<div className="mt-8 flex flex-wrap gap-5 font-mono text-xs font-bold uppercase tracking-[0.12em] text-neutral-500">
						<a href="https://github.com/buhanghangjay-git" target="_blank" rel="noreferrer" className="hover:text-[#464feb]">GitHub ↗</a>
						<a href="https://www.linkedin.com/in/jay-buhanghang-624a92430" target="_blank" rel="noreferrer" className="hover:text-[#464feb]">LinkedIn ↗</a>
					</div>
				</div>
				<div className="order-1 lg:order-2">
					<div className="mx-auto flex aspect-square w-[65%] max-w-[260px] items-end justify-center overflow-hidden bg-white sm:max-w-[300px] lg:max-w-[340px]"><Image src="/jay-portfolio.png" alt="Jay Buhanghang wearing a black blazer" width={837} height={839} className="h-full w-full object-cover object-top" /></div>
					<p className="mt-6 pl-0 text-sm leading-7 text-neutral-500">Based in the Philippines<br />Open to meaningful opportunities</p>
					<div className="mt-10 pt-5 font-mono text-xs uppercase tracking-[0.18em] text-neutral-400"></div>
				</div>
			</div>
		</section>
	);
}