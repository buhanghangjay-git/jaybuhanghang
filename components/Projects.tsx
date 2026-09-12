import Image from "next/image";

const screenshots = [
	{ src: "/capstone/capstone-homepage.png", label: "SMFP services homepage", detail: "Introduces the service platform and gives customers a direct path to support." },
	{ src: "/capstone/capstone-cxdashboard.png", label: "Customer dashboard", detail: "Centralizes customer requests, activity, and service status in one view." },
	{ src: "/capstone/capstone-bookingservice.png", label: "Service booking flow", detail: "Guides customers through selecting and submitting a repair service request." },
	{ src: "/capstone/capstone-bookinghistory.png", label: "Booking history", detail: "Makes previous and active repair bookings easier to review." },
	{ src: "/capstone/capstone-transactionhistory.png", label: "Transaction history", detail: "Keeps a visible record of service-related transactions and activity." },
	{ src: "/capstone/capstone-salesreport.png", label: "Sales report", detail: "Gives administrators a clearer view of sales and service performance." },
];

export default function Projects() {
	return (
		<section id="projects" className="py-16 sm:py-20">
			<div className="mx-auto max-w-5xl px-4 sm:px-6">
				<p className="section-kicker">03 / Featured Work</p>
				<div className="mt-8 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
					<div>
						<p className="mb-3 text-sm text-[#464feb]">Academic Case Study / Service Management Platform</p>
						<h2 className="max-w-3xl text-3xl font-semibold leading-[0.95] tracking-[-0.05em] sm:text-4xl lg:text-5xl">SmartLink</h2>
					</div>
					<p className="max-w-md text-left text-lg leading-8 text-neutral-500 sm:text-justify">
							A centralized service management platform designed to streamline repair requests, improve communication, and digitize service operations through a structured workflow.					</p>
				</div>
				<div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
					{[" Centralized Request Management", "Structured Service Workflow", "Real-Time Repair Tracking", "Technician Coordination"].map((feature, index) => (
						<div className="p-0" key={feature}>
							<span className="text-xs text-neutral-400">0{index + 1}</span>
							<h3 className="mt-10 text-lg font-medium">{feature}</h3>
						</div>
					))}
				</div>
				<div className="mt-7 flex flex-wrap gap-x-6 gap-y-2 text-sm text-neutral-500">
					<span>Project Leadership</span><span>System Design</span><span>Frontend Development</span><span>Database Management</span><span>Testing & Validation</span>
				</div>
				<div className="mt-12 grid gap-8 pt-8 lg:grid-cols-[0.8fr_1.2fr]">
					<div>
						<p className="section-kicker">Case study</p>
						<h3 className="mt-4 text-xl font-black uppercase tracking-[-0.05em]">Digitizing Service Operations Through a Centralized Platform</h3>
						<p className="mt-5 text-left leading-7 text-neutral-500 sm:text-justify">As Project Leader, I collaborated with the team to analyze existing service workflows, define system requirements, design the database structure, and support application development activities throughout the project lifecycle.

The platform was created to address fragmented communication and manual request handling by introducing a centralized workflow for customers, technicians, and administrators.</p>
						<div className="mt-7 grid gap-5 text-sm sm:grid-cols-2">
							<div><p className="section-kicker">Stack</p><p className="mt-2 text-neutral-700">HTML · CSS · Tailwind CSS · JavaScript · PHP · MySQL · Git</p></div>
							<div><p className="section-kicker">Development Tools</p><p className="mt-2 text-neutral-700">VS Code · MySQL Server · Postman · Figma</p></div>
							<div><p className="section-kicker">Technical Concepts</p><p className="mt-2 text-neutral-700">DFDs · ERDs · RESTful APIs · responsive testing</p></div>
							<div><p className="section-kicker">Quality Standards</p><p className="mt-2 text-neutral-700">ISO 25010: functionality, reliability, usability, efficiency, maintainability, portability</p></div>
						</div>
					</div>
					<div className="grid gap-3 sm:grid-cols-2">
						{screenshots.map((screenshot, index) => (
							<figure key={screenshot.src}>
								<div className="flip-card aspect-video" tabIndex={0} aria-label={`${screenshot.label}: focus or hover to view details`}>
									<div className="flip-card-inner">
										<div className="flip-card-front absolute inset-0 bg-neutral-900">
											<Image src={screenshot.src} alt={screenshot.label} fill sizes="(min-width: 1024px) 35vw, 90vw" className="object-cover object-top" />
										</div>
										<div className="flip-card-back absolute inset-0 flex flex-col justify-between bg-[#464feb] p-4 text-white">
											<span className="font-mono text-xs font-bold uppercase tracking-[0.12em]">0{index + 1} / SmartLink</span>
											<p className="text-base font-bold leading-6 lg:text-base">{screenshot.detail}</p>
											<span className="font-mono text-[0.65rem] uppercase tracking-[0.12em]">Hover or focus to return</span>
										</div>
									</div>
								</div>
								<figcaption className="pb-1 pt-3 font-mono text-[0.65rem] uppercase tracking-[0.12em] text-neutral-500">0{index + 1} / {screenshot.label}</figcaption>
							</figure>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}